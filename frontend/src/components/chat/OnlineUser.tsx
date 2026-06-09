import { useChatStore } from "@/store/chat.store";

export default function OnlineUsers() {
  const users = useChatStore((state) => state.onlineUsers);

  return (
    <div className="space-y-2">
      {users.map((user) => (
        <div key={user.id} className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-green-500" />

          <span>{user.name}</span>
        </div>
      ))}
    </div>
  );
}
