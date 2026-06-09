import { CheckCircle, Clock, ListTodo, MessageCircle } from "lucide-react";

import { useDashboardStats } from "../../hooks/useDashboardStats";

import { StatsCard } from "./StatusCard";

export function DashboardStatsSection() {
  const { data, isLoading } = useDashboardStats();

  if (isLoading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-32 animate-pulse rounded-xl bg-muted" />
        ))}
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <StatsCard
        title="Total Tasks"
        value={data.totalTasks}
        icon={<ListTodo />}
      />

      <StatsCard
        title="Completed"
        value={data.completedTasks}
        icon={<CheckCircle />}
      />

      <StatsCard
        title="In Progress"
        value={data.inProgressTasks}
        icon={<Clock />}
      />

      <StatsCard
        title="Messages"
        value={data.totalMessages}
        icon={<MessageCircle />}
      />
    </div>
  );
}
