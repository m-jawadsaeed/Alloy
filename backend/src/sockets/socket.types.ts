export interface SocketUser {
  userId: string;
  role: string;
}

export interface PrivateMessagePayload {
  to: string;
  message: string;
}

export interface GroupMessagePayload {
  roomId: string;
  message: string;
}

export interface TypingPayload {
  roomId: string;
}
