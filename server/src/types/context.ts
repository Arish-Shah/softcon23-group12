import type { Request, Response } from "express";

export type AuthResBody = {
  ok: boolean;
  message: string;
};

export type AuthReqBody = {
  username: string;
  password: string;
};

export type MeResBody = AuthResBody & {
  username?: string;
};

export type AuthRequest = Request<{}, AuthResBody, AuthReqBody>;
export type AuthResponse = Response<AuthResBody>;

export type MeResponse = Response<MeResBody>;
