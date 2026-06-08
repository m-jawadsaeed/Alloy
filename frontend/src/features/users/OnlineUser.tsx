import { useSocketStore } from "../../store/socket.store";

export const OnlineUsers = () => {
  const users = useSocketStore((s) => s.onlineUsers);

  return (
    <div>
      <h3>Online Users</h3>

      {users.map((u) => (
        <p key={u}>🟢 {u}</p>
      ))}
    </div>
  );
};
