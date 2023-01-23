import type { AuthInput, AuthResponse, SaveInput, SaveResponse } from "@/types";
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

export const postSave = (input: SaveInput) => {
  return request<SaveResponse>("/save", {
    method: "POST",
    body: JSON.stringify(input),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
