import { create } from "zustand";

interface SocketState {
  connected: boolean;

  onlineUsers: string[];

  setConnected: (v: boolean) => void;

  setOnlineUsers: (users: string[]) => void;
}

export const useSocketStore = create<SocketState>((set) => ({
  connected: false,

  onlineUsers: [],

  setConnected: (v) =>
    set({
      connected: v,
    }),

  setOnlineUsers: (users) =>
    set({
      onlineUsers: users,
    }),
}));
