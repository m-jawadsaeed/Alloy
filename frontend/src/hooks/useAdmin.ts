import { useQuery } from "@tanstack/react-query";

import { adminService } from "@/services/admin.service";

export const useAdminOverview = () =>
  useQuery({
    queryKey: ["admin-overview"],
    queryFn: adminService.overview,
  });

export const useAdminUsers = () =>
  useQuery({
    queryKey: ["admin-users"],
    queryFn: adminService.users,
  });