import { Router } from "express";

import { MessageController } from "./message.controller";

import { authenticate } from "../../middleware/auth.middleware";

const router = Router();

router.get("/room/:roomId", authenticate, MessageController.getRoomMessages);

router.get(
  "/private/:userId",
  authenticate,
  MessageController.getPrivateMessages,
);

export const messageRoutes = router;
