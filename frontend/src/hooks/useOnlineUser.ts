import { useSocketStore } from "../store/socket.store";

export const useOnlineUsers = () => {
  return useSocketStore((state) => state.onlineUsers);
};
