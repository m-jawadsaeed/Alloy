import { ZodObject } from "zod";
import { Request } from "express";
import { Response } from "express";
import { NextFunction } from "express";

export const validate =
  (schema: ZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    schema.parse({
      body: req.body,
    });

    next();
  };
