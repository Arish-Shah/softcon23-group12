import { MasonryPost } from "@/components/masonry-post";
import { masonrySkeleton } from "@/components/skeleton";
import { useSavedQuery } from "@/hooks/use-query";
import { RootLayout } from "@/layouts/root-layout";
import { FunctionComponent } from "preact";
import { RoutableProps, route } from "preact-router";

export const Saved: FunctionComponent<RoutableProps> = ({}) => {
  const { data, error, isLoading } = useSavedQuery();

  if (error) {
    route("/login", true);
  }

  const content = isLoading
    ? masonrySkeleton
    : data?.posts?.map((post) => <MasonryPost key={post.id} {...post} />);
  return (
    <RootLayout title={`${data?.posts?.length ?? 0} saved post(s)`}>
      {content}
    </RootLayout>
  );
};
