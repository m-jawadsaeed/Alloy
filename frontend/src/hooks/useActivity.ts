import { useQuery } from "@tanstack/react-query";

import { dashboardService } from "../services/dashboard.service";

export const useActivity = () =>
  useQuery({
    queryKey: ["activity"],
    queryFn: dashboardService.getActivity,
  });