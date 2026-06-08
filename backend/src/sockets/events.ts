export const SOCKET_EVENTS = {
  JOIN_ROOM: "join:room",
  LEAVE_ROOM: "leave:room",

  PRIVATE_MESSAGE: "private:message",

  GROUP_MESSAGE: "group:message",

  PRESENCE_UPDATE: "presence:update",

  CANVAS_DRAW: "canvas:draw",

  CANVAS_CLEAR: "canvas:clear",

  TYPING_START: "typing:start",

  TYPING_STOP: "typing:stop",
} as const;
