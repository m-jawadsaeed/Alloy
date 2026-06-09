import {
  Bell,
  Search,
} from "lucide-react";

import { useAuthStore } from "@/store/auth.store";

export function Header() {
  const user = useAuthStore(
    (state) => state.user,
  );

  return (
    <header className="border-b bg-white dark:bg-slate-900">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <Search size={18} />

          <input
            placeholder="Search..."
            className="w-72 bg-transparent outline-none"
          />
        </div>

        <div className="flex items-center gap-4">
          <Bell size={20} />

          <div className="text-right">
            <p className="text-sm font-medium">
              {user?.email}
            </p>

            <p className="text-xs text-slate-500">
              {user?.role}
            </p>
          </div>

          <img
            src={
              user?.avatar ??
              "https://i.pravatar.cc/40"
            }
            alt="avatar"
            className="h-10 w-10 rounded-full"
          />
        </div>
      </div>
    </header>
  );
}