import useSWR from "swr";
import { urls } from "../lib/constants";
import { get } from "../lib/fetcher";
import type { AuthResponse, FeedResponse } from "../types/response";

export const useMeQuery = () => useSWR<AuthResponse>(urls.ME, get);

export const useFeedQuery = () => useSWR<FeedResponse>(urls.FEED, get);
