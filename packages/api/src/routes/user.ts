import { authMiddleware } from "@/middlewares/auth-middleware";
import type { UserRequest, UserResponse } from "@/types";
import { userMessages } from "@/util/constants";
import { HttpError } from "@/util/http-error";
import { HttpStatus } from "@/util/http-status";
import { validateUserInput } from "@/util/validators";
import { PrismaClient } from "@prisma/client";
import { NextFunction, Router } from "express";

const router = Router();
const prisma = new PrismaClient();

router.put(
  "/",
  authMiddleware,
  async (req: UserRequest, res: UserResponse, next: NextFunction) => {
    const input = req.body;

    const message = validateUserInput(input);
    if (message) return next(new HttpError(HttpStatus.BAD_REQUEST, message));

    let user = await prisma.user.findUnique({
      where: { username: input.username },
    });
    if (user && user.id != req.user!.id)
      return next(
        new HttpError(HttpStatus.BAD_REQUEST, userMessages.USERNAME_TAKEN)
      );

    user = await prisma.user.update({
      where: { id: req.user!.id },
      data: { ...input },
    });

    req.session!.username = user.username;
    return res.status(HttpStatus.OK).json({ ok: true });
  }
);

export default router;
