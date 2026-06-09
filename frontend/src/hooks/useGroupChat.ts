import { useEffect } from "react";

import { getSocket } from "@/sockets/socket";

import { SOCKET_EVENTS } from "@/sockets/socket.event";

import { useChatStore } from "@/store/chat.store";

import type { ChatMessage } from "@/types/chat.types";

export function useGroupChat(roomId: string) {
  const socket = getSocket();

  const addMessage = useChatStore((state) => state.addMessage);

  useEffect(() => {
    socket.emit(SOCKET_EVENTS.JOIN_ROOM, roomId);

    const handler = (message: ChatMessage) => {
      addMessage(message);
    };

    socket.on(SOCKET_EVENTS.GROUP_MESSAGE, handler);

    return () => {
      socket.emit(SOCKET_EVENTS.LEAVE_ROOM, roomId);

      socket.off(SOCKET_EVENTS.GROUP_MESSAGE, handler);
    };
  }, [roomId, socket, addMessage]);

  const sendMessage = (content: string) => {
    socket.emit(SOCKET_EVENTS.GROUP_MESSAGE, {
      roomId,
      content,
    });
  };

  return {
    sendMessage,
  };
}
