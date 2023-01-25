import { REDDIT_URL } from "@/config";
import type { RedditPostResponse, RedditSubResponse } from "@/types/reddit";
import fetch from "node-fetch";
import { home } from "./constants";

export const request = async <T>(url: string): Promise<T> => {
  const promise = await fetch(url);
  const response = await promise.json();
  return response as Promise<T>;
};

export const fetchFeed = (sub = home, cursor?: string) => {
  const after = cursor ? `t3_${cursor}` : "";
  return request<RedditSubResponse>(
    `${REDDIT_URL}/r/${sub}/top.json?t=all&after=${after}`
  );
};

export const fetchPost = (id: string) => {
  return request<RedditPostResponse>(`${REDDIT_URL}/${id}.json`);
};
