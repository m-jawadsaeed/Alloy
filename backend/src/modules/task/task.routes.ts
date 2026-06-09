import { Router } from "express";

import { authenticate } from "../../middleware/auth.middleware";

import { validate } from "../../middleware/validate.middleware";

import { createTaskSchema, updateTaskSchema } from "./task.schema";

import { TaskController } from "./task.controller";

import { asyncHandler } from "../../shared/utils/asyncHandler";

const router = Router();

router.use(authenticate);

router.get("/", asyncHandler(TaskController.getTasks));

router.post(
  "/",
  validate(createTaskSchema),
  asyncHandler(TaskController.createTask),
);

router.patch(
  "/:id",
  validate(updateTaskSchema),
  asyncHandler(TaskController.updateTask),
);

router.delete("/:id", asyncHandler(TaskController.deleteTask));

export default router;
