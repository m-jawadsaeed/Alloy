import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
  PORT: z.string(),

  DATABASE_URL: z.string(),

  CLIENT_URL: z.string(),

  JWT_ACCESS_SECRET: z.string(),

  JWT_REFRESH_SECRET: z.string(),

  ACCESS_TOKEN_EXPIRES: z.string(),

  REFRESH_TOKEN_EXPIRES: z.string(),

  NODE_ENV: z.enum(["development", "production", "test"]),
});

export const env = envSchema.parse(process.env);
