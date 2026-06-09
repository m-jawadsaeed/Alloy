import { DashboardRepository } from "./dashboard.repository";
import type {
  ActivityItem,
  RecentTask,
  RecentMessage,
} from "./dashboard.types";
export class DashboardService {
  static async stats(userId: string) {
    const [
      totalTasks,

      completedTasks,

      inProgressTasks,

      todoTasks,

      totalUsers,

      totalMessages,
    ] = await Promise.all([
      DashboardRepository.countTasks(userId),

      DashboardRepository.countCompletedTasks(userId),

      DashboardRepository.countInProgressTasks(userId),

      DashboardRepository.countTodoTasks(userId),

      DashboardRepository.totalUsers(),

      DashboardRepository.totalMessages(),
    ]);

    return {
      totalTasks,

      completedTasks,

      inProgressTasks,

      todoTasks,

      totalUsers,

      totalMessages,
    };
  }

  static async recentTasks(userId: string) {
    return DashboardRepository.recentTasks(userId);
  }

  static async recentMessages(userId: string) {
    return DashboardRepository.recentMessages(userId);
  }

  static async activity(userId: string): Promise<ActivityItem[]> {
    const tasks: RecentTask[] = await DashboardRepository.recentTasks(userId);

    const messages: RecentMessage[] =
      await DashboardRepository.recentMessages(userId);

    return [
      ...tasks.map((task) => ({
        id: task.id,
        type: "TASK_CREATED" as const,
        title: task.title,
        createdAt: task.createdAt,
      })),

      ...messages.map((message) => ({
        id: message.id,
        type: "MESSAGE_SENT" as const,
        title: message.content,
        createdAt: message.createdAt,
      })),
    ].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }
}
