// src/App.tsx

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./features/auth/login";
import Dashboard from "./features/dashboard/dashboard";
import PrivateChat from "./features/chat/privateChat";
import GroupChat from "./features/chat/groupChat";
import Canvas from "./features/canvas/canvas";

import ProtectedRoute from "./routes/protectedRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/chat/private"
          element={
            <ProtectedRoute>
              <PrivateChat />
            </ProtectedRoute>
          }
        />

        <Route
          path="/chat/group"
          element={
            <ProtectedRoute>
              <GroupChat />
            </ProtectedRoute>
          }
        />

        <Route
          path="/canvas"
          element={
            <ProtectedRoute>
              <Canvas />
            </ProtectedRoute>
          }
        />

        {/* Default Route */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        {/* 404 */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;