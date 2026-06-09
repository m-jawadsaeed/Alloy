import { Users, CheckSquare, MessageSquare } from "lucide-react";

import { useAdminOverview, useAdminUsers } from "@/hooks/useAdmin";
import { User } from "@/types/auth.types";

export default function AdminPage() {
  const { data: overview } = useAdminOverview();

  const { data: users, isLoading } = useAdminUsers();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>

        <p className="text-muted-foreground">
          Manage users and monitor system activity
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border bg-white p-6 shadow-sm dark:bg-zinc-900">
          <div className="flex items-center justify-between">
            <Users />

            <span className="text-3xl font-bold">{overview?.users ?? 0}</span>
          </div>

          <p className="mt-3 text-sm text-muted-foreground">Total Users</p>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm dark:bg-zinc-900">
          <div className="flex items-center justify-between">
            <CheckSquare />

            <span className="text-3xl font-bold">{overview?.tasks ?? 0}</span>
          </div>

          <p className="mt-3 text-sm text-muted-foreground">Total Tasks</p>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm dark:bg-zinc-900">
          <div className="flex items-center justify-between">
            <MessageSquare />

            <span className="text-3xl font-bold">
              {overview?.messages ?? 0}
            </span>
          </div>

          <p className="mt-3 text-sm text-muted-foreground">Messages</p>
        </div>
      </div>

      <div className="rounded-2xl border bg-white p-6 shadow-sm dark:bg-zinc-900">
        <h2 className="mb-6 text-xl font-semibold">Users</h2>

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="p-3 text-left">Name</th>

                  <th className="p-3 text-left">Email</th>

                  <th className="p-3 text-left">Role</th>

                  <th className="p-3 text-left">Joined</th>
                </tr>
              </thead>

              <tbody>
                {users?.map((user: User) => (
                  <tr key={user.id} className="border-b">
                    <td className="p-3">{user.name}</td>

                    <td className="p-3">{user.email}</td>

                    <td className="p-3">{user.role}</td>

                    <td className="p-3">
                      {new Date(user.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
