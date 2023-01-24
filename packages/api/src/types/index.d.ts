import type {
  AuthInput as AuthReqBody,
  SaveInput as SaveReqBody,
  UserInput as UserReqBody,
  PasswordInput as PasswordReqBody,
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

interface AuthResBody extends BaseResBody {}
export type AuthRequest = Request<{}, AuthResBody, AuthReqBody, {}>;
export type AuthResponse = Response<AuthResBody>;

interface MeResBody extends BaseResBody {
  user: {
    id: string;
    username: string;
    name: string | null;
    role: string;
  };
}
export type MeResponse = Response<MeResBody>;

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

interface PasswordResBody extends BaseResBody {}
export type PasswordRequest = Request<{}, PasswordResBody, PasswordReqBody, {}>;
export type PasswordResponse = Response<PasswordResBody>;
