import { Feed } from "@/components/feed";
import { useFeedQuery } from "@/hooks/useQuery";
import RootLayout from "@/layouts/root";

const Home = () => {
  const { data, isLoading } = useFeedQuery();

  return (
    <RootLayout>
      <Feed data={data} isLoading={isLoading} />
    </RootLayout>
  );
};

export default Home;
