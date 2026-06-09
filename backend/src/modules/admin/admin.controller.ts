import { Request, Response } from "express";

import { AdminService } from "./admin.service";

export class AdminController {
  static async overview(_req: Request, res: Response) {
    const data = await AdminService.overview();

    return res.json({
      success: true,

      data,
    });
  }
}
