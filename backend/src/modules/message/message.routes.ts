import { Router } from "express";

import { authenticate } from "../../middleware/auth.middleware";

import { asyncHandler } from "../../shared/utils/asyncHandler";

import { MessageController } from "./message.controller";

const router = Router();

router.use(authenticate);

router.get("/private/:userId", asyncHandler(MessageController.privateHistory));

router.get("/room/:roomId", asyncHandler(MessageController.roomHistory));

router.patch("/read/:messageId", asyncHandler(MessageController.markAsRead));

export { router as messageRoutes };
