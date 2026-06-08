import express, {
  Application,
  Request,
  Response,
  NextFunction,
} from "express";

import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import morgan from "morgan";

import swaggerUi from "swagger-ui-express";

import { env } from "./config/env";

import { swaggerSpec } from "./config/swagger";

import { errorMiddleware } from "../src/middleware/error.middleware";

import authRoutes from "./modules/auth/auth.routes";
import taskRoutes from "./modules/task/task.routes";
import { messageRoutes } from "./modules/message/message.routes";

const app: Application = express();

/**
 * Security Headers
 */
app.use(helmet());

/**
 * CORS
 */
app.use(
  cors({
    origin: env.CLIENT_URL,
    credentials: true,
  })
);

/**
 * Body Parsers
 */
app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

/**
 * Cookies
 */
app.use(cookieParser());

/**
 * Request Logger
 */
app.use(morgan("dev"));

/**
 * Health Check
 */
app.get(
  "/health",
  (
    req: Request,
    res: Response
  ) => {
    res.status(200).json({
      success: true,
      message: "Server Running",
    });
  }
);

/**
 * Swagger
 */
app.use(
  "/api/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);

/**
 * API Routes
 */
app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/tasks",
  taskRoutes
);

app.use(
  "/api/messages",
  messageRoutes
);

/**
 * 404 Route
 */
app.use(
  (
    req: Request,
    res: Response
  ) => {
    res.status(404).json({
      success: false,
      message: "Route Not Found",
    });
  }
);

/**
 * Global Error Handler
 */
app.use(errorMiddleware);

export { app };