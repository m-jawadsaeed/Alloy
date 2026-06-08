import { Response } from "express";

import { COOKIE_NAME } from "../constants/auth.constants";

export const setRefreshCookie = (res: Response, token: string) => {
  res.cookie(COOKIE_NAME, token, {
    httpOnly: true,

    secure: process.env.NODE_ENV === "production",

    sameSite: "strict",

    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
};
