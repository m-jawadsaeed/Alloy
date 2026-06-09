import { z } from "zod";

export const createTaskSchema = z.object({
  body: z.object({
    title: z.string().min(3),

    description: z.string().optional(),

    priority: z.enum(["LOW", "MEDIUM", "HIGH"]),
  }),
});

export const updateTaskSchema = z.object({
  body: z.object({
    title: z.string().min(3).optional(),

    description: z.string().optional(),

    status: z.enum(["TODO", "IN_PROGRESS", "DONE"]).optional(),

    priority: z.enum(["LOW", "MEDIUM", "HIGH"]).optional(),
  }),
});
