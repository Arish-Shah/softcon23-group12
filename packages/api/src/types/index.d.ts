import type {
  AuthInput as AuthReqBody,
  SaveInput as SaveReqBody,
  UserInput as UserReqBody,
} from "@/util/validators";
import type { User } from "@prisma/client";
import type { Request, Response } from "express";

declare global {
  namespace Express {
    export interface Request {
      user?: User;
    }
  }
}

interface Post {
  id: string;
  title: string;
  author: string;
  url: string;
  sub: string;
  permalink: string;
  saved: boolean;
}

type FeedPost = Pick<Post, "id" | "title" | "url" | "sub" | "saved">;

interface BaseResBody {
  ok: boolean;
  message?: string;
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

interface SaveResBody extends BaseResBody {}
export type SaveRequest = Request<{}, SaveResBody, SaveReqBody, {}>;
export type SaveResponse = Response<SaveResBody>;

interface SaveFeedResBody extends BaseResBody {
  posts: FeedPost[];
}
export type SaveFeedRequest = Request;
export type SaveFeedResponse = Response<SaveFeedResBody>;

interface UserResBody extends BaseResBody {}
export type UserRequest = Request<{}, UserResBody, UserReqBody, {}>;
export type UserResponse = Response<UserResBody>;
