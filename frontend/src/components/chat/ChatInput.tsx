import { useState } from "react";

interface Props {
  onSend: (value: string) => void;
}

export default function ChatInput({ onSend }: Props) {
  const [message, setMessage] = useState("");

  const submit = () => {
    if (!message.trim()) {
      return;
    }

    onSend(message);

    setMessage("");
  };

  return (
    <div className="flex gap-2">
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1 rounded-xl border p-3"
      />

      <button
        onClick={submit}
        className="rounded-xl bg-black px-4 py-2 text-white"
      >
        Send
      </button>
    </div>
  );
}
