import { useGroupChat } from "@/hooks/useGroupChat";

import { useChatStore } from "@/store/chat.store";

import ChatInput from "@/components/chat/ChatInput";

import MessageBubble from "@/components/chat/MessageBubble";

export default function GroupChatPage() {
  const roomId = "development-room";

  const { sendMessage } = useGroupChat(roomId);

  const messages = useChatStore((state) => state.messages);

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
      </div>

      <ChatInput onSend={sendMessage} />
    </div>
  );
}
