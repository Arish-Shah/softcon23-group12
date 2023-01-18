import { Fragment } from "react";
import { useFeedQuery } from "../hooks/useQuery";
import { MasonryPost } from "./masonry-post";

export const Feed = () => {
  const { data, error, isLoading } = useFeedQuery();

  let content;
  if (isLoading) {
    content = skeleton;
  } else if (data?.ok) {
    content = data.posts.map((post) => <MasonryPost key={post.id} {...post} />);
  }

  return (
    <Fragment>
      <div className="columns-2 lg:columns-3">{content}</div>
      <div className="text-center text-sm my-8">
        software containerization / group 12
      </div>
    </Fragment>
  );
};

const skeleton = (
  <div className="animate-pulse">
    {Array.from(Array(8).keys()).map((i) => (
      <div key={i} className="mb-4 bg-gray-700 h-96"></div>
    ))}
  </div>
);
