import { useEffect, useState } from "react";

import { socket } from "../../sockets/socket";

export const useGroupChat = () => {
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    socket.on("group:message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("group:message");
    };
  }, []);

  return { messages };
};
