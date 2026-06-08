import { useEffect } from "react";
import { socket } from "../sockets/socket";

export const useSocket = (token: string | null) => {
  useEffect(() => {
    if (!token) return;

    socket.auth = { token };

    socket.connect();

    return () => {
      socket.disconnect();
    };
  }, [token]);

  return socket;
};
