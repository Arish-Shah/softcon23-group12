import { authMessages } from "@/util/constants";
import { HttpError } from "@/util/http-error";
import { HttpStatus } from "@/util/http-status";
import { PrismaClient } from "@prisma/client";
import type { RequestHandler } from "express";

const prisma = new PrismaClient();

export const authMiddleware: RequestHandler = async (req, _, next) => {
  const username = req.session!.username;
  if (!username)
    return next(
      new HttpError(HttpStatus.UNAUTHORIZED, authMessages.UNAUTHORIZED)
    );

  const user = await prisma.user.findUnique({ where: { username } });
  if (!user)
    return next(
      new HttpError(HttpStatus.UNAUTHORIZED, authMessages.UNAUTHORIZED)
    );

  req.user = user;
  return next();
};
