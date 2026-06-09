import { useQuery } from "@tanstack/react-query";

import { api } from "@/api/axios";

import type { UserProfile } from "@/types/profile.types";

export function useProfile() {
  return useQuery({
    queryKey: ["profile"],

    queryFn: async () => {
      const { data } = await api.get<UserProfile>("/api/profile");

      return data;
    },
  });
}
