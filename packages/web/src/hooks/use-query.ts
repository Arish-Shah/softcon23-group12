import type {
  AuthResponse,
  BaseResponse,
  FeedResponse,
  PostResponse,
} from "@/types";
import { apiUrl } from "@/utils/constants";
import { useQuery } from "@tanstack/react-query";

const get = (path: string) => {
  return async () => {
    const response = await fetch(apiUrl + path, {
      credentials: "include",
    });
    const json: BaseResponse = await response.json();
    if (!json.ok) throw new Error(json.message);
    return json;
  };
};

export const useMeQuery = () =>
  useQuery<AuthResponse, Error>({
    queryKey: ["me"],
    queryFn: get("/auth/me"),
  });

export const useFeedQuery = (sub = "", after = "") =>
  useQuery<FeedResponse, Error>({
    queryKey: ["feed"],
    queryFn: get("/feed/" + sub + "?after=" + after),
  });

export const useSavedQuery = () =>
  useQuery<FeedResponse, Error>({
    queryKey: ["saved"],
    queryFn: get("/save"),
  });

export const usePostQuery = (id: string) =>
  useQuery<PostResponse, Error>({
    queryKey: ["post", id],
    queryFn: get("/post/" + id),
  });
