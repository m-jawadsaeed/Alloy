import {prisma} from "../../config/prisma";

export interface CreatePrivateMessageInput {
  content: string;
  senderId: string;
  receiverId: string;
}

export interface CreateGroupMessageInput {
  content: string;
  senderId: string;
  roomId: string;
}

export class MessageRepository {
  static async createPrivate(data: CreatePrivateMessageInput) {
    return prisma.message.create({
      data: {
        content: data.content,
        senderId: data.senderId,
        receiverId: data.receiverId,
      },

      include: {
        sender: {
          select: {
            id: true,
            name: true,
            avatar: true,
          },
        },

        receiver: {
          select: {
            id: true,
            name: true,
            avatar: true,
          },
        },
      },
    });
  }

  static async createGroup(data: CreateGroupMessageInput) {
    return prisma.message.create({
      data: {
        content: data.content,
        senderId: data.senderId,
        roomId: data.roomId,
      },

      include: {
        sender: {
          select: {
            id: true,
            name: true,
            avatar: true,
          },
        },
      },
    });
  }

  static async getPrivateMessages(currentUserId: string, targetUserId: string) {
    return prisma.message.findMany({
      where: {
        OR: [
          {
            senderId: currentUserId,
            receiverId: targetUserId,
          },
          {
            senderId: targetUserId,
            receiverId: currentUserId,
          },
        ],
      },

      include: {
        sender: {
          select: {
            id: true,
            name: true,
            avatar: true,
          },
        },

        receiver: {
          select: {
            id: true,
            name: true,
            avatar: true,
          },
        },
      },

      orderBy: {
        createdAt: "asc",
      },
    });
  }

  static async getRoomMessages(roomId: string) {
    return prisma.message.findMany({
      where: {
        roomId,
      },

      include: {
        sender: {
          select: {
            id: true,
            name: true,
            avatar: true,
          },
        },
      },

      orderBy: {
        createdAt: "asc",
      },
    });
  }

  static async markAsRead(messageId: string) {
    return prisma.message.update({
      where: {
        id: messageId,
      },

      data: {
        read: true,
      },
    });
  }
}
