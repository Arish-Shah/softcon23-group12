import type { AuthResponse, FeedResponse, MeResponse } from "@/types";
import { request } from "./request";

export async function getMe(cookie: any) {
  return request<MeResponse>("/auth/me", {
    headers: { cookie },
  });
}

export async function getFeed(cookie: any, sub = "") {
  return request<FeedResponse>(`/feed/${sub}`, {
    headers: { cookie },
  });
}

export async function getSaved(cookie: any) {
  return request<FeedResponse>("/save", {
    headers: { cookie },
  });
}
