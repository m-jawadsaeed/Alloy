import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { authService } from "@/services/auth.service";
import { useAuthStore } from "@/store/auth.store";

export function useLogout() {
  const logoutStore = useAuthStore((state) => state.logout);

  return useMutation({
    mutationFn: () => authService.logout(),

    onSuccess: () => {
      logoutStore();

      toast.success("Logged out");
    },
  });
}
