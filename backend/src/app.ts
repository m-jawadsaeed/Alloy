import express, { Application, Request, Response, NextFunction } from "express";
import path from "path";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import compression from "compression";
import swaggerUi from "swagger-ui-express";

import { env } from "./config/env";

import { swaggerSpec } from "./config/swagger";

import { errorMiddleware } from "../src/middleware/error.middleware";
import canvasRoutes from "./modules/canvas/canvas.routes";
import authRoutes from "./modules/auth/auth.routes";
import taskRoutes from "./modules/task/task.routes";
import { messageRoutes } from "./modules/message/message.routes";
import uploadRoutes from "./modules/upload/upload.routes";
import profileRoutes from "./modules/profile/profile.routes";
import dashboardRoutes from "../src/modules/dashboard/dashborad.routes";
import adminRoutes from "./modules/admin/admin.routes";
import chatRoomRoutes from "./modules/chatRoom/chatRoom.routes";

const app: Application = express();

app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));
app.use(helmet());
app.use(
  cors({
    origin: env.CLIENT_URL,
    credentials: true,
  }),
);

app.use(compression());

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
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));
app.use("/api/auth", authRoutes);
app.use("/api/canvas", canvasRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/chat-rooms", chatRoomRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/admin", adminRoutes);

app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

app.use("/api/upload", uploadRoutes);

app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

app.use(errorMiddleware);

export { app };
