import { saveMessage } from "@/config/messages";
import type { SavedResponse } from "@/types/context";
import { PrismaClient } from "@prisma/client";
import express from "express";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/saved", async (req, res: SavedResponse) => {
  const username = req.session!.username;
  if (!username)
    return res.status(401).json({
      ok: false,
      message: saveMessage.UNAUTHORIZED,
      posts: [],
    });

  const posts = await prisma.saved.findMany({
    where: { userId: "" },
  });

  return res.status(200).json({
    ok: true,
    message: saveMessage.SUCCESS,
    posts: [],
  });
});

export default router;
