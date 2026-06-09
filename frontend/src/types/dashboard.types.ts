export interface DashboardStats {
  totalTasks: string;
  completedTasks: string;
  inProgressTasks: string;
  todoTasks: string;
  totalUsers: string;
  totalMessages: string;
}

export interface RecentTask {
  id: string;
  title: string;
  status: string;
  priority: string;
  createdAt: string;
}

export interface RecentMessage {
  id: string;
  content: string;
  senderId: string;
  createdAt: string;
}

export interface ActivityItem {
  id: string;
  type: "TASK_CREATED" | "MESSAGE_SENT";
  title: string;
  createdAt: string;
}
