import { MessageRepository } from "./message.repository";

export class MessageService {
  static async getPrivateMessages(currentUserId: string, targetUserId: string) {
    return MessageRepository.getPrivateMessages(currentUserId, targetUserId);
  }

  static async getRoomMessages(roomId: string) {
    return MessageRepository.getRoomMessages(roomId);
  }

  static async markAsRead(messageId: string) {
    return MessageRepository.markAsRead(messageId);
  }
}
