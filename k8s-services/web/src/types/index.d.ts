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

export interface User {
  id: string;
  username: string;
  name: string;
  role: string;
  createdAt: string;
}

export interface AuthInput {
  username: string;
  password: string;
}

export interface SaveInput {
  id: string;
  title: string;
  url: string;
  sub: string;
}

export interface UpdateUserInput {
  username: string;
  name: string;
}

export interface UpdatePasswordInput {
  password: string;
  confirmPassword: string;
  oldPassword: string;
}

export interface BaseResponse {
  ok: boolean;
  message?: string;
}

export interface AuthResponse extends BaseResponse {
  user?: User;
}

export interface FeedResponse extends BaseResponse {
  posts?: FeedPost[];
  hasMore?: boolean;
}

export interface SaveResponse extends BaseResponse {}

export interface PostResponse extends BaseResponse {
  post?: Post;
}

export interface UpdateResponse extends BaseResponse {}
