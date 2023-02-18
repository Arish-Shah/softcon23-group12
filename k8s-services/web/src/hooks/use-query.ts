import type {
  AuthResponse,
  BaseResponse,
  FeedResponse,
  PostResponse,
} from "@/types";
import { apiUrl } from "@/utils/constants";
import { useQuery } from "@tanstack/react-query";
import { route } from "preact-router";
import { toast } from "react-hot-toast";

const get = async (path: string) => {
  const response = await fetch(apiUrl + path, {
    credentials: "include",
  });
  const json: BaseResponse = await response.json();
  if (!json.ok) throw new Error(json.message);
  return json;
};

export const useMeQuery = () =>
  useQuery<AuthResponse, Error>({
    queryKey: ["me"],
    queryFn: () => get("/auth/me"),
  });

export const useFeedQuery = (sub = "", after = "") =>
  useQuery<FeedResponse, Error>({
    queryKey: ["feed", sub],
    queryFn: () => get("/feed/" + sub + "?after=" + after),
    onError: (error) => {
      toast.error(error.message);
      route("/", true);
    },
  });

export const useSavedQuery = () =>
  useQuery<FeedResponse, Error>({
    queryKey: ["saved"],
    queryFn: () => get("/save"),
  });

export const usePostQuery = (id: string) => {
  return useQuery<PostResponse, Error>({
    queryKey: ["post", id],
    queryFn: () => get("/post/" + id),
    onError: (error) => {
      toast.error(error.message);
      route("/", true);
    },
  });
};
