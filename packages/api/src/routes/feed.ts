import type { FeedPost, FeedResponse } from "@/types";
import { RedditSubResponse } from "@/types/reddit";
import { feedMessages } from "@/util/constants";
import { fetchFeed } from "@/util/fetchers";
import { HttpError } from "@/util/http-error";
import { HttpStatus } from "@/util/http-status";
import { Router } from "express";

const router = Router();

const mapToPost = (response: RedditSubResponse): FeedPost[] =>
  response.data.children.map((p) => ({
    id: p.data.id,
    url: p.data.url_overridden_by_dest,
    sub: p.data.subreddit_name_prefixed,
    saved: false,
  }));

router.get("/", async (req, res: FeedResponse) => {
  const response = await fetchFeed(undefined, req.query.after as string);
  return res.status(200).json({ ok: true, posts: mapToPost(response) });
});

router.get("/:name", async (req, res: FeedResponse, next) => {
  const name = req.params.name;
  if (!name)
    return next(
      new HttpError(HttpStatus.BAD_REQUEST, feedMessages.INVALID_NAME)
    );

  const response = await fetchFeed(name, req.query.after as string);
  return res.status(200).json({ ok: true, posts: mapToPost(response) });
});

export default router;
