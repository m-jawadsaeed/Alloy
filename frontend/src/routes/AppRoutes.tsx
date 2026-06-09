import { Navigate, Route, Routes } from "react-router-dom";

import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import DashboardPage from "@/pages/DashboardPage";
import TasksPage from "@/pages/TaskPage";
import ChatPage from "@/pages/ChatPage";
import GroupChatPage from "@/pages/GroupChatPage";
import CanvasPage from "@/pages/CanvasPage";
import ProfilePage from "@/pages/ProfilePage";
import SettingsPage from "@/pages/SettingPage";
import AdminPage from "@/pages/AdminPage";
import NotFoundPage from "@/pages/NotFoundPage";

import { ProtectedRoute } from "./ProtectedRoute";
import {RoleGuard}  from "./RoleGuard";

import { AppLayout } from "@/components/layout/AppLayout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Navigate
            to="/login"
            replace
          />
        }
      />

      <Route
        path="/login"
        element={<LoginPage />}
      />

      <Route
        path="/register"
        element={<RegisterPage />}
      />

      <Route element={<ProtectedRoute />}>
        <Route element={<AppLayout />}>
          <Route
            path="/dashboard"
            element={<DashboardPage />}
          />

          <Route
            path="/tasks"
            element={<TasksPage />}
          />

          <Route
            path="/chat"
            element={<ChatPage />}
          />

          <Route
            path="/group-chat"
            element={<GroupChatPage />}
          />

          <Route
            path="/canvas"
            element={<CanvasPage />}
          />

          <Route
            path="/profile"
            element={<ProfilePage />}
          />

          <Route
            path="/settings"
            element={<SettingsPage />}
          />

          <Route
            element={<RoleGuard roles={["ADMIN"]} />}
          >
            <Route
              path="/admin"
              element={<AdminPage />}
            />
          </Route>
        </Route>
      </Route>

      <Route
        path="*"
        element={<NotFoundPage />}
      />
    </Routes>
  );
}