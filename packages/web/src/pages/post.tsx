import { postSkeleton } from "@/components/skeleton";
import { useSaveMutation } from "@/hooks/use-mutation";
import { usePostQuery } from "@/hooks/use-query";
import { RootLayout } from "@/layouts/root-layout";
import { Post as PostType } from "@/types";
import { redditUrl } from "@/utils/constants";
import type { FunctionComponent } from "preact";
import { Link, RoutableProps } from "preact-router";

export const Post: FunctionComponent<RoutableProps> = () => {
  const id = window.location.pathname.replace("/post/", "");
  const { data, isLoading } = usePostQuery(id);
  const { mutate } = useSaveMutation();

  const handleSave = (post: PostType) => {
    mutate({ id: post.id, sub: post.sub, title: post.title, url: post.url });
  };

  const content = isLoading ? (
    postSkeleton
  ) : data?.post ? (
    <div class="text-center">
      <img src={data.post.url} alt={data.post.title} class="mx-auto" />
      <div class="flex justify-between items-center my-4">
        <div>
          posted in{" "}
          <Link
            href={`/sub/${data.post.sub}`}
            class="font-bold hover:underline"
          >
            {data.post.sub}
          </Link>{" "}
          by{" "}
          <Link
            href={`${redditUrl}/u/${data.post.author}`}
            target="_blank"
            rel="noopener noreferrer"
            class="font-bold hover:underline"
          >
            @{data.post.author}
          </Link>{" "}
          /{" "}
          <Link
            href={redditUrl + data.post.permalink}
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗
          </Link>{" "}
          /{" "}
          <Link href={data.post.url} target="_blank" rel="noopener noreferrer">
            📥
          </Link>
        </div>
        <button
          class="font-bold bg-white text-gray-800 px-3 py-1 rounded-md"
          onClick={() => handleSave(data.post!)}
        >
          {data.post.saved ? "unsave" : "save"}
        </button>
      </div>
    </div>
  ) : null;

  return (
    <RootLayout title={data?.post?.title} columns={false}>
      {content}
    </RootLayout>
  );
};
