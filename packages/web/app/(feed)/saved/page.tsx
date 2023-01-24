import { MasonryPost } from "@/components/masonry-post";
import { getSaved } from "@/util/get";
import { headers } from "next/headers";

export default async function SavedFeed() {
  const res = await getSaved(headers().get("cookie"));

  if (!res.posts?.length)
    return (
      <div className="absolute w-full text-center my-12">
        no saved posts found
      </div>
    );

  return res.posts?.map((post) => <MasonryPost key={post.id} {...post} />);
}
