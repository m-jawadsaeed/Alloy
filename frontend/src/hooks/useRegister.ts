import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { authService } from "../services/auth.service";
import { useAuthStore } from "../store/auth.store";

export const useRegister = () => {
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation({
    mutationFn: authService.register,

    onSuccess: (data) => {
      setAuth(data.user, data.accessToken);

      navigate("/dashboard");
    },
  });
};