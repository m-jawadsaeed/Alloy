import jwt from "jsonwebtoken";

import { env } from "../../config/env";

export const createAccessToken = (payload: {
  userId: string;
  role: string;
}) => {
  return jwt.sign(payload, env.JWT_ACCESS_SECRET, {
    expiresIn: env.ACCESS_TOKEN_EXPIRES,
  });
};

export const createRefreshToken = (userId: string) => {
  return jwt.sign({ userId }, env.JWT_REFRESH_SECRET, {
    expiresIn: env.REFRESH_TOKEN_EXPIRES,
  });
};
