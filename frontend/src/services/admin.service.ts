import { api } from "@/api/axios";

export const adminService = {
  async overview() {
    const { data } = await api.get(
      "/admin/overview",
    );

    return data.data;
  },

  async users() {
    const { data } = await api.get(
      "/admin/users",
    );

    return data.data;
  },
};