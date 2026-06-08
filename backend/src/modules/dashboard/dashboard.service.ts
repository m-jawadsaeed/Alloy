import { prisma } from "../../config/prisma";

export class DashboardService {
  static async stats(userId: string) {
    const [total, todo, progress, done] = await Promise.all([
      prisma.task.count({
        where: {
          userId,
        },
      }),

      prisma.task.count({
        where: {
          userId,
          status: "TODO",
        },
      }),

      prisma.task.count({
        where: {
          userId,
          status: "IN_PROGRESS",
        },
      }),

      prisma.task.count({
        where: {
          userId,
          status: "DONE",
        },
      }),
    ]);

    return {
      total,
      todo,
      progress,
      done,
    };
  }
}
