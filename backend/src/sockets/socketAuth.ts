import jwt from "jsonwebtoken";
import { env } from "../config/env";

export const verifySocketToken = (token: string) => {
  try {
    return jwt.verify(token, env.JWT_ACCESS_SECRET) as any;
  } catch {
    return null;
  }
};
