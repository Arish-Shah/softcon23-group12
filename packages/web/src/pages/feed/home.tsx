import { MasonryPost } from "@/components/masonry-post";
import { masonrySkeleton } from "@/components/skeleton";
import { useFeedQuery } from "@/hooks/use-query";
import { RootLayout } from "@/layouts/root-layout";
import type { FunctionComponent } from "preact";
import type { RoutableProps } from "preact-router";

export const Home: FunctionComponent<RoutableProps> = () => {
  const { data, isLoading } = useFeedQuery();

  const content = isLoading
    ? masonrySkeleton
    : data?.posts?.map((post, i) => <MasonryPost key={i} {...post} />);
  return <RootLayout>{content}</RootLayout>;
};
