import { prisma } from "../../config/prisma";

export class AdminService {
  static async overview() {
    const [users, tasks, messages] = await Promise.all([
      prisma.user.count(),
      prisma.task.count(),
      prisma.message.count(),
    ]);

    return {
      users,
      tasks,
      messages,
    };
  }

  static async getUsers() {
    return prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        avatar: true,
        createdAt: true,
      },

      orderBy: {
        createdAt: "desc",
      },
    });
  }
}
