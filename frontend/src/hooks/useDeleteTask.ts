import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "sonner";

import { QUERY_KEYS } from "@/utils/constants";

import { taskService } from "@/services/task.service";

import type { Task } from "@/types/task.types";

export function useDeleteTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => taskService.deleteTask(id),

    onMutate: async (taskId) => {
      await queryClient.cancelQueries({
        queryKey: [QUERY_KEYS.TASKS],
      });

      const previous = queryClient.getQueriesData({
        queryKey: [QUERY_KEYS.TASKS],
      });

      queryClient.setQueriesData(
        {
          queryKey: [QUERY_KEYS.TASKS],
        },
        (
          old:
            | {
                tasks: Task[];
              }
            | undefined,
        ) => {
          if (!old) {
            return old;
          }

          return {
            ...old,

            tasks: old.tasks.filter((task) => task.id !== taskId),
          };
        },
      );

      return {
        previous,
      };
    },

    onError: (_, __, context) => {
      context?.previous.forEach(([key, value]) => {
        queryClient.setQueryData(key, value);
      });
    },

    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.TASKS],
      });
    },

    onSuccess: () => {
      toast.success("Task deleted");
    },
  });
}
