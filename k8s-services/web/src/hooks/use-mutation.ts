import type {
  AuthInput,
  AuthResponse,
  BaseResponse,
  FeedResponse,
  PostResponse,
  SaveInput,
  SaveResponse,
  UpdatePasswordInput,
  UpdateResponse,
  UpdateUserInput,
} from "@/types";
import { apiUrl } from "@/utils/constants";
import { Updater, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

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
      toast.success(data.message);
      queryClient.setQueryData<AuthResponse>(["me"], {
        ok: true,
        message: data.message,
        user: data.user,
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useRegisterMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<AuthResponse, Error, AuthInput>({
    mutationFn: (input) => post("/auth/register", input),
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.setQueryData<AuthResponse>(["me"], {
        ok: true,
        message: data.message,
        user: data.user,
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
export const useLogoutMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<AuthResponse, Error>({
    mutationFn: () => post("/auth/logout", {}),
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.setQueryData<AuthResponse>(["me"], {
        ok: false,
        message: data.message,
        user: undefined,
      });
    },
  });
};

export const useSaveMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<SaveResponse, Error, SaveInput>({
    mutationFn: (input) => post("/save", input),
    onSuccess: (data, { id, title, url, sub }) => {
      toast.success(data.message);

      const updater: Updater<
        FeedResponse | undefined,
        FeedResponse | undefined
      > = (oldData) => {
        if (oldData?.posts) {
          const index = oldData.posts.findIndex((post) => post.id === id);
          if (index >= 0) {
            const newData = structuredClone(oldData);
            newData.posts![index].saved = !oldData.posts[index].saved;
            return newData;
          }
        }
      };

      queryClient.setQueryData<FeedResponse>(["feed", ""], updater);
      queryClient.setQueryData<FeedResponse>(["feed", sub], updater);
      queryClient.setQueryData<PostResponse>(["post", id], (oldData) => {
        if (oldData?.post) {
          return {
            ...oldData,
            post: { ...oldData.post, saved: !oldData.post.saved },
          };
        }
      });
      queryClient.setQueryData<FeedResponse>(["saved"], (oldData) => {
        if (oldData?.posts?.length) {
          const index = oldData.posts.findIndex((post) => post.id === id);
          const newData = structuredClone(oldData);
          if (index >= 0) {
            newData.posts!.splice(index, 1);
            return newData;
          } else {
            newData.posts!.unshift({ id, title, url, sub, saved: true });
          }
          return newData;
        }
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useUpdateUserMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<UpdateResponse, Error, UpdateUserInput>({
    mutationFn: (input) => put("/update/user", input),
    onSuccess: (data, { username, name }) => {
      toast.success(data.message);
      queryClient.setQueryData<AuthResponse>(["me"], (oldData) => {
        if (oldData?.user?.id) {
          return { ...oldData, user: { ...oldData.user, username, name } };
        }
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useUpdatePasswordMutation = () => {
  return useMutation<UpdateResponse, Error, UpdatePasswordInput>({
    mutationFn: (input) => put("/update/password", input),
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
