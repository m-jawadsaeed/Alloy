import { AppError } from "../../shared/errors/AppError";

import { TaskRepository } from "./task.repository";

export class TaskService {
  static async createTask(
    userId: string,
    payload: {
      title: string;
      description?: string;
    },
  ) {
    return TaskRepository.create({
      ...payload,
      userId,
    });
  }

  static async getTask(taskId: string) {
    const task = await TaskRepository.findById(taskId);

    if (!task) {
      throw new AppError(404, "Task not found");
    }

    return task;
  }

  static async updateTask(taskId: string, userId: string, payload: any) {
    const task = await TaskRepository.findById(taskId);

    if (!task) {
      throw new AppError(404, "Task not found");
    }

    if (task.userId !== userId) {
      throw new AppError(403, "Forbidden");
    }

    return TaskRepository.update(taskId, payload);
  }

  static async deleteTask(taskId: string, userId: string) {
    const task = await TaskRepository.findById(taskId);

    if (!task) {
      throw new AppError(404, "Task not found");
    }

    if (task.userId !== userId) {
      throw new AppError(403, "Forbidden");
    }

    return TaskRepository.delete(taskId);
  }

  static async getTasks(userId: string, page = 1, limit = 10, search = "") {
    const skip = (page - 1) * limit;

    const [tasks, total] = await Promise.all([
      TaskRepository.findMany(userId, skip, limit, search),

      TaskRepository.count(userId),
    ]);

    return {
      tasks,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    };
  }
}
