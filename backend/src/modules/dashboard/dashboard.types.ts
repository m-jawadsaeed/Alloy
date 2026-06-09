export interface DashboardStats {
  totalTasks: number;

  completedTasks: number;

  inProgressTasks: number;

  todoTasks: number;

  totalUsers: number;

  totalMessages: number;
}

export interface ActivityItem {
  id: string;

  type: "TASK_CREATED" | "TASK_UPDATED" | "MESSAGE_SENT";

  title: string;

  createdAt: Date;
}

export interface RecentTask {
  id: string;
  title: string;
  createdAt: Date;
}

export interface RecentMessage {
  id: string;
  content: string;
  createdAt: Date;
}