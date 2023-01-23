import type { AuthResponse, FeedResponse } from "@/types";
import { request } from "./request";

export async function getMe(cookie: any) {
  return request<AuthResponse>("/auth/me", {
    headers: { cookie },
  });
}

export async function getFeed(sub?: string) {
  return request<FeedResponse>(`/feed/${sub ?? ""}`);
}
