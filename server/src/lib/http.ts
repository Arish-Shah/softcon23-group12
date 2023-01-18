import { createFeedUrl, createPostUrl } from "@/config/url";
import { SubRoot } from "@/types/reddit";
import fetch from "node-fetch";

export const http = async <T>(url: string): Promise<T> => {
  const promise = await fetch(url);
  const response = await promise.json();
  return response as Promise<T>;
};

export const fetchFeed = (sub?: string) => {
  return http<SubRoot>(createFeedUrl(sub));
};

export const fetchPost = (id: string) => {
  return http<SubRoot[]>(createPostUrl(id));
};
