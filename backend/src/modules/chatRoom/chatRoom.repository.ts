import {prisma} from "../../config/prisma";

export class ChatRoomRepository {
  static create(name: string) {
    return prisma.chatRoom.create({
      data: {
        name,
      },
    });
  }

  static findAll() {
    return prisma.chatRoom.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  static findById(id: string) {
    return prisma.chatRoom.findUnique({
      where: {
        id,
      },
    });
  }
}
