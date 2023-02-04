import { MasonryPost } from "@/components/masonry-post";
import { masonrySkeleton } from "@/components/skeleton";
import { useSavedQuery } from "@/hooks/use-query";
import { RootLayout } from "@/layouts/root-layout";
import type { FunctionComponent } from "preact";
import { RoutableProps, route } from "preact-router";

export const Saved: FunctionComponent<RoutableProps> = ({}) => {
  const { data, error, isLoading } = useSavedQuery();

  if (error) {
    route("/login", true);
  }

  const content = isLoading
    ? masonrySkeleton
    : data?.posts?.map((post, i) => <MasonryPost key={i} {...post} />);
  return (
    <RootLayout title={`${data?.posts?.length ?? 0} saved post(s)`}>
      {content}
    </RootLayout>
  );
};
