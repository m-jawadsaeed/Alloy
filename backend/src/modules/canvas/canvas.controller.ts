import { Request, Response } from "express";

import { CanvasService } from "./canvas.service";

export class CanvasController {
  static async create(
    req: Request,
    res: Response,
  ) {
    const board =
      await CanvasService.createBoard(
        req.body.name,
      );

    return res.status(201).json({
      success: true,

      data: board,
    });
  }

  static async getBoards(
    req: Request,
    res: Response,
  ) {
    const boards =
      await CanvasService.getBoards();

    return res.json({
      success: true,

      data: boards,
    });
  }

  static async getBoard(
    req: Request,
    res: Response,
  ) {
    const board =
      await CanvasService.getBoard(
        String(req.params.id),
      );

    return res.json({
      success: true,

      data: board,
    });
  }

  static async saveBoard(
    req: Request,
    res: Response,
  ) {
    const board =
      await CanvasService.saveBoard(
        String(req.params.id),
        {
          data: req.body.data,

          thumbnail:
            req.body.thumbnail,
        },
      );

    return res.json({
      success: true,

      data: board,
    });
  }

  static async deleteBoard(
    req: Request,
    res: Response,
  ) {
    await CanvasService.deleteBoard(
      String(req.params.id),
    );

    return res.json({
      success: true,
    });
  }
}