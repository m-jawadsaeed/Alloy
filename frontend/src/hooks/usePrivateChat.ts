import { useEffect } from "react";

import { getSocket } from "@/sockets/socket";

import { SOCKET_EVENTS } from "@/sockets/socket.event";

import { useChatStore } from "@/store/chat.store";

import type { ChatMessage } from "@/types/chat.types";

export function usePrivateChat() {
  const socket = getSocket();

  const addMessage = useChatStore((state) => state.addMessage);

  useEffect(() => {
    const handler = (message: ChatMessage) => {
      addMessage(message);
    };

    socket.on(SOCKET_EVENTS.PRIVATE_MESSAGE, handler);

    return () => {
      socket.off(SOCKET_EVENTS.PRIVATE_MESSAGE, handler);
    };
  }, [socket, addMessage]);

  const sendMessage = (receiverId: string, content: string) => {
    socket.emit(SOCKET_EVENTS.PRIVATE_MESSAGE, {
      receiverId,
      content,
    });
  };

  return {
    sendMessage,
  };
}
