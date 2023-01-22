import type { AuthRequest, AuthResponse } from "@/types";
import { HttpError } from "@/util/http-error";
import { authMessages } from "@/util/constants";
import { HttpStatus } from "@/util/http-status";
import { AuthInput, validateAuthInput } from "@/util/validators";
import { PrismaClient } from "@prisma/client";
import { compare, hash } from "bcryptjs";
import { Request, Router } from "express";
import { isAuth } from "@/middleware/is-auth";

const router = Router();
const users = new PrismaClient().user;

router.post("/register", async (req: AuthRequest, res: AuthResponse) => {
  const input = req.body as AuthInput;

  const error = validateAuthInput(input);
  if (error) throw new HttpError(HttpStatus.BAD_REQUEST, error);

  let user = await users.findUnique({ where: { username: input.username } });
  if (user)
    throw new HttpError(HttpStatus.BAD_REQUEST, authMessages.USERNAME_TAKEN);

  const password = await hash(input.password, 10);
  user = await users.create({
    data: { username: input.username, password },
  });

  req.session!.username = user.username;
  return res
    .status(HttpStatus.CREATED)
    .json({ ok: true, username: user.username });
});

router.post("/login", async (req: AuthRequest, res: AuthResponse) => {
  const input = req.body as AuthInput;

  const error = validateAuthInput(input);
  if (error) throw new HttpError(HttpStatus.BAD_REQUEST, error);

  let user = await users.findUnique({ where: { username: input.username } });
  if (!user)
    throw new HttpError(HttpStatus.BAD_REQUEST, authMessages.USER_NOT_FOUND);

  const valid = await compare(input.password, user.password);
  if (!valid)
    throw new HttpError(HttpStatus.BAD_REQUEST, authMessages.USER_NOT_FOUND);

  req.session!.username = user.username;
  return res.status(HttpStatus.OK).json({ ok: true });
});

router.get("/me", isAuth, async (req: Request, res: AuthResponse) => {
  return res
    .status(HttpStatus.OK)
    .json({ ok: true, username: req.session!.username });
});

router.post("/logout", (req, res: AuthResponse) => {
  req.session = null;
  return res.status(HttpStatus.OK).json({ ok: true });
});

export default router;
