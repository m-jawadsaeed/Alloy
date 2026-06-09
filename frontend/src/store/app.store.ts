import { create } from "zustand";

interface AppState {
  sidebarOpen: boolean;

  setSidebarOpen: (value: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  sidebarOpen: true,

  setSidebarOpen: (value) =>
    set({
      sidebarOpen: value,
    }),
}));
