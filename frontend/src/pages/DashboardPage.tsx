import { Activity, CheckCircle, Clock, MessageCircle } from "lucide-react";

import { DashboardHeader } from "src/components/dashboard/DashboardHeader";
import { StatsCard } from "@/components/dashboard/StatusCard";
import { RecentTasks } from "src/components/dashboard/RecentTasks";
import { RecentChats } from "src/components/dashboard/RecentChats";
import { OnlineUsers } from "src/components/dashboard/OnlineUsers";
import { ActivityFeed } from "src/components/dashboard/ActivityFeed";
import { AnalyticsChart } from "src/components/dashboard/AnalyticsChart";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <DashboardHeader />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatsCard title="Total Tasks" value="128" icon={<Activity />} />

        <StatsCard title="Completed" value="89" icon={<CheckCircle />} />

        <StatsCard title="In Progress" value="21" icon={<Clock />} />

        <StatsCard title="Messages" value="356" icon={<MessageCircle />} />
      </section>

      <AnalyticsChart />

      <section className="grid gap-6 xl:grid-cols-2">
        <RecentTasks />
        <RecentChats />
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <OnlineUsers />
        <ActivityFeed />
      </section>
    </div>
  );
}
