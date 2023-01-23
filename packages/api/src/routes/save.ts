import { authMiddleware } from "@/middlewares/auth-middleware";
import type {
  SaveFeedRequest,
  SaveFeedResponse,
  SaveRequest,
  SaveResponse,
} from "@/types";
import { HttpError } from "@/util/http-error";
import { HttpStatus } from "@/util/http-status";
import { validateSaveInput } from "@/util/validators";
import { PrismaClient } from "@prisma/client";
import { NextFunction, Router } from "express";

const router = Router();
const prisma = new PrismaClient();

router.get(
  "/",
  authMiddleware,
  async (req: SaveFeedRequest, res: SaveFeedResponse) => {
    const userId = req.user!.id;
    const postId = req.query.after as string;

    let cursor = {};
    if (postId) {
      cursor = { cursor: { userId_postId: { userId, postId } } };
    }

    const results = await prisma.save.findMany({
      where: { userId: req.user!.id },
      take: 25,
      include: {
        post: true,
      },
      ...cursor,
    });

    return res.status(HttpStatus.OK).json({
      ok: true,
      posts: results.map((r) => ({
        id: r.post.id,
        title: r.post.title,
        sub: r.post.sub,
        url: r.post.url,
        saved: true,
      })),
    });
  }
);

router.post(
  "/",
  authMiddleware,
  async (req: SaveRequest, res: SaveResponse, next: NextFunction) => {
    const input = req.body;
    const userId = req.user!.id;

    const message = validateSaveInput(input);
    if (message) return next(new HttpError(HttpStatus.BAD_REQUEST, message));

    let post = await prisma.post.findUnique({
      where: { id: input.id },
    });
    if (!post) post = await prisma.post.create({ data: { ...input } });

    await prisma.save.create({ data: { userId, postId: input.id } });
    return res.status(HttpStatus.CREATED).json({ ok: true });
  }
);

export default router;
