export interface ChatUser {
  id: string;
  name: string;
  avatar?: string;
  online: boolean;
}

export interface ChatMessage {
  id: string;

  senderId: string;

  receiverId?: string;

  roomId?: string;

  content: string;

  createdAt: string;

  read: boolean;
}

export interface TypingPayload {
  userId: string;

  roomId?: string;

  receiverId?: string;

  typing: boolean;
}

export interface GroupRoom {
  id: string;

  name: string;

  members: number;
}
