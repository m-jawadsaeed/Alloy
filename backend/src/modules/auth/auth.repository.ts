import {prisma} from "../../config/prisma";

interface CreateUserInput {
  name: string;
  email: string;
  password: string;
}

export class AuthRepository {
  static findUserByEmail(email: string) {
    return prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  static findUserById(id: string) {
    return prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  static createUser(data: CreateUserInput) {
    return prisma.user.create({
      data,
    });
  }

  static updateRefreshToken(userId: string, refreshToken: string | null) {
    return prisma.user.update({
      where: {
        id: userId,
      },

      data: {
        refreshToken,
      },
    });
  }
}
