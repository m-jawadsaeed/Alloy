import { Request, Response } from "express";

import { AuthService } from "./auth.service";

import { env } from "../../config/env";

export class AuthController {
  static async register(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const result = await AuthService.register({
      name,

      email,

      password,
    });

    res.cookie("refreshToken", result.refreshToken, {
      httpOnly: true,

      sameSite: env.NODE_ENV === "production" ? "none" : "strict",

      secure: env.NODE_ENV === "production",

      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(201).json({
      success: true,

      accessToken: result.accessToken,

      user: result.user,
    });
  }

  static async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const result = await AuthService.login({
      email,

      password,
    });

    res.cookie("refreshToken", result.refreshToken, {
      httpOnly: true,

      sameSite: env.NODE_ENV === "production" ? "none" : "strict",

      secure: env.NODE_ENV === "production",

      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.json({
      success: true,

      accessToken: result.accessToken,

      user: result.user,
    });
  }

  static async refresh(req: Request, res: Response) {
    const token = req.cookies.refreshToken;

    const result = await AuthService.refresh(token);

    res.cookie("refreshToken", result.refreshToken, {
      httpOnly: true,

      sameSite: env.NODE_ENV === "production" ? "none" : "strict",

      secure: env.NODE_ENV === "production",
    });

    return res.json({
      success: true,

      accessToken: result.accessToken,
    });
  }

  static async logout(req: Request, res: Response) {
    await AuthService.logout(req.user!.userId);

    res.clearCookie("refreshToken");

    return res.json({
      success: true,
    });
  }
}
