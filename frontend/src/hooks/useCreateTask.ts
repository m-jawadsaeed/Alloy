import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "sonner";

import { taskService } from "@/services/task.service";

import { QUERY_KEYS } from "@/utils/constants";

export function useCreateTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: taskService.createTask,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.TASKS],
      });

      toast.success("Task created");
    },
  });
}
