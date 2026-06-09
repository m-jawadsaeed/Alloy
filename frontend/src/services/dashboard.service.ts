import { api } from "../api/axios";

import {
  DashboardStats,
  RecentTask,
  RecentMessage,
  ActivityItem,
} from "../types/dashboard.types";

export const dashboardService = {
  getStats: async (): Promise<DashboardStats> => {
    const { data } = await api.get("/dashboard/stats");

    return data.data;
  },

  getRecentTasks: async (): Promise<RecentTask[]> => {
    const { data } = await api.get("/dashboard/recent-tasks");

    return data.data;
  },

  getRecentMessages: async (): Promise<RecentMessage[]> => {
    const { data } = await api.get("/dashboard/recent-messages");

    return data.data;
  },

  getActivity: async (): Promise<ActivityItem[]> => {
    const { data } = await api.get("/dashboard/activity");

    return data.data;
  },
};
