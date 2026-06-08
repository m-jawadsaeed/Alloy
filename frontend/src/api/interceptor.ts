import { api } from "./axios";

let isRefreshing = false;

export const setupInterceptor = (
  getAccessToken: () => string | null,
  setAccessToken: (t: string) => void,
) => {
  api.interceptors.request.use((config) => {
    const token = getAccessToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });

  api.interceptors.response.use(
    (res) => res,

    async (error) => {
      const original = error.config;

      if (error.response?.status === 401 && !isRefreshing) {
        isRefreshing = true;

        const res = await api.post("/auth/refresh");

        const newToken = res.data.accessToken;

        setAccessToken(newToken);

        isRefreshing = false;

        original.headers.Authorization = `Bearer ${newToken}`;

        return api(original);
      }

      return Promise.reject(error);
    },
  );
};
