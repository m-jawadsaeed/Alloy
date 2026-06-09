import { useAuthStore } from "@/store/auth.store";

export default function AdminPage() {
  const user = useAuthStore((state) => state.user);

  if (user?.role !== "ADMIN") {
    return <div>Access Denied</div>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border p-6">Users</div>

        <div className="rounded-xl border p-6">Tasks</div>

        <div className="rounded-xl border p-6">Analytics</div>
      </div>

      <div className="rounded-xl border p-6">Users List Table</div>
    </div>
  );
}
