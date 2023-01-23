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
      <Navbar username={res.username} />
      <div className="columns-2 lg:columns-3">{children}</div>
      <div className="text-center text-sm my-8">
        software containerization / group 12
      </div>
    </div>
  );
}
