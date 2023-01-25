import { MasonryPost } from "@/components/masonry-post";
import { masonrySkeleton } from "@/components/skeleton";
import { useFeedQuery } from "@/hooks/use-query";
import { RootLayout } from "@/layouts/root-layout";
import type { FunctionComponent } from "preact";
import type { RoutableProps } from "preact-router";

export const Sub: FunctionComponent<RoutableProps> = ({}) => {
  const sub = window.location.pathname.replace("/sub/", "");
  const { data, isLoading } = useFeedQuery(sub);

  const content = isLoading
    ? masonrySkeleton
    : data?.posts?.map((post, i) => <MasonryPost key={i} {...post} />);
  return <RootLayout title={sub}>{content}</RootLayout>;
};
