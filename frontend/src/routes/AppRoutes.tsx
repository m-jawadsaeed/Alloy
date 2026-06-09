import { Routes, Route } from "react-router-dom";

import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";

import ProtectedRoute from "./ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route path="/register" element={<RegisterPage />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<div>Dashboard</div>} />
      </Route>
    </Routes>
  );
}
