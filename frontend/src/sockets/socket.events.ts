import { socket } from "./socket";

import { useSocketStore } from "../store/socket.store";

export const registerSocketEvents = () => {
  socket.on("connect", () => {
    useSocketStore.getState().setConnected(true);
  });

  socket.on("disconnect", () => {
    useSocketStore.getState().setConnected(false);
  });

  socket.on("presence:update", (users: string[]) => {
    useSocketStore.getState().setOnlineUsers(users);
  });
};
