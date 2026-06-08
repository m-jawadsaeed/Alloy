import { Router } from "express";

import { authenticate } from "../../middleware/auth.middleware";

import { authorize } from "../../middleware/rbac.middleware";

import { UserController } from "./user.controller";

import { asyncHandler } from "../../shared/utils/asyncHandler";
import { authLimiter } from "../../middleware/rateLimit.middleware";

const router = Router();

router.get("/me", authenticate, authLimiter, asyncHandler(UserController.me));

router.get(
  "/all",
  authenticate,
  authLimiter,
  authorize("ADMIN"),
  asyncHandler(UserController.getAllUsers),
);

export default router;
