import { Request, Response, NextFunction } from "express";

import { MessageService } from "./message.service";

export class MessageController {
  static async getRoomMessages(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      
      const roomId = String(req.params.roomId);
      const messages = await MessageService.getRoomMessages(roomId);

      res.status(200).json({
        success: true,
        data: messages,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getPrivateMessages(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const userId = String(req.user?.userId);

      const otherUserId = String(req.params.userId);

      const messages = await MessageService.getPrivateMessages(
        userId,
        otherUserId,
      );

      res.status(200).json({
        success: true,
        data: messages,
      });
    } catch (error) {
      next(error);
    }
  }
}
