import { AppError } from "../../shared/errors/AppError";

import { CanvasRepository } from "./canvas.repository";

import { SaveCanvasDto } from "./canvas.types";

export class CanvasService {
  static createBoard(name: string) {
    return CanvasRepository.createBoard(name);
  }

  static getBoards() {
    return CanvasRepository.getBoards();
  }

  static async getBoard(boardId: string) {
    const board = await CanvasRepository.getBoard(boardId);

    if (!board) {
      throw new AppError(404, "Board not found");
    }

    return board;
  }

  static saveBoard(boardId: string, payload: SaveCanvasDto) {
    return CanvasRepository.saveBoard(boardId, payload);
  }

  static deleteBoard(boardId: string) {
    return CanvasRepository.deleteBoard(boardId);
  }
}
