import { useEffect, useState } from "react";
import { getSocket } from "../sockets/socket";

export const useOnlineUsers = () => {
  const [users, setUsers] = useState<string[]>([]);

  useEffect(() => {
    const socket = getSocket();

    socket.on("presence:update", setUsers);

    return () => {
      socket.off("presence:update", setUsers);
    };
  }, []);

  return users;
};
