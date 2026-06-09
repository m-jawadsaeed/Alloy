import StatsCard from "@/components/dashboard/StatusCard";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard title="Tasks" value={145} />

        <StatsCard title="Completed" value={112} />

        <StatsCard title="Online Users" value={18} />

        <StatsCard title="Messages" value={921} />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border p-6">Activity Feed</div>

        <div className="rounded-xl border p-6">Recent Tasks</div>
      </div>
    </div>
  );
}
