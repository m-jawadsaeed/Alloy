import { Router } from "express";

import { authenticate } from "../../middleware/auth.middleware";

import { asyncHandler } from "../../shared/utils/asyncHandler";

import { CanvasController } from "./canvas.controller";

const router = Router();

router.use(authenticate);

router.post("/", asyncHandler(CanvasController.create));

router.get("/", asyncHandler(CanvasController.getBoards));

router.get("/:id", asyncHandler(CanvasController.getBoard));

router.post("/:id", asyncHandler(CanvasController.saveBoard));

router.delete("/:id", asyncHandler(CanvasController.deleteBoard));

export default router;
