import { Feed } from "@/components/feed";
import { useSubQuery } from "@/hooks/useQuery";
import RootLayout from "@/layouts/root";
import { useLoaderData } from "react-router-dom";

const Sub = () => {
  const name = useLoaderData() as string;
  const { data, isLoading } = useSubQuery(name);

  return (
    <RootLayout>
      <h1 className="text-4xl font-bold mb-10">[ r/{name} ]</h1>
      <Feed data={data} isLoading={isLoading} />
    </RootLayout>
  );
};

export default Sub;
