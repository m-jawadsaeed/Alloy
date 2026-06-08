import { socket } from "../../sockets/socket";

export const emitDraw = (data: any) => {
  socket.emit("canvas:draw", data);
};
