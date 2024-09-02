import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export function useLogin({
  onSuccess,
  onSettled,
}: {
  onSuccess: () => void;
  onSettled: () => void;
}) {
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
      await axios.post(
        "https://cyparta-backend-gf7qm.ondigitalocean.app/api/login/",
        urlencoded,
      );
    },
    onSettled: () => {
      onSettled();
    },
    onSuccess: () => {
      onSuccess();
    },
  });
}
