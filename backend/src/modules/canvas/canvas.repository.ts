import { prisma } from "../../config/prisma";

import { SaveCanvasDto } from "./canvas.types";

export class CanvasRepository {
  static createBoard(name: string) {
    return prisma.canvasBoard.create({
      data: {
        name,
      },
    });
  }

  static getBoards() {
    return prisma.canvasBoard.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  static getBoard(boardId: string) {
    return prisma.canvasBoard.findUnique({
      where: {
        id: boardId,
      },
    });
  }

  static saveBoard(boardId: string, payload: SaveCanvasDto) {
    return prisma.canvasBoard.update({
      where: {
        id: boardId,
      },

      data: {
        data: payload.data,

        thumbnail: payload.thumbnail,
      },
    });
  }

  static deleteBoard(boardId: string) {
    return prisma.canvasBoard.delete({
      where: {
        id: boardId,
      },
    });
  }
}
