import { useEffect, useState } from "react";
import { api } from "../../api/axios";
import { socket } from "../../sockets/socket";

export const Dashboard = () => {
  const [stats, setStats] = useState<any>({});

  const fetchStats = async () => {
    const res = await api.get("/dashboard/stats");

    setStats(res.data.data);
  };

  useEffect(() => {
    fetchStats();

    socket.on("dashboard:update", fetchStats);

    return () => {
      socket.off("dashboard:update");
    };
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>

      <p>Total: {stats.total}</p>
      <p>Todo: {stats.todo}</p>
      <p>Progress: {stats.progress}</p>
      <p>Done: {stats.done}</p>
    </div>
  );
};
