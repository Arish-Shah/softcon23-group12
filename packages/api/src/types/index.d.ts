import type { AuthInput as AuthReqBody } from "@/util/validators";
import type { Request, Response } from "express";

interface BaseResBody {
  ok: boolean;
  error?: string;
}

interface AuthResBody extends BaseResBody {
  username?: string;
}
export type AuthRequest = Request<{}, AuthResBody, AuthReqBody, {}>;
export type AuthResponse = Response<AuthResBody>;
