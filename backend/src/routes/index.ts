import { Router } from "express";

import authRoutes from "../modules/auth/auth.routes";

import userRoutes from "../modules/user/user.routes";
import taskRoutes from "../modules/task/task.routes";
import dashboardRoutes from "../modules/dashboard/dashborad.routes";

const router = Router();

router.use("/auth", authRoutes);

router.use("/users", userRoutes);

router.use("/tasks", taskRoutes);

router.use("/dashboard", dashboardRoutes);

export default router;
