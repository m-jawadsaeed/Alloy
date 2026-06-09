import { useActivity } from "../../hooks/useActivity";

export function ActivityFeed() {
  const { data } = useActivity();

  return (
    <div className="rounded-xl border bg-card p-5">
      <h2 className="mb-4 text-lg font-semibold">
        Activity Feed
      </h2>

      <div className="space-y-4">
        {data?.map((item) => (
          <div key={item.id}>
            <div className="font-medium">
              {item.title}
            </div>

            <div className="text-sm text-muted-foreground">
              {item.type}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}