import { useState } from "react";
import { socket } from "../../sockets/socket";
import { useGroupChat } from "./useGroupChat";

export const GroupChat = ({ roomId }: { roomId: string }) => {
  const [msg, setMsg] = useState("");

  const { messages } = useGroupChat();

  const send = () => {
    socket.emit("group:message", {
      roomId,
      message: msg,
    });

    setMsg("");
  };

  return (
    <div>
      <h2>Group Chat</h2>

      <div>
        {messages.map((m, i) => (
          <p key={i}>{m.message}</p>
        ))}
      </div>

      <input value={msg} onChange={(e) => setMsg(e.target.value)} />

      <button onClick={send}>Send</button>
    </div>
  );
};
