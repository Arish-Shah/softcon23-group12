import { urls } from "@/lib/constants";
import { get } from "@/lib/fetcher";
import type {
  AuthResponse,
  FeedResponse,
  PostResponse,
} from "@/types/response";
import useSWR from "swr";

export const useMeQuery = () => useSWR<AuthResponse>(urls.ME, get);

export const useFeedQuery = () => useSWR<FeedResponse>(urls.FEED, get);

export const useSubQuery = (subName: string) =>
  useSWR<FeedResponse>(urls.SUB(subName), get);

export const usePostQuery = (id: string) =>
  useSWR<PostResponse>(urls.POST(id), get);
