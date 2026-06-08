import { socket } from "../../sockets/socket";

export const sendPrivateMessage = (to: string, message: string) => {
  socket.emit("private:message", {
    to,
    message,
  });
};
