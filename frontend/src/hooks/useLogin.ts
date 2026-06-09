import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { authService } from "@/services/auth.service";
import { useAuthStore } from "@/store/auth.store";

import type { LoginPayload } from "@/types/auth.types";

export function useLogin() {
  const setUser = useAuthStore((state) => state.setUser);

  return useMutation({
    mutationFn: (payload: LoginPayload) => authService.login(payload),

    onSuccess: (response) => {
      setUser(response.user);

      toast.success("Login successful");
    },

    onError: () => {
      toast.error("Login failed");
    },
  });
}
