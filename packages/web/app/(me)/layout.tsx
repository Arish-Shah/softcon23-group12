import { getMe } from "@/util/get";
import { headers } from "next/headers";
import { Navbar } from "@/components/navbar";
import { UserNav } from "@/components/user-nav";
import { redirect } from "next/navigation";

type MeLayoutProps = {
  children: React.ReactNode;
};

export default async function MeLayout({ children }: MeLayoutProps) {
  const res = await getMe(headers().get("cookie"));
  if (!res.ok) redirect("/login");

  return (
    <div className="container mx-auto p-3">
      <Navbar username={res.user?.username} />
      <div className="flex">
        <UserNav />
        <div className="sm:ml-3 p-3 w-full sm:max-w-md bg-white text-gray-800 rounded-md drop-shadow">
          {children}
        </div>
      </div>
    </div>
  );
}
