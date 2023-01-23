import { MasonryPost } from "@/components/masonry-post";
import { getFeed } from "@/util/get";

export default async function Feed() {
  const res = await getFeed();
  return res.posts?.map((post) => <MasonryPost key={post.id} {...post} />);
}
