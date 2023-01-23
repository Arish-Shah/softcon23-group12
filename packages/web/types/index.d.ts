export interface Post {
  id: string;
  title: string;
  author: string;
  url: string;
  sub: string;
  permalink: string;
  saved: boolean;
}

export type FeedPost = Pick<Post, "id" | "title" | "url" | "sub" | "saved">;

export interface AuthInput {
  username: string;
  password: string;
}

export interface BaseResponse {
  ok: boolean;
  error?: string;
}

export interface AuthResponse extends BaseResponse {
  username?: string;
}

export interface FeedResponse extends BaseResponse {
  posts?: FeedPost[];
}
