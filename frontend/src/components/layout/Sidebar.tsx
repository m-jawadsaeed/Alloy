import {
  LayoutDashboard,
  CheckSquare,
  MessageSquare,
  Users,
  PenTool,
  User,
  Settings,
  Shield,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const links = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Tasks",
    path: "/tasks",
    icon: CheckSquare,
  },
  {
    name: "Private Chat",
    path: "/chat",
    icon: MessageSquare,
  },
  {
    name: "Group Chat",
    path: "/group-chat",
    icon: Users,
  },
  {
    name: "Canvas",
    path: "/canvas",
    icon: PenTool,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: User,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
  {
    name: "Admin",
    path: "/admin",
    icon: Shield,
  },
];

export function Sidebar() {
  return (
    <aside className="hidden w-72 border-r bg-white lg:flex lg:flex-col dark:bg-slate-900">
      <div className="border-b p-6">
        <h1 className="text-xl font-bold">Alloy</h1>

        <p className="text-sm text-slate-500">TaskFlow Management System</p>
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {links.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 transition-all ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "hover:bg-slate-100 dark:hover:bg-slate-800"
                }`
              }
            >
              <Icon size={18} />

              {item.name}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}
