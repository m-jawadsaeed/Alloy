import { Request } from "express";
import { Response } from "express";
import { NextFunction } from "express";

import { AppError } from "../shared/errors/AppError";

export const authorize =
  (...roles: string[]) =>
  (req: Request, res: Response, next: NextFunction) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return next(new AppError(403, "Forbidden"));
    }

    next();
  };
