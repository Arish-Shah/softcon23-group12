"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function UserNav() {
  const path = usePathname();

  const links = [
    { name: "update details", href: "/me/update" },
    { name: "update password", href: "/me/password" },
    { name: "logout", href: "/me/logout" },
  ];

  return (
    <div className="flex flex-col w-0 sm:w-52">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`bg-white font-bold bg-opacity-0 py-2 px-4 mb-1 rounded-md hidden sm:block ${
            link.href === path
              ? "bg-opacity-10 hover:bg-opacity-10"
              : "hover:bg-opacity-5"
          }`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
