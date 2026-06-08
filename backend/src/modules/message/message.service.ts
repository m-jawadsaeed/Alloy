import { MessageRepository } from "./message.repository";

export class MessageService {
  static async createPrivateMessage(
    senderId: string,
    receiverId: string,
    content: string,
  ) {
    return MessageRepository.create({
      senderId,
      receiverId,
      content,
    });
  }

  static async createGroupMessage(
    senderId: string,
    roomId: string,
    content: string,
  ) {
    return MessageRepository.create({
      senderId,
      roomId,
      content,
    });
  }

  static async getRoomMessages(roomId: string) {
    return MessageRepository.getRoomMessages(roomId);
  }

  static async getPrivateMessages(userA: string, userB: string) {
    return MessageRepository.getPrivateMessages(userA, userB);
  }
}
