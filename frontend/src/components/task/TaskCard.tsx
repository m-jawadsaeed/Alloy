import type { Task } from "@/types/task.types";

interface Props {
  task: Task;

  onDelete: (id: string) => void;
}

export default function TaskCard({ task, onDelete }: Props) {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <h3 className="font-semibold">{task.title}</h3>

      <p className="mt-2 text-sm text-zinc-500">{task.description}</p>

      <div className="mt-4 flex gap-2">
        <span>{task.priority}</span>

        <span>{task.status}</span>
      </div>

      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}
