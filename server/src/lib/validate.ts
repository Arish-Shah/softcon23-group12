import { auth } from "@/config/messages";
import type { AuthReqBody } from "@/types/context";

export const validateAuthReqBody = (body: AuthReqBody) => {
  const username = body.username?.trim() || "";
  const password = body.password?.trim() || "";

  if (!/^[a-zA-Z0-9_]{3,8}$/.test(username)) return auth.INVALID_USERNAME;
  if (password.length < 5) return auth.INVALID_PASSWORD;

  return null;
};
