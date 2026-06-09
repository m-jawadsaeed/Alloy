import { useOnlineUsers } from "../../hooks/useOnlineUsers";

export function OnlineUsers() {
  const users = useOnlineUsers();

  return (
    <div className="rounded-xl border bg-card p-5">
      <h2 className="mb-4 text-lg font-semibold">
        Online Users ({users.length})
      </h2>

      <div className="space-y-3">
        {users.map((id) => (
          <div key={id} className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500" />
            {id}
          </div>
        ))}
      </div>
    </div>
  );
}
