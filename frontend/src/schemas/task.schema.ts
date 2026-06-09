import { z } from "zod";

export const createTaskSchema = z.object({
  title: z.string().min(3).max(100),

  description: z.string().min(5).max(1000),

  priority: z.enum(["LOW", "MEDIUM", "HIGH"]),
});

export type CreateTaskSchema = z.infer<typeof createTaskSchema>;
