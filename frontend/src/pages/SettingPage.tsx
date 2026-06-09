import { useSettingsStore } from "../store/setting.store";

export default function SettingsPage() {
  const {
    darkMode,
    notifications,
    sounds,
    toggleDarkMode,
    toggleNotifications,
    toggleSounds,
  } = useSettingsStore();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>

      <div className="rounded-xl border p-6">
        <label>
          <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
          Dark Mode
        </label>
      </div>

      <div className="rounded-xl border p-6">
        <label>
          <input
            type="checkbox"
            checked={notifications}
            onChange={toggleNotifications}
          />
          Notifications
        </label>
      </div>

      <div className="rounded-xl border p-6">
        <label>
          <input type="checkbox" checked={sounds} onChange={toggleSounds} />
          Sounds
        </label>
      </div>
    </div>
  );
}
