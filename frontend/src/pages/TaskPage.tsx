import { useState } from "react";

import SearchBar from "@/components/task/SearchBar";
import TaskCard from "@/components/task/TaskCard";
import Pagination from "@/components/task/Pagination";

import { useTasks } from "@/hooks/useTasks";

import { useDeleteTask } from "@/hooks/useDeleteTask";

export default function TasksPage() {
  const [search, setSearch] = useState("");

  const [page, setPage] = useState(1);

  const { data, isLoading } = useTasks({
    search,
    page,
    limit: 10,
  });

  const deleteTask = useDeleteTask();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const tasks = data?.tasks ?? [];

  return (
    <div className="space-y-6">
      <SearchBar value={search} onChange={setSearch} />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onDelete={(id) => deleteTask.mutate(id)}
          />
        ))}
      </div>

      <Pagination
        page={page}
        totalPages={Math.ceil((data?.total ?? 0) / 10)}
        onPageChange={setPage}
      />
    </div>
  );
}
