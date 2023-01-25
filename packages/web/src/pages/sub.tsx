import { MasonryPost } from "@/components/masonry-post";
import { masonrySkeleton } from "@/components/skeleton";
import { useFeedQuery } from "@/hooks/use-query";
import { RootLayout } from "@/layouts/root-layout";
import { FunctionComponent } from "preact";
import { RoutableProps, route } from "preact-router";
import { toast } from "react-hot-toast";

export const Sub: FunctionComponent<RoutableProps> = ({}) => {
  const sub = window.location.pathname.replace("/sub/", "");
  const { data, error, isLoading } = useFeedQuery(sub);

  if (error) {
    toast.error(error.message);
    route("/", true);
  }

  const content = isLoading
    ? masonrySkeleton
    : data?.posts?.map((post) => <MasonryPost key={post.id} {...post} />);
  return <RootLayout title={sub}>{content}</RootLayout>;
};
