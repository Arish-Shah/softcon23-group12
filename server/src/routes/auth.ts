import { authMessage } from "@/config/messages";
import { validateAuthReqBody } from "@/lib/validate";
import type { AuthRequest, AuthResponse, MeResponse } from "@/types/context";
import { PrismaClient } from "@prisma/client";
import { compare, hash } from "bcryptjs";
import express from "express";

const router = express.Router();
const prisma = new PrismaClient();

router.post("/register", async (req: AuthRequest, res: AuthResponse) => {
  const body = req.body;

  const message = validateAuthReqBody(body);
  if (message)
    return res.status(400).json({ ok: false, message, username: null });

  let user = await prisma.user.findUnique({
    where: { username: body.username },
  });
  if (user)
    return res.status(400).json({
      ok: false,
      message: authMessage.USERNAME_EXISTS,
      username: null,
    });

  const password = await hash(body.password, 10);
  user = await prisma.user.create({
    data: { username: body.username, password },
  });

  req.session!.username = user.username;
  return res.status(201).json({
    ok: true,
    message: authMessage.REGISTER_SUCCESS,
    username: user.username,
  });
});

router.post("/login", async (req: AuthRequest, res: AuthResponse) => {
  const body = req.body;

  const message = validateAuthReqBody(body);
  if (message)
    return res.status(400).json({ ok: false, message, username: null });

  const user = await prisma.user.findUnique({
    where: { username: body.username },
  });
  if (!user)
    return res
      .status(400)
      .json({ ok: false, message: authMessage.LOGIN_ERROR, username: null });

  const valid = await compare(body.password, user.password);
  if (!valid)
    return res
      .status(400)
      .json({ ok: false, message: authMessage.LOGIN_ERROR, username: null });

  req.session!.username = user.username;
  return res.status(200).json({
    ok: true,
    message: authMessage.LOGIN_SUCCESS,
    username: user.username,
  });
});

router.get("/me", async (req, res: MeResponse) => {
  const username = req.session!.username;
  if (!username)
    return res
      .status(403)
      .json({ ok: false, message: authMessage.LOGGED_OUT, username: null });

  const user = await prisma.user.findUnique({
    where: { username },
  });
  if (!user)
    return res
      .status(404)
      .json({ ok: false, message: authMessage.LOGGED_OUT, username: null });

  return res.status(200).json({
    ok: true,
    username: user.username,
    message: authMessage.LOGGED_IN,
  });
});

router.post("/logout", (req, res: AuthResponse) => {
  req.session = null;
  return res.status(200).json({
    ok: true,
    message: authMessage.LOGOUT_SUCCESS,
    username: null,
  });
});

export default router;
