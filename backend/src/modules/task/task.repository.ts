import { prisma } from "../../config/prisma";

export class TaskRepository {
  static create(data: any) {
    return prisma.task.create({
      data,
    });
  }

  static findById(id: string) {
    return prisma.task.findUnique({
      where: { id },
    });
  }

  static update(id: string, data: any) {
    return prisma.task.update({
      where: { id },
      data,
    });
  }

  static delete(id: string) {
    return prisma.task.delete({
      where: { id },
    });
  }

  static findMany(userId: string, skip: number, take: number, search?: string) {
    return prisma.task.findMany({
      where: {
        userId,

        title: search
          ? {
              contains: search,
              mode: "insensitive",
            }
          : undefined,
      },

      skip,

      take,

      orderBy: {
        createdAt: "desc",
      },
    });
  }

  static count(userId: string) {
    return prisma.task.count({
      where: { userId },
    });
  }
}
