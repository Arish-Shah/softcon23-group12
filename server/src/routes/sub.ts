import { feedMessage } from "@/config/messages";
import { fetchFeed } from "@/lib/http";
import type { FeedResponse, SubRequest, SubResponse } from "@/types/context";
import express from "express";

const router = express.Router();

router.get("/feed", async (_, res: FeedResponse) => {
  const feed = await fetchFeed();
  return res.status(200).json({
    ok: true,
    message: feedMessage.SUCCESS,
    posts: feed.data.children.map((p) => ({
      id: p.data.id,
      title: p.data.title,
      author: p.data.author,
      url: p.data.url_overridden_by_dest,
      sub: p.data.subreddit_name_prefixed,
      permalink: p.data.permalink,
      saved: false,
    })),
  });
});

router.get("/r/:name", async (req: SubRequest, res: SubResponse) => {
  const name = req.params.name;
  if (!name)
    return res
      .status(400)
      .json({ ok: false, message: feedMessage.ERROR, posts: [] });

  const feed = await fetchFeed(name);
  return res.status(200).json({
    ok: true,
    message: feedMessage.SUCCESS,
    posts: feed.data.children.map((p) => ({
      id: p.data.id,
      title: p.data.title,
      author: p.data.author,
      url: p.data.url,
      sub: p.data.subreddit_name_prefixed,
      permalink: p.data.permalink,
      saved: false,
    })),
  });
});

export default router;
