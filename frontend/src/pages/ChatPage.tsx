import { useRef, useEffect } from "react";

import { usePrivateChat } from "@/hooks/usePrivateChat";

import { useChatStore } from "@/store/chat.store";

import ChatInput from "@/components/chat/ChatInput";

import MessageBubble from "@/components/chat/MessageBubble";

export default function ChatPage() {
  const { sendMessage } = usePrivateChat();

  const messages = useChatStore((state) => state.messages);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div className="flex h-screen flex-col">
      <div className="flex-1 overflow-auto p-4">
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
            currentUserId="me"
          />
        ))}

        <div ref={bottomRef} />
      </div>

      <ChatInput onSend={(content) => sendMessage("receiver-id", content)} />
    </div>
  );
}
