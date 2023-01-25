import { Link } from "preact-router";
import { linksSkeleton } from "./skeleton";

type NavbarProps = {
  username?: string;
  isLoading: boolean;
};

export const Navbar = ({ username, isLoading }: NavbarProps) => {
  const links = username ? (
    <div class="flex">
      <Link href="/saved" class="hover:underline mr-6">
        saved posts
      </Link>
      <Link href="/me/update" class="font-bold">
        @{username}
      </Link>
    </div>
  ) : isLoading ? (
    linksSkeleton
  ) : (
    <div class="flex">
      <Link href="/login" class="hover:underline mr-1">
        login
      </Link>
      <span>or</span>
      <Link href="/register" class="hover:underline ml-1">
        register
      </Link>
    </div>
  );

  return (
    <nav class="flex justify-between items-center mt-3 mb-6">
      <Link href="/" class="text-2xl font-bold">
        scrolller
      </Link>
      {links}
    </nav>
  );
};
