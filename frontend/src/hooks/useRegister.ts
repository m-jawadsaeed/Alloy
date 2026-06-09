import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { authService } from "@/services/auth.service";
import { useAuthStore } from "@/store/auth.store";

import type { RegisterPayload } from "@/types/auth.types";

export function useRegister() {
  const setUser = useAuthStore((state) => state.setUser);

  return useMutation({
    mutationFn: (payload: RegisterPayload) => authService.register(payload),

    onSuccess: (response) => {
      setUser(response.user);

      toast.success("Registration successful");
    },

    onError: () => {
      toast.error("Registration failed");
    },
  });
}
