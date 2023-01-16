import type { AuthInput } from "@/types/input";
import { auth } from "./messages";

export const validateAuthInput = (input: AuthInput) => {
  const username = input.username || "";
  const password = input.password || "";

  if (!username.match(/^[a-zA-Z0-9_]{3,8}$/)) return auth.INVALID_USERNAME;
  if (password.length < 5) return auth.INVALID_PASSWORD;

  return null;
};
