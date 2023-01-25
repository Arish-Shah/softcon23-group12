import { FeedPost, SaveInput } from "@/types";
import { Link } from "preact-router";
import type { JSXInternal } from "preact/src/jsx";

type MasonryPostProps = FeedPost & {};

export function MasonryPost({ id, title, url, sub, saved }: MasonryPostProps) {
  const handleSave: JSXInternal.MouseEventHandler<HTMLButtonElement> = async (
    event
  ) => {
    event.preventDefault();
    const input: SaveInput = { id, title, sub, url };
    console.log(input);
  };

  return (
    <Link href={`/post/${id}`} key={id} class="block relative mb-5">
      <div class="absolute top-0 bottom-0 left-0 right-0 opacity-0 bg-gray-800 hover:opacity-100 hover:bg-opacity-60 transition">
        <div class="absolute flex justify-between bottom-4 left-4 right-4">
          <object>
            <Link href={`/${sub}`} class="text-sm font-bold hover:underline">
              {sub}
            </Link>
          </object>
          <button
            class="font-bold bg-white text-gray-800 px-3 py-1 rounded-md"
            onClick={handleSave}
          >
            {saved ? "unsave" : "save"}
          </button>
        </div>
      </div>
      <img src={url} alt={title} draggable={false} class="rounded-md" />
    </Link>
  );
}
