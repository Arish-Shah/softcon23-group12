import type { PostResponse } from "@/types";
import { HttpError } from "@/util/http-error";
import { postMessages } from "@/util/constants";
import { fetchPost } from "@/util/fetchers";
import { HttpStatus } from "@/util/http-status";
import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get("/:id", async (req, res: PostResponse, next) => {
  const id = req.params.id;
  if (!id)
    return next(new HttpError(HttpStatus.BAD_REQUEST, postMessages.INVALID_ID));

  const postRes = await fetchPost(id);
  const data = postRes[0]?.data.children[0]?.data;

  if (!data)
    return next(new HttpError(HttpStatus.BAD_REQUEST, postMessages.NOT_FOUND));

  let saved = false;
  if (!!req.session?.usermame) {
    const user = await prisma.user.findUnique({
      where: { username: req.session.username },
    });
    if (user) {
      const save = await prisma.save.findUnique({
        where: { userId_postId: { postId: id, userId: user.id } },
      });
      saved = !!save;
    }
  }

  return res.status(HttpStatus.OK).json({
    ok: true,
    post: {
      id: data.id,
      title: data.title,
      author: data.author,
      url: data.url_overridden_by_dest,
      sub: data.subreddit,
      permalink: data.permalink,
      saved,
    },
  });
});

export default router;
