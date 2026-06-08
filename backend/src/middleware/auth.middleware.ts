import { Request } from "express";
import { Response } from "express";
import { NextFunction } from "express";

import { AppError } from "../shared/errors/AppError";

import { verifyAccessToken } from "../shared/utils/verifyJwt";
import { JwtPayload } from "../types/jwt.types";

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      throw new AppError(401, "Unauthorized");
    }

    const token = authHeader.split(" ")[1];

    const payload = verifyAccessToken(token) as JwtPayload;

    req.user = {
      userId: payload.userId,
      role: payload.role,
    };

    next();
  } catch {
    next(new AppError(401, "Unauthorized"));
  }
};
