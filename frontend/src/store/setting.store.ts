import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SettingsState {
  darkMode: boolean;
  notifications: boolean;
  sounds: boolean;

  toggleDarkMode: () => void;
  toggleNotifications: () => void;
  toggleSounds: () => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      darkMode: false,

      notifications: true,

      sounds: true,

      toggleDarkMode: () =>
        set((state) => ({
          darkMode: !state.darkMode,
        })),

      toggleNotifications: () =>
        set((state) => ({
          notifications: !state.notifications,
        })),

      toggleSounds: () =>
        set((state) => ({
          sounds: !state.sounds,
        })),
    }),
    {
      name: "taskflow-settings",
    },
  ),
);
