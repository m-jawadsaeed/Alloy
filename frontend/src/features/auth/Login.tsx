import { useState } from "react";
import { api } from "../../api/axios";
import { useAuthStore } from "../../store/auth.store";

export const Login = () => {
  const setUser = useAuthStore((s) => s.setUser);

  const setToken = useAuthStore((s) => s.setToken);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const res = await api.post("/auth/login", {
      email,
      password,
    });

    setUser(res.data.user);
    setToken(res.data.accessToken);
  };

  return (
    <div>
      <h2>Login</h2>

      <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />

      <input
        placeholder="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={login}>Login</button>
    </div>
  );
};
