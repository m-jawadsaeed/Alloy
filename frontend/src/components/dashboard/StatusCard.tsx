import { ReactNode } from "react";

interface Props {
  title: string;
  value: string;
  icon: ReactNode;
}

export function StatsCard({ title, value, icon }: Props) {
  return (
    <div className="rounded-xl border bg-card p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <span className="text-muted-foreground text-sm">{title}</span>

        {icon}
      </div>

      <h2 className="mt-4 text-3xl font-bold">{value}</h2>
    </div>
  );
}
