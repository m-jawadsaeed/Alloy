import { api } from "@/api/axios";

import type {
  LoginPayload,
  RegisterPayload,
  AuthResponse,
  RefreshResponse,
} from "@/types/auth.types";

class AuthService {
  async login(payload: LoginPayload): Promise<AuthResponse> {
    const { data } = await api.post<AuthResponse>("/api/auth/login", payload);

    return data;
  }

  async register(payload: RegisterPayload): Promise<AuthResponse> {
    const { data } = await api.post<AuthResponse>(
      "/api/auth/register",
      payload,
    );

    return data;
  }

  async refresh(): Promise<RefreshResponse> {
    const { data } = await api.post<RefreshResponse>("/api/auth/refresh");

    return data;
  }

  async logout(): Promise<void> {
    await api.post("/api/auth/logout");
  }
}

export const authService = new AuthService();
