import { Request, Response } from "express";
import { TaskService } from "./task.service";

export class TaskController {
  static async getTasks(req: Request, res: Response) {
    const result = await TaskService.getTasks(req.user!.userId, req.query);

    return res.json({
      success: true,

      ...result,
    });
  }

  static async createTask(req: Request, res: Response) {
    const task = await TaskService.createTask({
      ...req.body,

      userId: req.user!.userId,
    });

    return res.status(201).json({
      success: true,

      task,
    });
  }

  static async updateTask(req: Request, res: Response) {
    const task = await TaskService.updateTask(String(req.params.id), req.body);

    return res.json({
      success: true,

      task,
    });
  }

  static async deleteTask(req: Request, res: Response) {
    await TaskService.deleteTask(String(req.params.id));

    return res.json({
      success: true,
    });
  }
}
