import { useLoaderData } from "react-router-dom";
import { usePostQuery } from "../hooks/useQuery";

const Post = () => {
  const id = useLoaderData() as string;
  // const { data, isLoading } = usePostQuery(id);

  let content = null;

  content = skeleton;

  // if (isLoading) content = skeleton;
  // else if (data?.ok) {
  //   content = <div></div>;
  // }

  return (
    <div className="absolute top-0 left-0 bottom-0 right-0 m-3">{content}</div>
  );
};

const skeleton = (
  <div className="animate-pulse">
    <div className="bg-gray-700 h-4 w-7/12 rounded-md"></div>
    <div className="bg-gray-700 h-4 w-5/12 rounded-md mt-3"></div>
  </div>
);

export default Post;
