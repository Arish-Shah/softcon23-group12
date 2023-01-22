import { authMessages } from "@/util/constants";
import { HttpError } from "@/util/http-error";
import { HttpStatus } from "@/util/http-status";
import { PrismaClient } from "@prisma/client";
import { RequestHandler } from "express";

const users = new PrismaClient().user;

export const isAuth: RequestHandler = async (req, _, next) => {
  const username = req.session!.username;
  if (!username)
    throw new HttpError(HttpStatus.BAD_REQUEST, authMessages.UNAUTHORIZED);

  const user = await users.findUnique({ where: { username } });
  if (!user)
    throw new HttpError(HttpStatus.BAD_REQUEST, authMessages.UNAUTHORIZED);

  next();
};
