import { useEffect } from "react";

import { getSocket } from "@/sockets/socket";

import { useCanvasStore } from "@/store/canvas.store";

import type { DrawingLine } from "@/types/canvas.types";

export function useCanvasSocket() {
  const socket = getSocket();

  const addLine = useCanvasStore((state) => state.addLine);

  useEffect(() => {
    const handler = (line: DrawingLine) => {
      addLine(line);
    };

    socket.on("canvas:draw", handler);

    return () => {
      socket.off("canvas:draw", handler);
    };
  }, [socket, addLine]);

  const emitDraw = (line: DrawingLine) => {
    socket.emit("canvas:draw", line);
  };

  return {
    emitDraw,
  };
}
