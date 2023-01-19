import type { Request, Response } from "express";
import { Post } from "./object";

export type BaseResBody = {
  ok: boolean;
  message: string;
};

export type AuthReqBody = {
  username: string;
  password: string;
};
export type AuthResBody = BaseResBody & {
  username: null | string;
};
export type AuthRequest = Request<{}, AuthResBody, AuthReqBody>;
export type AuthResponse = Response<AuthResBody>;

export type MeResponse = Response<AuthResBody>;

export type FeedResBody = BaseResBody & {
  posts: Post[];
};
export type FeedResponse = Response<FeedResBody>;

export type SubRequest = Request<{ name: string }, FeedResBody, {}>;
export type SubResponse = Response<FeedResBody>;

export type PostResBody = BaseResBody & {
  post: Post | null;
};
export type PostRequest = Request<{ id: string }, PostResBody, {}>;
export type PostResponse = Response<PostResBody>;

export type SavedResponse = Response<FeedResBody>;
