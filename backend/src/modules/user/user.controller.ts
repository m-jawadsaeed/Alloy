import { Request } from "express";
import { Response } from "express";

import { prisma } from "../../config/prisma";

import { successResponse } from "../../shared/utils/response";

export class UserController {
  static me = async (req: Request, res: Response) => {
    const user = await prisma.user.findUnique({
      where: {
        id: req.user!.userId,
      },
      select: {
        id: true,
        email: true,
        role: true,
      },
    });

    return successResponse(res, 200, "User profile", user);
  };

  static getAllUsers = async (req: Request, res: Response) => {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        role: true,
      },
    });

    return successResponse(res, 200, "Users fetched", users);
  };
}
