import { ChatRoomRepository } from "./chatRoom.repository";

export class ChatRoomService {
  static async createRoom(name: string) {
    return ChatRoomRepository.create(name);
  }

  static async getRooms() {
    return ChatRoomRepository.findAll();
  }

  static async getRoom(roomId: string) {
    return ChatRoomRepository.findById(roomId);
  }
}
