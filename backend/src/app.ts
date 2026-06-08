import express, { Application, Request, Response, NextFunction } from "express";

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
import uploadRoutes from "./modules/upload/upload.routes";

const app: Application = express();

app.use(helmet());
app.use(
  cors({
    origin: env.CLIENT_URL,
    credentials: true,
  }),
);

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(cookieParser());

app.use(morgan("dev"));

app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Server Running",
  });
});

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api/auth", authRoutes);

app.use("/api/tasks", taskRoutes);

app.use("/api/messages", messageRoutes);


app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

app.use(errorMiddleware);

app.use("/api/upload", uploadRoutes);

export { app };
