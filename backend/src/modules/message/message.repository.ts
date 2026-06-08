import { prisma } from "../../config/prisma";

export class MessageRepository {
  static async create(data: {
    content: string;
    senderId: string;
    receiverId?: string;
    roomId?: string;
  }) {
    return prisma.message.create({
      data,
    });
  }

  static async getRoomMessages(roomId: string) {
    return prisma.message.findMany({
      where: {
        roomId,
      },
      orderBy: {
        createdAt: "asc",
      },
    });
  }

  static async getPrivateMessages(userA: string, userB: string) {
    return prisma.message.findMany({
      where: {
        OR: [
          {
            senderId: userA,
            receiverId: userB,
          },
          {
            senderId: userB,
            receiverId: userA,
          },
        ],
      },
      orderBy: {
        createdAt: "asc",
      },
    });
  }
}
