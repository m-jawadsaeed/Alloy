import { useState } from "react";
import { socket } from "../../sockets/socket";
import { usePrivateChat } from "./usePrivateChat";

export const PrivateChat = ({
  userId
}: {
  userId: string;
}) => {
  const [msg, setMsg] = useState("");

  const { messages } =
    usePrivateChat();

  const send = () => {
    socket.emit("private:message", {
      to: userId,
      message: msg
    });

    setMsg("");
  };

  return (
    <div>
      <h2>Private Chat</h2>

      <div>
        {messages.map((m, i) => (
          <p key={i}>
            {m.message}
          </p>
        ))}
      </div>

      <input
        value={msg}
        onChange={(e) =>
          setMsg(e.target.value)
        }
      />

      <button onClick={send}>
        Send
      </button>
    </div>
  );
};