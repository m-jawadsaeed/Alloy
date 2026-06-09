import { Navigate, Outlet } from "react-router-dom";

import { useAuthStore } from "@/store/auth.store";

interface RoleGuardProps {
  roles: string[];
}

export function RoleGuard({ roles }: RoleGuardProps) {
  const user = useAuthStore((state) => state.user);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!roles.includes(user.role)) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
}
