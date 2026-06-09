import { Bell } from "lucide-react";

export function DashboardHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>

        <p className="text-muted-foreground">Welcome back to Alloy</p>
      </div>

      <button className="rounded-xl border p-3">
        <Bell size={18} />
      </button>
    </div>
  );
}
