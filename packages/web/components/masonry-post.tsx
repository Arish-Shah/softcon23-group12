"use client";

import { FeedPost } from "@/types";
import Link from "next/link";
import { MouseEventHandler } from "react";

type MasonryPostProps = FeedPost & {};

export function MasonryPost({ id, title, url, sub, saved }: MasonryPostProps) {
  const handleSave: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    console.log("save this");
  };

  return (
    <Link href={`/post/${id}`} key={id} className="block relative mb-5">
      <div className="absolute top-0 bottom-0 left-0 right-0 opacity-0 hover:opacity-100 transition">
        <div className="absolute flex justify-between bottom-4 left-4 right-4">
          <object>
            <Link href={`/${sub}`} className="text-sm font-bold">
              {sub}
            </Link>
          </object>
          <button
            className="font-bold bg-gray-800 px-3 py-1 rounded-md"
            onClick={handleSave}
          >
            {saved ? "unsave" : "save"}
          </button>
        </div>
      </div>
      <img src={url} alt={title} draggable="false" className="rounded-md" />
    </Link>
  );
}
