import { Router } from "express";

import { authenticate } from "../../middleware/auth.middleware";
import { authorize } from "../../middleware/rbac.middleware";
import { asyncHandler } from "../../shared/utils/asyncHandler";

import { AdminController } from "./admin.controller";

const router = Router();

router.use(authenticate);

router.use(authorize("ADMIN"));

router.get("/overview", asyncHandler(AdminController.overview));

router.get("/users", asyncHandler(AdminController.users));

export default router;
