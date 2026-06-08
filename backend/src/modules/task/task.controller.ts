import { Request } from "express";

import { Response } from "express";

import { TaskService } from "./task.service";

import { successResponse } from "../../shared/utils/response";

export class TaskController {
  static createTask = async (req: Request, res: Response) => {
    const task = await TaskService.createTask(req.user!.userId, req.body);

    return successResponse(res, 201, "Task created", task);
  };

  static getTasks = async (req: Request, res: Response) => {
    const result = await TaskService.getTasks(
      req.user!.userId,
      Number(req.query.page) || 1,
      Number(req.query.limit) || 10,
      String(req.query.search || ""),
    );

    return successResponse(res, 200, "Tasks fetched", result);
  };

  static updateTask = async (req: Request, res: Response) => {
    const task = await TaskService.updateTask(
      String(req.params.id),
      req.user!.userId,
      req.body,
    );

    return successResponse(res, 200, "Task updated", task);
  };

  static deleteTask = async (req: Request, res: Response) => {
    await TaskService.deleteTask(String(req.params.id), req.user!.userId);

    return successResponse(res, 200, "Task deleted");
  };
}
