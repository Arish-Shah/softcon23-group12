import { Navbar } from "@/components/navbar";
import { useMeQuery } from "@/hooks/use-query";
import { FunctionComponent } from "preact";

type RootLayoutProps = {
  title?: string;
  columns?: boolean;
};

export const RootLayout: FunctionComponent<RootLayoutProps> = ({
  title,
  columns = true,
  children,
}) => {
  const { data, isLoading } = useMeQuery();

  return (
    <div class="container mx-auto p-3">
      <Navbar username={data?.user?.username} isLoading={isLoading} />
      {title && <h1 class="text-3xl font-bold mt-7 mb-10">{title}</h1>}
      {columns ? (
        <div class="columns-2 lg:columns-3 relative">{children}</div>
      ) : (
        children
      )}
    </div>
  );
};
