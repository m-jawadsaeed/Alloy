import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "sonner";

import { taskService } from "@/services/task.service";

import { QUERY_KEYS } from "@/utils/constants";

import type { Task, UpdateTaskPayload } from "@/types/task.types";

export function useUpdateTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: UpdateTaskPayload) => taskService.updateTask(payload),

    onMutate: async (payload) => {
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

            tasks: old.tasks.map((task) =>
              task.id === payload.id
                ? {
                    ...task,
                    ...payload,
                  }
                : task,
            ),
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
      toast.success("Task updated");
    },
  });
}
