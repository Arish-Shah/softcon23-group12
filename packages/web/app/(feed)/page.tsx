import { MasonryPost } from "@/components/masonry-post";
import { getFeed } from "@/util/get";
import { headers } from "next/headers";

export default async function Home() {
  const res = await getFeed(headers().get("cookie"));
  return res.posts?.map((post) => <MasonryPost key={post.id} {...post} />);
}
