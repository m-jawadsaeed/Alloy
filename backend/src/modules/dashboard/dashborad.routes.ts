import { Router } from "express";

import { authenticate } from "../../middleware/auth.middleware";

import { asyncHandler } from "../../shared/utils/asyncHandler";

import { DashboardController } from "./dashboard.controller";

const router = Router();

router.get("/stats", authenticate, asyncHandler(DashboardController.stats));

export default router;
