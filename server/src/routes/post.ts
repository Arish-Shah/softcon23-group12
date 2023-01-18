import { postMessage } from "@/config/messages";
import { fetchPost } from "@/lib/http";
import type { PostRequest, PostResponse } from "@/types/context";
import express from "express";

const router = express.Router();

router.get("/:id", async (req: PostRequest, res: PostResponse) => {
  const id = req.params.id;
  if (!id)
    return res.status(400).json({
      ok: false,
      message: postMessage.ERROR,
      post: null,
    });

  const response = await fetchPost(id);
  const post = response[0]!.data.children[0]!.data;
  return res.status(200).json({
    ok: true,
    message: postMessage.SUCCESS,
    post: {
      id: post.id,
      title: post.title,
      author: post.author,
      url: post.url,
      sub: post.subreddit_name_prefixed,
      permalink: post.permalink,
      saved: false,
    },
  });
});

export default router;
