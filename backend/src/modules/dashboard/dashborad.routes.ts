import { Router } from "express";

import { authenticate } from "../../middleware/auth.middleware";

import { asyncHandler } from "../../shared/utils/asyncHandler";

import { DashboardController } from "./dashboard.controller";

const router = Router();

router.use(authenticate);

router.get("/stats", asyncHandler(DashboardController.stats));

router.get("/activity", asyncHandler(DashboardController.activity));

router.get("/recent-tasks", asyncHandler(DashboardController.recentTasks));

router.get(
  "/recent-messages",
  asyncHandler(DashboardController.recentMessages),
);

export default router;
