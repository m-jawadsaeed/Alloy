import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";

import {ProtectedRoute} from "./ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Default Route */}
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
        <Route
          path="/dashboard"
          element={<div>Dashboard</div>}
        />
      </Route>

      {/* 404 Route */}
      <Route
        path="*"
        element={
          <div className="flex h-screen items-center justify-center">
            <h1 className="text-4xl font-bold">
              404 Not Found
            </h1>
          </div>
        }
      />
    </Routes>
  );
}