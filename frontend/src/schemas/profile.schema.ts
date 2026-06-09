import { z } from "zod";

export const profileSchema = z.object({
  name: z.string().min(2).max(50),

  bio: z.string().max(300).optional(),
});

export type ProfileSchema = z.infer<typeof profileSchema>;
