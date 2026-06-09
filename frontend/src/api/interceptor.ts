import { AxiosError } from "axios";
import { api } from "./axios";

let isRefreshing = false;

api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !isRefreshing && originalRequest) {
      try {
        isRefreshing = true;

        await api.post("/api/auth/refresh");

        return api(originalRequest);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  },
);
