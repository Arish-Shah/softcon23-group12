import type {
  AuthInput,
  AuthResponse,
  BaseResponse,
  SaveInput,
  SaveResponse,
  UpdatePasswordInput,
  UpdateResponse,
  UpdateUserInput,
} from "@/types";
import { apiUrl } from "@/utils/constants";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const request = async (method: "POST" | "PUT", path: string, body: any) => {
  const response = await fetch(apiUrl + path, {
    credentials: "include",
    body: JSON.stringify(body),
    method,
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json: BaseResponse = await response.json();
  if (!json.ok) throw new Error(json.message);
  return json;
};

const post = (path: string, body: any) => request("POST", path, body);
const put = (path: string, body: any) => request("PUT", path, body);

export const useLoginMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<AuthResponse, Error, AuthInput>({
    mutationFn: (input) => post("/auth/login", input),
    onSuccess: (data) => {
      queryClient.setQueryData<AuthResponse>(["me"], {
        ok: true,
        user: data.user,
      });
    },
  });
};

export const useRegisterMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<AuthResponse, Error, AuthInput>({
    mutationFn: (input) => post("/auth/register", input),
    onSuccess: (data) => {
      queryClient.setQueryData<AuthResponse>(["me"], {
        ok: true,
        user: data.user,
      });
    },
  });
};
export const useLogoutMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<AuthResponse, Error>({
    mutationFn: () => post("/auth/logout", {}),
    onSuccess: () => {
      queryClient.setQueryData<AuthResponse>(["me"], {
        ok: false,
        user: undefined,
      });
    },
  });
};

export const useSaveMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<SaveResponse, Error, SaveInput>({
    mutationFn: (input) => post("/save", input),
    onSuccess: () => {},
  });
};

export const useUpdateUserMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<UpdateResponse, Error, UpdateUserInput>({
    mutationFn: (input) => put("/update/user", input),
    onSuccess: (_, { username, name }) => {
      queryClient.setQueryData<AuthResponse>(["me"], (oldData) => {
        if (oldData?.user?.id) {
          return { ...oldData, user: { ...oldData.user, username, name } };
        }
      });
    },
  });
};

export const useUpdatePasswordMutation = () =>
  useMutation<UpdateResponse, Error, UpdatePasswordInput>({
    mutationFn: (input) => put("/update/password", input),
  });
