import { z } from "zod";

export const registerSchema = z.object({
  body: z.object({
    email: z.email(),

    password: z.string().min(8).max(32),
  }),
});

export const loginSchema = z.object({
  body: z.object({
    email: z.email(),

    password: z.string(),
  }),
});
