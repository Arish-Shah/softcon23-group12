import { Toast } from "@/components/toast";
import { getMe } from "@/util/get";
import Link from "next/link";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

type AuthLayoutProps = {
  children: React.ReactNode;
};

export default async function AuthLayout({ children }: AuthLayoutProps) {
  const res = await getMe(headers().get("cookie"));
  if (res.ok) redirect("/");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-3">
      <Link href="/" className="text-2xl font-bold">
        scrolller
      </Link>
      {children}
      <Toast />
    </div>
  );
}
