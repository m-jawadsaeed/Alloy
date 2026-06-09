import { Router } from "express";

import { authenticate } from "../../middleware/auth.middleware";

import { asyncHandler } from "../../shared/utils/asyncHandler";

import { ChatRoomController } from "./chatRoom.controller";

const router = Router();

router.use(authenticate);

router.post(
  "/",
  asyncHandler(
    ChatRoomController.create,
  ),
);

router.get(
  "/",
  asyncHandler(
    ChatRoomController.getRooms,
  ),
);

router.get(
  "/:id",
  asyncHandler(
    ChatRoomController.getRoom,
  ),
);

export default router;