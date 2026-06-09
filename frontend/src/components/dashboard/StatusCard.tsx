interface Props {
  title: string;
  value: number | string;
}

export default function StatsCard({ title, value }: Props) {
  return (
    <div
      className="
      rounded-xl
      border
      bg-white
      p-6
      shadow-sm
    "
    >
      <p className="text-sm text-zinc-500">{title}</p>

      <h2 className="mt-2 text-3xl font-bold">{value}</h2>
    </div>
  );
}
