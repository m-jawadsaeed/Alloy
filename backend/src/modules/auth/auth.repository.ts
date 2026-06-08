import { prisma } from "../../config/prisma";

export class AuthRepository {
  static findUserByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email },
    });
  }

  static findUserById(id: string) {
    return prisma.user.findUnique({
      where: { id },
    });
  }

  static createUser(data: { email: string; password: string }) {
    return prisma.user.create({
      data,
    });
  }

  static updateRefreshToken(id: string, refreshToken: string | null) {
    return prisma.user.update({
      where: { id },
      data: {
        refreshToken,
      },
    });
  }
}
