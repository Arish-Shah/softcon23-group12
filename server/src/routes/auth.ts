import { PrismaClient } from "@prisma/client";
import { compare, hash } from "bcryptjs";
import express from "express";
import { auth } from "../config/messages";
import { validateAuthReqBody } from "../lib/validate";
import type { AuthRequest, AuthResponse, MeResponse } from "../types/context";

const router = express.Router();
const prisma = new PrismaClient();

router.post("/register", async (req: AuthRequest, res: AuthResponse) => {
  const body = req.body;

  const message = validateAuthReqBody(body);
  if (message) return res.status(400).json({ ok: false, message });

  let user = await prisma.user.findUnique({
    where: { username: body.username },
  });
  if (user)
    return res.status(400).json({ ok: false, message: auth.USERNAME_EXISTS });

  const password = await hash(body.password, 10);
  user = await prisma.user.create({
    data: { username: body.username, password },
  });

  return res.status(201).json({ ok: true, message: auth.REGISTER_SUCCESS });
});

router.post("/login", async (req: AuthRequest, res: AuthResponse) => {
  const body = req.body;

  const message = validateAuthReqBody(body);
  if (message) return res.status(400).json({ ok: false, message });

  const user = await prisma.user.findUnique({
    where: { username: body.username },
  });
  if (!user)
    return res.status(400).json({ ok: false, message: auth.LOGIN_ERROR });

  const valid = await compare(body.password, user.password);
  if (!valid)
    return res.status(400).json({ ok: false, message: auth.LOGIN_ERROR });

  req.session!.username = user.username;
  return res.status(200).json({ ok: true, message: auth.LOGIN_SUCCESS });
});

router.get("/me", async (req, res: MeResponse) => {
  const username = req.session!.username;
  if (!username)
    return res.status(403).json({ ok: false, message: auth.LOGGED_OUT });

  const user = await prisma.user.findUnique({
    where: { username },
  });
  if (!user)
    return res.status(404).json({ ok: false, message: auth.LOGGED_OUT });

  return res.status(200).json({
    ok: true,
    username: user.username,
    message: auth.LOGGED_IN,
  });
});

router.post("/logout", (req, res: AuthResponse) => {
  req.session = null;
  return res.status(200).json({
    ok: true,
    message: auth.LOGOUT_SUCCESS,
  });
});

export default router;
