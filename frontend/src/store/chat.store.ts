import { create } from "zustand";

import type { ChatMessage, ChatUser } from "@/types/chat.types";

interface ChatState {
  messages: ChatMessage[];

  onlineUsers: ChatUser[];

  unreadCount: number;

  typingUsers: string[];

  addMessage: (message: ChatMessage) => void;

  setOnlineUsers: (users: ChatUser[]) => void;

  incrementUnread: () => void;

  resetUnread: () => void;

  setTypingUsers: (users: string[]) => void;
}

export const useChatStore = create<ChatState>((set) => ({
  messages: [],

  onlineUsers: [],

  unreadCount: 0,

  typingUsers: [],

  addMessage: (message) =>
    set((state) => ({
      messages: [...state.messages, message],
    })),

  setOnlineUsers: (users) =>
    set({
      onlineUsers: users,
    }),

  incrementUnread: () =>
    set((state) => ({
      unreadCount: state.unreadCount + 1,
    })),

  resetUnread: () =>
    set({
      unreadCount: 0,
    }),

  setTypingUsers: (users) =>
    set({
      typingUsers: users,
    }),
}));
