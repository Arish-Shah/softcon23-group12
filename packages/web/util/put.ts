import type {
  PasswordInput,
  PasswordResponse,
  UserInput,
  UserResponse,
} from "@/types";
import { request } from "./request";

export const postUpdateUser = (input: UserInput) => {
  return request<UserResponse>("/user/update", {
    method: "PUT",
    body: JSON.stringify(input),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const postUpdatePassword = (input: PasswordInput) => {
  return request<PasswordResponse>("/user/password", {
    method: "PUT",
    body: JSON.stringify(input),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
