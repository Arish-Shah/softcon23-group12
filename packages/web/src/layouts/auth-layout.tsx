import { authSkeleton } from "@/components/skeleton";
import { useMeQuery } from "@/hooks/use-query";
import type { FunctionComponent } from "preact";
import { Link, route } from "preact-router";

export const AuthLayout: FunctionComponent = ({ children }) => {
  const { data, isLoading } = useMeQuery();

  if (data) {
    route("/", true);
    return null;
  }

  const content = isLoading ? authSkeleton : children;

  return (
    <div class="min-h-screen flex flex-col items-center justify-center px-3">
      <Link href="/" class="text-2xl font-bold">
        scrolller
      </Link>
      {content}
    </div>
  );
};
