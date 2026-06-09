import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { AuthRepository } from "./auth.repository";

import { AppError } from "../../shared/errors/AppError";

import {
  createAccessToken,
  createRefreshToken,
} from "../../shared/utils/token";

import { env } from "../../config/env";

interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

interface LoginPayload {
  email: string;
  password: string;
}

export class AuthService {
  // REGISTER

  static async register(payload: RegisterPayload) {
    const existingUser = await AuthRepository.findUserByEmail(payload.email);

    if (existingUser) {
      throw new AppError(409, "User already exists");
    }

    const hashedPassword = await bcrypt.hash(payload.password, 10);

    const user = await AuthRepository.createUser({
      name: payload.name,

      email: payload.email,

      password: hashedPassword,
    });

    const accessToken = createAccessToken({
      userId: user.id,

      role: user.role,
    });

    const refreshToken = createRefreshToken(user.id);

    await AuthRepository.updateRefreshToken(user.id, refreshToken);

    return {
      user: {
        id: user.id,

        name: user.name,

        email: user.email,

        role: user.role,

        avatar: user.avatar,
      },

      accessToken,

      refreshToken,
    };
  }

  // LOGIN

  static async login(payload: LoginPayload) {
    const user = await AuthRepository.findUserByEmail(payload.email);

    if (!user) {
      throw new AppError(401, "Invalid credentials");
    }

    const validPassword = await bcrypt.compare(payload.password, user.password);

    if (!validPassword) {
      throw new AppError(401, "Invalid credentials");
    }

    const accessToken = createAccessToken({
      userId: user.id,

      role: user.role,
    });

    const refreshToken = createRefreshToken(user.id);

    await AuthRepository.updateRefreshToken(user.id, refreshToken);

    return {
      user: {
        id: user.id,

        name: user.name,

        email: user.email,

        role: user.role,

        avatar: user.avatar,
      },

      accessToken,

      refreshToken,
    };
  }

  // REFRESH TOKEN

  static async refreshToken(userId: string, token: string) {
    const user = await AuthRepository.findUserById(userId);

    if (!user) {
      throw new AppError(401, "User not found");
    }

    if (user.refreshToken !== token) {
      await AuthRepository.updateRefreshToken(user.id, null);

      throw new AppError(401, "Refresh token reuse detected");
    }

    const accessToken = createAccessToken({
      userId: user.id,

      role: user.role,
    });

    const refreshToken = createRefreshToken(user.id);

    await AuthRepository.updateRefreshToken(user.id, refreshToken);

    return {
      accessToken,

      refreshToken,
    };
  }

  // REFRESH

  static async refresh(token: string) {
    if (!token) {
      throw new AppError(401, "Refresh token missing");
    }

    const decoded = jwt.verify(token, env.JWT_REFRESH_SECRET) as {
      userId: string;
    };

    return this.refreshToken(decoded.userId, token);
  }

  // LOGOUT

  static async logout(userId: string) {
    await AuthRepository.updateRefreshToken(userId, null);

    return true;
  }
}
