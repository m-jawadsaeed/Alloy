import { api } from "@/api/axios";

import type {
  CreateTaskPayload,
  UpdateTaskPayload,
  TaskListResponse,
  TaskFilters,
  Task,
} from "@/types/task.types";

class TaskService {
  async getTasks(filters: TaskFilters = {}): Promise<TaskListResponse> {
    const { data } = await api.get<TaskListResponse>("/api/tasks", {
      params: filters,
    });

    return data;
  }

  async getTaskById(id: string): Promise<Task> {
    const { data } = await api.get<Task>(`/api/tasks/${id}`);

    return data;
  }

  async createTask(payload: CreateTaskPayload): Promise<Task> {
    const { data } = await api.post<Task>("/api/tasks", payload);

    return data;
  }

  async updateTask(payload: UpdateTaskPayload): Promise<Task> {
    const { id, ...body } = payload;

    const { data } = await api.patch<Task>(`/api/tasks/${id}`, body);

    return data;
  }

  async deleteTask(id: string): Promise<{ message: string }> {
    const { data } = await api.delete(`/api/tasks/${id}`);

    return data;
  }
}

export const taskService = new TaskService();
