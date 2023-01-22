import type { AuthInput as AuthReqBody } from "@/util/validators";
import type { Request, Response } from "express";

interface Post {
  id: string;
  title: string;
  author: string;
  url: string;
  sub: string;
  permalink: string;
  saved: boolean;
}

type FeedPost = Pick<Post, "id" | "url" | "sub" | "author" | "saved">;

interface BaseResBody {
  ok: boolean;
  error?: string;
}
export type BaseResponse = Response<BaseResBody>;

interface AuthResBody extends BaseResBody {
  username?: string;
}
export type AuthRequest = Request<{}, AuthResBody, AuthReqBody, {}>;
export type AuthResponse = Response<AuthResBody>;

interface FeedResBody extends BaseResBody {
  posts?: FeedPost[];
}
export type FeedResponse = Response<FeedResBody>;

interface PostResBody extends BaseResBody {
  post?: Post;
}
export type PostResponse = Response<PostResBody>;
