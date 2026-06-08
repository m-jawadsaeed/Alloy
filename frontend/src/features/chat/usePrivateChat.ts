import { useEffect, useState } from "react";

import { socket } from "../../sockets/socket";

export const usePrivateChat = () => {
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    socket.on("private:message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("private:message");
    };
  }, []);

  return { messages };
};
