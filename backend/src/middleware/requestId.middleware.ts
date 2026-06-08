import crypto from "crypto";

import { Request } from "express";
import { Response } from "express";
import { NextFunction } from "express";

declare global {
  namespace Express {
    interface Request {
      requestId?: string;
    }
  }
}

export const requestIdMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  req.requestId = crypto.randomUUID();

  next();
};
