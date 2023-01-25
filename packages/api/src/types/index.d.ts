import type {
  AuthInput as AuthReqBody,
  SaveInput as SaveReqBody,
  UpdateUserInput as UpdateUserReqBody,
  UpdatePasswordInput as UpdatePasswordReqBody,
} from "@/util/validators";
import type { User as PrismaUser } from "@prisma/client";
import type { Request, Response } from "express";

declare global {
  namespace Express {
    export interface Request {
      user?: PrismaUser;
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

interface User {
  id: string;
  username: string;
  name: string | null;
  role: string;
  createdAt: string;
}

type FeedPost = Pick<Post, "id" | "title" | "url" | "sub" | "saved">;

interface BaseResBody {
  ok: boolean;
  message?: string;
}
export type BaseResponse = Response<BaseResBody>;

interface AuthResBody extends BaseResBody {
  user?: User;
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
  posts?: FeedPost[];
}
export type SaveFeedRequest = Request;
export type SaveFeedResponse = Response<SaveFeedResBody>;

interface UpdateResBody extends BaseResBody {}
export type UpdateUserRequest = Request<
  {},
  UpdateResBody,
  UpdateUserReqBody,
  {}
>;
export type UpdatePasswordRequest = Request<
  {},
  UpdateResBody,
  UpdatePasswordReqBody,
  {}
>;
export type UpdateResponse = Response<UpdateResBody>;
