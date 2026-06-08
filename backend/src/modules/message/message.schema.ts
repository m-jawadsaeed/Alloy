import { z } from "zod";

export const CreatePrivateMessageSchema = z.object({
  receiverId: z.uuid(),
  content: z.string().min(1).max(1000),
});

export const CreateGroupMessageSchema = z.object({
  roomId: z.string().min(1),
  content: z.string().min(1).max(1000),
});

export type CreatePrivateMessageDto = z.infer<
  typeof CreatePrivateMessageSchema
>;

export type CreateGroupMessageDto = z.infer<typeof CreateGroupMessageSchema>;
