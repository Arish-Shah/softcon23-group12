import type { FeedResponse } from "@/types";
import { MasonryPost } from "./masonry-post";
import { masonrySkeleton } from "./skeleton";

type MasonryProps = {
  data: FeedResponse;
  error: Error;
  isLoading: boolean;
};

export const Masonry = ({ data, isLoading }: MasonryProps) => {
  if (isLoading) return masonrySkeleton;
  return data!.posts!.map((post, i) => <MasonryPost key={i} {...post} />);
};
