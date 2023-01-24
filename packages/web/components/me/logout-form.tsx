"use client";

import { postLogout } from "@/util/post";
import { useRouter } from "next/navigation";
import type { MouseEventHandler } from "react";
import { toast } from "react-hot-toast";

export function LogoutForm() {
  const router = useRouter();

  const handleLogout: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();

    const res = await postLogout();
    if (res.ok) {
      toast.success(res.message as string);
      router.push("/login");
    } else toast.error(res.message as string);
  };

  return (
    <button
      className="font-bold mt-4 bg-gray-800 text-white px-4 py-2 rounded-md"
      onClick={handleLogout}
    >
      confirm
    </button>
  );
}
