import { fetchFeed } from "@/lib/http";
import type { FeedResponse, SubRequest, SubResponse } from "@/types/context";
import express from "express";

const router = express.Router();

router.get("/feed", async (_, res: FeedResponse) => {
  const feed = await fetchFeed();
  return res.status(200).json({
    ok: true,
    message: "",
    posts: feed.data.children.map((p) => ({
      id: p.data.id,
      title: p.data.title,
      author: p.data.author,
      url: p.data.url_overridden_by_dest,
      sub: p.data.subreddit,
      permalink: p.data.permalink,
      isVideo: p.data.is_video,
      saved: false,
    })),
  });
});

router.get("/r/:name", async (req: SubRequest, res: SubResponse) => {
  const feed = await fetchFeed(req.params.name);
  return res.status(200).json({
    ok: true,
    message: "",
    posts: feed.data.children.map((p) => ({
      id: p.data.id,
      title: p.data.title,
      author: p.data.author,
      url: p.data.url,
      sub: p.data.subreddit,
      permalink: p.data.permalink,
      isVideo: p.data.is_video,
      saved: false,
    })),
  });
});

export default router;
