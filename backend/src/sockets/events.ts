export const SOCKET_EVENTS = {
  PRIVATE_MESSAGE: "private:message",

  GROUP_MESSAGE: "group:message",

  JOIN_ROOM: "join:room",

  LEAVE_ROOM: "leave:room",

  TYPING_START: "typing:start",

  TYPING_STOP: "typing:stop",

  PRESENCE_UPDATE: "presence:update",

  CANVAS_DRAW: "canvas:draw",

  CANVAS_CLEAR: "canvas:clear",
} as const;
