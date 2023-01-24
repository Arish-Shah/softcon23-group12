import Link from "next/link";

type NavbarProps = {
  username?: string;
};

export function Navbar({ username }: NavbarProps) {
  const links = username ? (
    <div className="flex">
      <Link href="/saved" className="hover:underline mr-6">
        saved posts
      </Link>
      <Link href="/me/update" className="font-bold">
        @{username}
      </Link>
    </div>
  ) : (
    <Link href="/login" className="hover:underline">
      login
    </Link>
  );

  return (
    <nav className="flex justify-between items-center mt-3 mb-6">
      <Link href="/" className="text-2xl font-bold">
        scrolller
      </Link>
      {links}
    </nav>
  );
}
