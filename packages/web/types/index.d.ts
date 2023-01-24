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

export interface SaveInput {
  id: string;
  title: string;
  url: string;
  sub: string;
}

export interface UserInput {
  username: string;
  name: string;
}

export interface PasswordInput {
  password: string;
  confirmPassword: string;
  oldPassword: string;
}

export interface BaseResponse {
  ok: boolean;
  message?: string;
}

export interface AuthResponse extends BaseResponse {}

export interface MeResponse extends BaseResponse {
  user?: {
    id: string;
    username: string;
    name: string;
    role: string;
  };
}

export interface FeedResponse extends BaseResponse {
  posts?: FeedPost[];
}

export interface SaveResponse extends BaseResponse {}

export interface UserResponse extends BaseResponse {}

export interface PasswordResponse extends BaseResponse {}
