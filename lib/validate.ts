import type { AuthInput } from "@/types/input";
import { auth } from "./constants";

export const validateAuthInput = (input: AuthInput) => {
  const username = input.username || "";
  const password = input.password || "";

  console.log(/^[a-zA-Z0-9_]{3,8}$/.test(username));

  if (!username.match(/^[a-zA-Z0-9_]{3,8}$/)) return auth.INVALID_USERNAME;
  if (password.length < 5) return auth.INVALID_PASSWORD;

  return null;
};
