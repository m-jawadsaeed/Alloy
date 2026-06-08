import { Request } from "express";

import { Response } from "express";

import { DashboardService } from "./dashboard.service";

import { successResponse } from "../../shared/utils/response";

export class DashboardController {
  static stats = async (req: Request, res: Response) => {
    const stats = await DashboardService.stats(req.user!.userId);

    return successResponse(res, 200, "Dashboard stats", stats);
  };
}
