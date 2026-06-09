import { useQuery } from "@tanstack/react-query";

import { taskService } from "@/services/task.service";

import type { TaskFilters } from "@/types/task.types";

import { QUERY_KEYS } from "@/utils/constants";

export function useTasks(filters: TaskFilters) {
  return useQuery({
    queryKey: [QUERY_KEYS.TASKS, filters],

    queryFn: () => taskService.getTasks(filters),

    placeholderData: (previous) => previous,
  });
}
