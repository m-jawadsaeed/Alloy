import http from "http";
import { Server, Socket } from "socket.io";

import { verifySocketToken } from "./socketAuth";
import { onlineUsers } from "./onlineUser";
import { setIO } from "./emitter";
import { createAdapter } from "@socket.io/redis-adapter";
import { redis } from "../config/redis";
import { logger } from "../shared/logger/logger";
import { MessageRepository } from "../modules/message/message.repository";

export interface SocketUser {
  userId: string;
  role: string;
}

export interface PrivateMessagePayload {
  to: string;
  message: string;
}

export interface GroupMessagePayload {
  roomId: string;
  message: string;
}

export interface TypingPayload {
  roomId: string;
}

export const initSocket = (server: http.Server) => {
  const io = new Server(server, {
    cors: {
      origin: process.env.CLIENT_URL ?? "http://localhost:5173",
      credentials: true,
    },
  });

  const pubClient = redis;
  const subClient = redis.duplicate();

  io.adapter(createAdapter(pubClient, subClient));

  setIO(io);

  io.use((socket, next) => {
    try {
      const token = socket.handshake.auth?.token;

      if (!token) {
        return next(new Error("Unauthorized"));
      }

      const user = verifySocketToken(token);

      if (!user) {
        return next(new Error("Unauthorized"));
      }

      socket.data.user = user as SocketUser;

      next();
    } catch (error) {
      next(new Error("Unauthorized"));
    }
  });

  io.on("connection", (socket: Socket) => {
    const user = socket.data.user as SocketUser;

    const userId = user.userId;

    logger.info(`Socket Connected: ${userId}`);

    try {
      /**
       * Every user gets a personal room.
       * Useful for notifications.
       */
      socket.join(userId);

      /**
       * Online Users Tracking
       */
      if (!onlineUsers.has(userId)) {
        onlineUsers.set(userId, new Set());
      }

      onlineUsers.get(userId)!.add(socket.id);

      io.emit("presence:update", Array.from(onlineUsers.keys()));

      /**
       * Room Join
       */
      socket.on("join:room", (roomId: string) => {
        try {
          socket.join(roomId);

          logger.info(`${userId} joined room ${roomId}`);

          socket.emit("room:joined", roomId);
        } catch (error) {
          logger.error(error);
        }
      });

      /**
       * Room Leave
       */
      socket.on("leave:room", (roomId: string) => {
        try {
          socket.leave(roomId);

          logger.info(`${userId} left room ${roomId}`);

          socket.emit("room:left", roomId);
        } catch (error) {
          logger.error(error);
        }
      });

      /**
       * Private Message
       */
      socket.on("private:message", async (payload: PrivateMessagePayload) => {
        try {
          const { to, message } = payload;

          if (!to || !message) {
            return;
          }

          const savedMessage = await MessageRepository.createPrivate({
            content: message,
            senderId: userId,
            receiverId: to,
          });

          io.to(to).emit("private:message", savedMessage);

          socket.emit("private:message", savedMessage);
        } catch (error) {
          logger.error(error);
        }
      });

      /**
       * Group Message
       */
      socket.on("group:message", async (payload: GroupMessagePayload) => {
        try {
          const { roomId, message } = payload;

          if (!roomId || !message) {
            return;
          }

          const savedMessage = await MessageRepository.createGroup({
            content: message,

            senderId: userId,

            roomId,
          });

          io.to(roomId).emit("group:message", savedMessage);
        } catch (error) {
          logger.error(error);
        }
      });

      /**
       * Canvas Sync
       */
      socket.on("canvas:draw", ({ boardId, data }) => {
        socket.to(boardId).emit("canvas:draw", data);
      });

      socket.on("canvas:join", (boardId: string) => {
        socket.join(boardId);
      });

      socket.on("canvas:leave", (boardId: string) => {
        socket.leave(boardId);
      });
      /**
       * Canvas Clear
       */
      socket.on("canvas:clear", (boardId: string) => {
        io.to(boardId).emit("canvas:clear");
      });

      /**
       * Typing Indicator
       */
      socket.on("typing:start", ({ roomId }: { roomId: string }) => {
        socket.to(roomId).emit("typing:start", {
          userId,
        });
      });

      socket.on("typing:stop", ({ roomId }: { roomId: string }) => {
        socket.to(roomId).emit("typing:stop", {
          userId,
        });
      });

      /**
       * Disconnect
       */
      socket.on("disconnect", () => {
        try {
          logger.info(`Socket Disconnected: ${userId}`);

          const sockets = onlineUsers.get(userId);

          if (!sockets) {
            return;
          }

          sockets.delete(socket.id);

          if (sockets.size === 0) {
            onlineUsers.delete(userId);
          }

          io.emit("presence:update", Array.from(onlineUsers.keys()));
        } catch (error) {
          logger.error(error);
        }
      });
    } catch (error) {
      logger.error(error);
    }
  });

  return io;
};
