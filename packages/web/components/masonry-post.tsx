"use client";

import { FeedPost, SaveInput } from "@/types";
import { postSave } from "@/util/post";
import Link from "next/link";
import { MouseEventHandler, useState } from "react";
import { toast } from "react-hot-toast";

type MasonryPostProps = FeedPost & {};

export function MasonryPost({ id, title, url, sub, saved }: MasonryPostProps) {
  const [loading, setLoading] = useState(false);
  const [isSaved, setIsSaved] = useState(saved);

  const handleSave: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    setLoading(true);

    const input: SaveInput = { id, title, sub, url };
    const res = await postSave(input);
    if (!res.ok) toast.error(res.message as string);
    else toast.success(res.message as string);

    setIsSaved((s) => !s);
    setLoading(false);
  };

  return (
    <Link href={`/post/${id}`} key={id} className="block relative mb-5">
      <div className="absolute top-0 bottom-0 left-0 right-0 opacity-0 bg-gray-800 hover:opacity-100 hover:bg-opacity-60 transition">
        <div className="absolute flex justify-between bottom-4 left-4 right-4">
          <object>
            <Link href={`/${sub}`} className="text-sm font-bold">
              {sub}
            </Link>
          </object>
          <button
            className="font-bold bg-white text-gray-800 px-3 py-1 rounded-md"
            onClick={handleSave}
          >
            {isSaved ? "unsave" : "save"}
          </button>
        </div>
      </div>
      <img src={url} alt={title} draggable="false" className="rounded-md" />
    </Link>
  );
}
