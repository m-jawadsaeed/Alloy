import bcrypt from "bcrypt";

import { AppError } from "../../shared/errors/AppError";

import {prisma} from "../../config/prisma";

import { ProfileRepository } from "./profile.repository";

export class ProfileService {
  static async getProfile(userId: string) {
    return ProfileRepository.findById(userId);
  }

  static async updateProfile(
    userId: string,
    payload: {
      name?: string;
      avatar?: string;
    },
  ) {
    return ProfileRepository.updateProfile(userId, payload);
  }

  static async changePassword(
    userId: string,
    currentPassword: string,
    newPassword: string,
  ) {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new AppError(404, "User not found");
    }

    const isValid = await bcrypt.compare(currentPassword, user.password);

    if (!isValid) {
      throw new AppError(400, "Invalid password");
    }

    const hashed = await bcrypt.hash(newPassword, 10);

    return ProfileRepository.updatePassword(userId, hashed);
  }

  static async updateSettings(
    userId: string,
    settings: {
      darkMode?: boolean;
      notificationEnabled?: boolean;
      soundEnabled?: boolean;
    },
  ) {
    return ProfileRepository.updateSettings(userId, settings);
  }
}
