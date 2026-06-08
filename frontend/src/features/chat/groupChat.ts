import { socket } from "../../sockets/socket";

export const joinRoom = (roomId: string) => {
  socket.emit("join:room", roomId);
};

export const sendGroupMessage = (roomId: string, message: string) => {
  socket.emit("group:message", {
    roomId,
    message,
  });
};
