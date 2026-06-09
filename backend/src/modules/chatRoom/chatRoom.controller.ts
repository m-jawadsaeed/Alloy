import { Request, Response } from "express";

import { ChatRoomService } from "./chatRoom.service";

export class ChatRoomController {
  static async create(req: Request, res: Response) {
    const room = await ChatRoomService.createRoom(req.body.name);

    return res.status(201).json({
      success: true,
      data: room,
    });
  }

  static async getRooms(_req: Request, res: Response) {
    const rooms = await ChatRoomService.getRooms();

    return res.json({
      success: true,
      data: rooms,
    });
  }

  static async getRoom(req: Request, res: Response) {
    const room = await ChatRoomService.getRoom(String(req.params.id));

    return res.json({
      success: true,
      data: room,
    });
  }
}
