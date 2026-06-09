import { useQuery } from "@tanstack/react-query";

import { dashboardService } from "../services/dashboard.service";

export const useRecentMessages = () =>
  useQuery({
    queryKey: ["recent-messages"],
    queryFn: dashboardService.getRecentMessages,
  });