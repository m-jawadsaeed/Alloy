import { useRecentTasks } from "../../hooks/useRecentTasks";

export function RecentTasks() {
  const { data, isLoading } = useRecentTasks();

  if (isLoading) {
    return <div>Loading tasks...</div>;
  }

  return (
    <div className="rounded-xl border bg-card p-5">
      <h2 className="mb-4 text-lg font-semibold">Recent Tasks</h2>

      <div className="space-y-3">
        {data?.map((task) => (
          <div key={task.id} className="rounded-lg border p-3">
            <div className="font-medium">{task.title}</div>

            <div className="text-sm text-muted-foreground">{task.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
