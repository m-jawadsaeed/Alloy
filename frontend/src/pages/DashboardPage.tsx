import { Activity, CheckCircle, Clock, MessageCircle } from "lucide-react";

import { StatsCard } from "@/components/dashboard/StatusCard";

import { useDashboardStats } from "@/hooks/useDashboardStats";

export default function DashboardPage() {
  const { data, isLoading } = useDashboardStats();

  if (isLoading) {
    return <div>Loading Dashboard...</div>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>

        <p className="text-slate-500">Welcome back</p>
      </div>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="Total Tasks"
          value={String(data?.totalTasks ?? 0)}
          icon={<Activity />}
        />

        <StatsCard
          title="Completed Tasks"
          value={String(data?.completedTasks ?? 0)}
          icon={<CheckCircle />}
        />

        <StatsCard
          title="In Progress"
          value={String(data?.inProgressTasks ?? 0)}
          icon={<Clock />}
        />

        <StatsCard
          title="Messages"
          value={String(data?.totalMessages ?? 0)}
          icon={<MessageCircle />}
        />
      </section>
    </div>
  );
}
