import type { ProfileType } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export function useLogin({ onSettled }: { onSettled: () => void }) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => {
      const urlencoded = new URLSearchParams();
      urlencoded.append("email", email);
      urlencoded.append("password", password);
      return await axios
        .post<{
          refresh: string;
          access: string;
        }>(
          "https://cyparta-backend-gf7qm.ondigitalocean.app/api/login/",
          urlencoded,
        )
        .then((response) => response.data);
    },
    onSettled: () => {
      onSettled();
    },
    onSuccess: (data) => {
      data.access && localStorage.setItem("token", data.access);
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
  });
}

export function useProfile() {
  return useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      return await axios
        .get<ProfileType>(
          "https://cyparta-backend-gf7qm.ondigitalocean.app/api/profile/",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          },
        )
        .then((response) => response.data);
    },
  });
}
