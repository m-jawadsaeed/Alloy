import { api } from "@/api/axios";

import type { ChatMessage } from "@/types/chat.types";

class ChatService {
  async getPrivateMessages(userId: string): Promise<ChatMessage[]> {
    const { data } = await api.get(`/api/chat/private/${userId}`);

    return data;
  }

  async getGroupMessages(roomId: string): Promise<ChatMessage[]> {
    const { data } = await api.get(`/api/chat/group/${roomId}`);

    return data;
  }
}

export const chatService = new ChatService();
