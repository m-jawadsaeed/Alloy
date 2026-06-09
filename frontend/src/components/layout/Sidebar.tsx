import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside
      className="
      w-72
      border-r
      bg-white
      p-4
    "
    >
      <nav className="space-y-2">
        <NavLink to="/dashboard">Dashboard</NavLink>

        <NavLink to="/tasks">Tasks</NavLink>

        <NavLink to="/chat">Chat</NavLink>

        <NavLink to="/canvas">Canvas</NavLink>

        <NavLink to="/profile">Profile</NavLink>

        <NavLink to="/settings">Settings</NavLink>

        <NavLink to="/admin">Admin</NavLink>
      </nav>
    </aside>
  );
}
