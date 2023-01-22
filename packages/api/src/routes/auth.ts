import type { AuthRequest, AuthResponse } from "@/types";
import { authMessages } from "@/util/constants";
import { HttpStatus } from "@/util/http-status";
import { AuthInput, validateAuthInput } from "@/util/validators";
import { PrismaClient } from "@prisma/client";
import { compare, hash } from "bcryptjs";
import { Router } from "express";

const router = Router();
const users = new PrismaClient().user;

router.post("/register", async (req: AuthRequest, res: AuthResponse) => {
  const input = req.body as AuthInput;

  const error = validateAuthInput(input);
  if (error)
    return res.status(HttpStatus.BAD_REQUEST).json({ ok: false, error });

  let user = await users.findUnique({ where: { username: input.username } });
  if (user)
    return res
      .status(HttpStatus.BAD_REQUEST)
      .json({ ok: false, error: authMessages.USERNAME_TAKEN });

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
  if (error)
    return res.status(HttpStatus.BAD_REQUEST).json({ ok: false, error });

  let user = await users.findUnique({ where: { username: input.username } });
  if (!user)
    return res
      .status(HttpStatus.BAD_REQUEST)
      .json({ ok: false, error: authMessages.USER_NOT_FOUND });

  const valid = await compare(input.password, user.password);
  if (!valid)
    return res
      .status(HttpStatus.BAD_REQUEST)
      .json({ ok: false, error: authMessages.USER_NOT_FOUND });

  req.session!.username = user.username;
  return res.status(HttpStatus.OK).json({ ok: true });
});

router.get("/me", async (req, res: AuthResponse) => {
  const username = req.session!.username;
  if (!username)
    return res
      .status(HttpStatus.BAD_REQUEST)
      .json({ ok: false, error: authMessages.UNAUTHORIZED });

  const user = await users.findUnique({
    where: { username },
  });
  if (!user)
    return res
      .status(HttpStatus.BAD_REQUEST)
      .json({ ok: false, error: authMessages.UNAUTHORIZED });

  return res.status(HttpStatus.OK).json({ ok: true, username });
});

router.post("/logout", (req, res: AuthResponse) => {
  req.session = null;
  return res.status(HttpStatus.OK).json({ ok: true });
});

export default router;
