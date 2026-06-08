import bcrypt from "bcrypt";

import { AuthRepository } from "./auth.repository";

import { AppError } from "../../shared/errors/AppError";

import {
  createAccessToken,
  createRefreshToken,
} from "../../shared/utils/token";

import jwt from "jsonwebtoken";
import { env } from "../../config/env";


export class AuthService {
  // REGISTER USER

  static async register(payload: { email: string; password: string }) {
    const existingUser = await AuthRepository.findUserByEmail(payload.email);

    if (existingUser) {
      throw new AppError(409, "User already exists");
    }

    const hashedPassword = await bcrypt.hash(payload.password, 10);

    const user = await AuthRepository.createUser({
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
        email: user.email,
        role: user.role,
      },
      accessToken,
      refreshToken,
    };
  }

  //  LOGIN USER

  static async login(payload: { email: string; password: string }) {
    const user = await AuthRepository.findUserByEmail(payload.email);

    if (!user) {
      throw new AppError(401, "Invalid credentials");
    }

    const isPasswordValid = await bcrypt.compare(
      payload.password,
      user.password,
    );

    if (!isPasswordValid) {
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
        email: user.email,
        role: user.role,
      },
      accessToken,
      refreshToken,
    };
  }

  // REFRESH TOKEN (ROTATION + SECURITY)

  static async refreshToken(userId: string, token: string) {
    const user = await AuthRepository.findUserById(userId);

    if (!user) {
      throw new AppError(401, "User not found");
    }

    // Token reuse detection
    if (user.refreshToken !== token) {
      await AuthRepository.updateRefreshToken(user.id, null);

      throw new AppError(401, "Refresh token reuse detected. Logged out.");
    }

    const newAccessToken = createAccessToken({
      userId: user.id,
      role: user.role,
    });

    const newRefreshToken = createRefreshToken(user.id);

    await AuthRepository.updateRefreshToken(user.id, newRefreshToken);

    return {
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    };
  }

  //LOGOUT

  static async logout(userId: string) {
    await AuthRepository.updateRefreshToken(userId, null);

    return true;
  }

  static async refresh(token: string) {
    if (!token) {
      throw new AppError(401, "Refresh token missing");
    }

    const decoded = jwt.verify(token, env.JWT_REFRESH_SECRET) as {
      userId: string;
    };

    return this.refreshToken(decoded.userId, token);
  }
}
