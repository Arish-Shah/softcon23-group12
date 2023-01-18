import type { MouseEventHandler } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMeQuery } from "../hooks/useQuery";
import type { PostType } from "../types/response";

type MasonryPostProps = PostType & {};

export const MasonryPost = ({
  id,
  url,
  title,
  sub,
  author,
  saved,
}: MasonryPostProps) => {
  const { data } = useMeQuery();
  const navigate = useNavigate();

  const handleSave: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    if (!data?.ok) navigate("/login");
  };

  return (
    <Link to={`/post/${id}`} key={id} className="block relative mb-5">
      <div className="absolute top-0 bottom-0 left-0 right-0 opacity-0 hover:opacity-100 bg-gradient-to-t from-gray-800 transition">
        <div className="absolute bottom-4 left-4">
          <div className="flex items-center">
            <span className="font-bold">r/{sub}</span>
            <span className="mx-2">&middot;</span>
            <span className="text-sm">posted by u/{author}</span>
          </div>
        </div>
        <button
          className="absolute bottom-4 right-4 font-bold"
          onClick={handleSave}
        >
          {saved ? "unsave" : "save"}
        </button>
      </div>
      <img src={url} alt={title} draggable="false" />
    </Link>
  );
};
