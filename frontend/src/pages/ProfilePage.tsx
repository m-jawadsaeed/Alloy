import { Mail, Shield } from "lucide-react";

import { useAuthStore } from "@/store/auth.store";

export default function ProfilePage() {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Profile</h1>

        <p className="text-muted-foreground">Manage your account information</p>
      </div>

      <div className="rounded-2xl border bg-card p-8">
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <img
            src={user?.avatar ?? "https://i.pravatar.cc/150"}
            alt="avatar"
            className="h-32 w-32 rounded-full border"
          />

          <div>
            <h2 className="text-2xl font-semibold">{user?.name}</h2>

            <div className="mt-2 flex items-center gap-2">
              <Mail size={16} />

              <span>{user?.email}</span>
            </div>

            <div className="mt-2 flex items-center gap-2">
              <Shield size={16} />

              <span>{user?.role}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border bg-card p-6">
        <h3 className="mb-4 text-xl font-semibold">Account Information</h3>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="text-sm text-muted-foreground">Name</label>

            <div className="mt-1 rounded-lg border p-3">{user?.name}</div>
          </div>

          <div>
            <label className="text-sm text-muted-foreground">Email</label>

            <div className="mt-1 rounded-lg border p-3">{user?.email}</div>
          </div>

          <div>
            <label className="text-sm text-muted-foreground">Role</label>

            <div className="mt-1 rounded-lg border p-3">{user?.role}</div>
          </div>

          <div>
            <label className="text-sm text-muted-foreground">User ID</label>

            <div className="mt-1 rounded-lg border p-3">{user?.id}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
