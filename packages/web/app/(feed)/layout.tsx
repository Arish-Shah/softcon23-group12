import { getMe } from "@/util/get";
import { headers } from "next/headers";
import { Navbar } from "@/components/navbar";

type FeedLayoutProps = {
  children: React.ReactNode;
};

export default async function FeedLayout({ children }: FeedLayoutProps) {
  const res = await getMe(headers().get("cookie"));

  return (
    <div className="container mx-auto p-3">
      <Navbar username={res.user?.username} />
      <div className="columns-2 lg:columns-3 relative">{children}</div>
    </div>
  );
}
