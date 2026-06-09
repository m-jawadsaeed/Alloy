import { Request, Response } from "express";

import { DashboardService } from "./dashboard.service";

export class DashboardController {
  static async stats(req: Request, res: Response) {
    const data = await DashboardService.stats(req.user!.userId);

    return res.json({
      success: true,

      data,
    });
  }

  static async activity(req: Request, res: Response) {
    const data = await DashboardService.activity(req.user!.userId);

    return res.json({
      success: true,

      data,
    });
  }

  static async recentTasks(req: Request, res: Response) {
    const data = await DashboardService.recentTasks(req.user!.userId);

    return res.json({
      success: true,

      data,
    });
  }

  static async recentMessages(req: Request, res: Response) {
    const data = await DashboardService.recentMessages(req.user!.userId);

    return res.json({
      success: true,

      data,
    });
  }
}
