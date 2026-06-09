export const SOCKET_EVENTS = {
  CONNECT: "connect",

  DISCONNECT: "disconnect",

  PRIVATE_MESSAGE: "private:message",

  GROUP_MESSAGE: "group:message",

  JOIN_ROOM: "join:room",

  LEAVE_ROOM: "leave:room",

  TYPING: "typing",

  ONLINE_USERS: "online:users",
} as const;
