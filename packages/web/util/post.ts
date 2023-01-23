import type { AuthInput, AuthResponse } from "@/types";
import { request } from "./request";

export const postLogin = (input: AuthInput) => {
  return request<AuthResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify(input),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const postRegister = (input: AuthInput) => {
  return request<AuthResponse>("/auth/register", {
    method: "POST",
    body: JSON.stringify(input),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
