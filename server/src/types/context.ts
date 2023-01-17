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
export type AuthResBody = BaseResBody & {};
export type AuthRequest = Request<{}, AuthResBody, AuthReqBody>;
export type AuthResponse = Response<AuthResBody>;

export type MeResBody = BaseResBody & {
  username?: string;
};
export type MeResponse = Response<MeResBody>;

export type FeedResBody = BaseResBody & {
  posts: Post[];
};
export type FeedResponse = Response<FeedResBody>;

export type SubRequest = Request<{ name: string }, FeedResBody, {}>;
export type SubResponse = Response<FeedResBody>;
