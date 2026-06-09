import { TaskRepository } from "./task.repository";

import { AppError } from "../../shared/errors/AppError";

export class TaskService {
  static async getTasks(
    userId: string,
    query: {
      search?: string;

      status?: string;

      priority?: string;

      page?: number;

      limit?: number;
    },
  ) {
    const page = Number(query.page) || 1;

    const limit = Number(query.limit) || 10;

    const result = await TaskRepository.findMany({
      userId,

      search: query.search,

      status: query.status,

      priority: query.priority,

      page,

      limit,
    });

    return {
      tasks: result.tasks,

      total: result.total,

      page,

      limit,

      totalPages: Math.ceil(result.total / limit),
    };
  }

  static async createTask(payload: {
    title: string;

    description?: string;

    priority: "LOW" | "MEDIUM" | "HIGH";

    userId: string;
  }) {
    return TaskRepository.create(payload);
  }

  static async updateTask(taskId: string, data: Record<string, unknown>) {
    const task = await TaskRepository.findById(taskId);

    if (!task) {
      throw new AppError(404, "Task not found");
    }

    return TaskRepository.update(taskId, data);
  }

  static async deleteTask(taskId: string) {
    const task = await TaskRepository.findById(taskId);

    if (!task) {
      throw new AppError(404, "Task not found");
    }

    return TaskRepository.delete(taskId);
  }
}
