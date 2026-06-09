import { prisma } from "../../config/prisma";

import type { RecentTask, RecentMessage } from "./dashboard.types";

export class DashboardRepository {
  static countTasks(userId: string): Promise<number> {
    return prisma.task.count({
      where: {
        userId,
      },
    });
  }

  static countCompletedTasks(userId: string): Promise<number> {
    return prisma.task.count({
      where: {
        userId,
        status: "DONE",
      },
    });
  }

  static countInProgressTasks(userId: string): Promise<number> {
    return prisma.task.count({
      where: {
        userId,
        status: "IN_PROGRESS",
      },
    });
  }

  static countTodoTasks(userId: string): Promise<number> {
    return prisma.task.count({
      where: {
        userId,
        status: "TODO",
      },
    });
  }

  static totalUsers(): Promise<number> {
    return prisma.user.count();
  }

  static totalMessages(): Promise<number> {
    return prisma.message.count();
  }

  static async recentTasks(userId: string): Promise<RecentTask[]> {
    return prisma.task.findMany({
      where: {
        userId,
      },

      select: {
        id: true,
        title: true,
        createdAt: true,
      },

      orderBy: {
        createdAt: "desc",
      },

      take: 5,
    });
  }

  static async recentMessages(userId: string): Promise<RecentMessage[]> {
    return prisma.message.findMany({
      where: {
        OR: [
          {
            senderId: userId,
          },
          {
            receiverId: userId,
          },
        ],
      },

      select: {
        id: true,
        content: true,
        createdAt: true,
      },

      orderBy: {
        createdAt: "desc",
      },

      take: 5,
    });
  }
}
