import { MasonryPost } from "@/components/masonry-post";
import { masonrySkeleton } from "@/components/skeleton";
import { useFeedQuery } from "@/hooks/use-query";
import { RootLayout } from "@/layouts/root-layout";
import { FunctionComponent } from "preact";
import { RoutableProps } from "preact-router";

export const Home: FunctionComponent<RoutableProps> = () => {
  const { data, isLoading } = useFeedQuery();

  const content = isLoading
    ? masonrySkeleton
    : data?.posts?.map((post) => <MasonryPost key={post.id} {...post} />);
  return <RootLayout>{content}</RootLayout>;
};
