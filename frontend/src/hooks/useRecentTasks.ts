import { useQuery } from "@tanstack/react-query";

import { dashboardService } from "../services/dashboard.service";

export const useRecentTasks = () =>
  useQuery({
    queryKey: ["recent-tasks"],
    queryFn: dashboardService.getRecentTasks,
  });