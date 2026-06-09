export type TaskPriority =
  | "LOW"
  | "MEDIUM"
  | "HIGH";

export type TaskStatus =
  | "TODO"
  | "IN_PROGRESS"
  | "DONE";

export interface Task {
  id: string;

  title: string;

  description: string;

  priority: TaskPriority;

  status: TaskStatus;

  createdBy: string;

  assignedTo?: string;

  createdAt: string;

  updatedAt: string;
}

export interface CreateTaskPayload {
  title: string;
  description: string;
  priority: TaskPriority;
}

export interface UpdateTaskPayload {
  id: string;

  title?: string;

  description?: string;

  priority?: TaskPriority;

  status?: TaskStatus;
}

export interface TaskListResponse {
  tasks: Task[];

  total: number;

  page: number;

  limit: number;
}

export interface TaskFilters {
  search?: string;

  page?: number;

  limit?: number;

  status?: TaskStatus;

  priority?: TaskPriority;
}