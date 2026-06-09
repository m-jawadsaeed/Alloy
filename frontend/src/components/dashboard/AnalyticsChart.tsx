import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "Mon", tasks: 20 },
  { day: "Tue", tasks: 35 },
  { day: "Wed", tasks: 28 },
  { day: "Thu", tasks: 42 },
  { day: "Fri", tasks: 60 },
];

export function AnalyticsChart() {
  return (
    <div className="rounded-xl border p-6 bg-card">
      <h2 className="mb-5 text-lg font-semibold">Weekly Activity</h2>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <XAxis dataKey="day" />
          <Tooltip />
          <Area type="monotone" dataKey="tasks" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
