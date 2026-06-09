import { useRecentMessages } from "../../hooks/useRecentMessages";

export function RecentChats() {
  const { data } = useRecentMessages();

  return (
    <div className="rounded-xl border bg-card p-5">
      <h2 className="mb-4 text-lg font-semibold">Recent Messages</h2>

      <div className="space-y-3">
        {data?.map((message) => (
          <div key={message.id} className="rounded-lg border p-3">
            <p>{message.content}</p>

            <span className="text-xs text-muted-foreground">
              {new Date(message.createdAt).toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
