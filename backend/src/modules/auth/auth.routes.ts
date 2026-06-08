import { Router } from "express";

import { validate } from "../../middleware/validate.middleware";

import { loginSchema, registerSchema } from "./auth.schema";

import { AuthController } from "./auth.controller";

import { authenticate } from "../../middleware/auth.middleware";

import { asyncHandler } from "../../shared/utils/asyncHandler";
import { authLimiter } from "../../middleware/rateLimit.middleware";

const router = Router();

router.post(
  "/register",
  authLimiter,
  validate(registerSchema),
  asyncHandler(AuthController.register),
);

router.post(
  "/login",
  authLimiter,
  validate(loginSchema),
  asyncHandler(AuthController.login),
);

router.post("/refresh", authLimiter, asyncHandler(AuthController.refresh));

router.post(
  "/logout",
  authLimiter,
  authenticate,
  asyncHandler(AuthController.logout),
);

export default router;
