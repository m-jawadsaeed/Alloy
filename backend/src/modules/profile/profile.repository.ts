import {prisma} from "../../config/prisma";

export class ProfileRepository {
  static findById(userId: string) {
    return prisma.user.findUnique({
      where: {
        id: userId,
      },

      select: {
        id: true,
        name: true,
        email: true,
        avatar: true,
        role: true,
        darkMode: true,
        notificationEnabled: true,
        soundEnabled: true,
        createdAt: true,
      },
    });
  }

  static updateProfile(
    userId: string,
    data: {
      name?: string;
      avatar?: string;
    },
  ) {
    return prisma.user.update({
      where: {
        id: userId,
      },

      data,
    });
  }

  static updatePassword(userId: string, password: string) {
    return prisma.user.update({
      where: {
        id: userId,
      },

      data: {
        password,
      },
    });
  }

  static updateSettings(
    userId: string,
    settings: {
      darkMode?: boolean;
      notificationEnabled?: boolean;
      soundEnabled?: boolean;
    },
  ) {
    return prisma.user.update({
      where: {
        id: userId,
      },

      data: settings,
    });
  }
}
