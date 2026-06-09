import { Navigate, Outlet } from "react-router-dom";

import { useAuthStore } from "@/store/auth.store";

import type { UserRole } from "@/types/auth.types";

interface RoleGuardProps {
  allowedRoles: UserRole[];
}

export default function RoleGuard({ allowedRoles }: RoleGuardProps) {
  const user = useAuthStore((state) => state.user);

  if (!user) {
    return <Navigate replace to="/login" />;
  }

  const hasPermission = allowedRoles.includes(user.role);

  if (!hasPermission) {
    return <Navigate replace to="/dashboard" />;
  }

  return <Outlet />;
}
