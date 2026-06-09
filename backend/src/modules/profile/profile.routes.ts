import { Router } from "express";

import { authenticate } from "../../middleware/auth.middleware";

import { asyncHandler } from "../../shared/utils/asyncHandler";

import { ProfileController } from "./profile.controller";

const router = Router();

router.use(authenticate);

router.get("/me", asyncHandler(ProfileController.me));

router.patch("/", asyncHandler(ProfileController.updateProfile));

router.patch("/password", asyncHandler(ProfileController.changePassword));

router.patch("/settings", asyncHandler(ProfileController.updateSettings));

export default router;
