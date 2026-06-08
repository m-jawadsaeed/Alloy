import { Router } from "express";

import { authenticate } from "../../middleware/auth.middleware";

import { validate } from "../../middleware/validate.middleware";

import { createTaskSchema, updateTaskSchema } from "./task.schema";

import { asyncHandler } from "../../shared/utils/asyncHandler";

import { TaskController } from "./task.controller";

const router = Router();

router.use(authenticate);

router.post(
  "/",
  validate(createTaskSchema),
  asyncHandler(TaskController.createTask),
);

router.get("/", asyncHandler(TaskController.getTasks));

router.patch(
  "/:id",
  validate(updateTaskSchema),
  asyncHandler(TaskController.updateTask),
);

router.delete("/:id", asyncHandler(TaskController.deleteTask));

export default router;
