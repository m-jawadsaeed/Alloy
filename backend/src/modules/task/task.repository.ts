import {prisma} from "../../config/prisma";

export class TaskRepository {
  static create(data: {
    title: string;

    description?: string;

    priority: "LOW" | "MEDIUM" | "HIGH";

    userId: string;
  }) {
    return prisma.task.create({
      data,
    });
  }

  static update(id: string, data: Record<string, unknown>) {
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

  static findById(id: string) {
    return prisma.task.findUnique({
      where: { id },
    });
  }

  static async findMany(params: {
    userId: string;

    search?: string;

    status?: string;

    priority?: string;

    page: number;

    limit: number;
  }) {
    const { userId, search, status, priority, page, limit } = params;

    const where = {
      userId,

      ...(search && {
        OR: [
          {
            title: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            description: {
              contains: search,
              mode: "insensitive",
            },
          },
        ],
      }),

      ...(status && {
        status,
      }),

      ...(priority && {
        priority,
      }),
    };

    const [tasks, total] = await Promise.all([
      prisma.task.findMany({
        where,

        skip: (page - 1) * limit,

        take: limit,

        orderBy: {
          createdAt: "desc",
        },
      }),

      prisma.task.count({
        where,
      }),
    ]);

    return {
      tasks,

      total,
    };
  }
}
