import { ReactNode } from "react";

interface Props {
  title: string;
  value: string;
  icon: ReactNode;
}

export function StatsCard({ title, value, icon }: Props) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm dark:bg-slate-900">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">{title}</p>

          <h2 className="mt-2 text-3xl font-bold">{value}</h2>
        </div>

        <div className="rounded-xl bg-slate-100 p-3 dark:bg-slate-800">
          {icon}
        </div>
      </div>
    </div>
  );
}
