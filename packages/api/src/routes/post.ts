import type { PostResponse } from "@/types";
import { HttpError } from "@/util/http-error";
import { postMessages } from "@/util/constants";
import { fetchPost } from "@/util/fetchers";
import { HttpStatus } from "@/util/http-status";
import { Router } from "express";

const router = Router();

router.get("/:id", async (req, res: PostResponse, next) => {
  const id = req.params.id;
  if (!id)
    return next(new HttpError(HttpStatus.BAD_REQUEST, postMessages.INVALID_ID));

  const postRes = await fetchPost(id);
  const data = postRes[0]?.data.children[0]?.data;

  if (!data)
    throw new HttpError(HttpStatus.BAD_REQUEST, postMessages.NOT_FOUND);

  return res.status(HttpStatus.OK).json({
    ok: true,
    post: {
      id: data.id,
      title: data.title,
      author: data.author,
      url: data.url_overridden_by_dest,
      sub: data.subreddit,
      permalink: data.permalink,
      saved: false,
    },
  });
});

export default router;
