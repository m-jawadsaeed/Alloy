import { Request, Response } from "express";
import { TaskQuery } from "../task/task.types";
import { MessageService } from "./message.service";

export class MessageController {
  static async privateHistory(req: Request, res: Response) {
    const messages = await MessageService.getPrivateMessages(
      req.user!.userId,
      String(req.params.userId),
    );

    return res.json({
      success: true,
      data: messages,
    });
  }

  static async roomHistory(req: Request, res: Response) {
    const messages = await MessageService.getRoomMessages(String(req.params.roomId));

    return res.json({
      success: true,
      data: messages,
    });
  }

  static async markAsRead(req: Request, res: Response) {
    const message = await MessageService.markAsRead(String(req.params.messageId));

    return res.json({
      success: true,
      data: message,
    });
  }
}
