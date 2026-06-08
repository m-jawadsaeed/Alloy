import { create } from "zustand";

interface AuthState {
  user: null | {
    id: string;
    email: string;
    role: string;
  };

  accessToken: string | null;

  setUser: (u: any) => void;
  setToken: (t: string | null) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  accessToken: null,

  setUser: (user) => set({ user }),

  setToken: (accessToken) => set({ accessToken }),
}));
