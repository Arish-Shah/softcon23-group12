import { Navbar } from "@/components/navbar";
import { useMeQuery } from "@/hooks/use-query";
import { FunctionComponent } from "preact";

export const RootLayout: FunctionComponent = ({ children }) => {
  const { data, isLoading } = useMeQuery();

  return (
    <div class="container mx-auto p-3">
      <Navbar username={data?.user?.username} isLoading={isLoading} />
      <div class="columns-2 lg:columns-3 relative">{children}</div>
    </div>
  );
};
