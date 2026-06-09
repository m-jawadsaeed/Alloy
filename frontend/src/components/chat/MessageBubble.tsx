import type { ChatMessage } from "@/types/chat.types";

interface Props {
  message: ChatMessage;

  currentUserId: string;
}

export default function MessageBubble({ message, currentUserId }: Props) {
  const own = message.senderId === currentUserId;

  return (
    <div className={`flex ${own ? "justify-end" : "justify-start"}`}>
      <div
        className="
        max-w-xs
        rounded-xl
        bg-zinc-100
        p-3
      "
      >
        <p>{message.content}</p>

        <span className="text-xs text-zinc-500">
          {new Date(message.createdAt).toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
}
