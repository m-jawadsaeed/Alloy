import { Request, Response } from "express";

import { ProfileService } from "./profile.service";

export class ProfileController {
  static async me(req: Request, res: Response) {
    const profile = await ProfileService.getProfile(req.user!.userId);

    return res.json({
      success: true,
      data: profile,
    });
  }

  static async updateProfile(req: Request, res: Response) {
    const profile = await ProfileService.updateProfile(
      req.user!.userId,
      req.body,
    );

    return res.json({
      success: true,
      data: profile,
    });
  }

  static async changePassword(req: Request, res: Response) {
    await ProfileService.changePassword(
      req.user!.userId,
      req.body.currentPassword,
      req.body.newPassword,
    );

    return res.json({
      success: true,
      message: "Password updated",
    });
  }

  static async updateSettings(req: Request, res: Response) {
    const settings = await ProfileService.updateSettings(
      req.user!.userId,
      req.body,
    );

    return res.json({
      success: true,
      data: settings,
    });
  }
}
