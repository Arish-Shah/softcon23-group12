import { MasonryPost } from "@/components/masonry-post";
import { getFeed } from "@/util/get";
import { headers } from "next/headers";

type SubFeedProps = {
  params: {
    sub: string;
  };
};

export default async function SubFeed({ params }: SubFeedProps) {
  const res = await getFeed(headers().get("cookie"), params.sub);
  return res.posts?.map((post) => <MasonryPost key={post.id} {...post} />);
}
