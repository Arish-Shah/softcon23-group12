import { Navbar } from "@/components/navbar";
import { useMeQuery } from "@/hooks/use-query";
import type { FunctionComponent } from "preact";
import { useEffect, useRef } from "preact/hooks";

type RootLayoutProps = {
  title?: string;
  columns?: boolean;
  onReachedBottom?: () => void;
};

export const RootLayout: FunctionComponent<RootLayoutProps> = ({
  title,
  columns = true,
  onReachedBottom,
  children,
}) => {
  const { data, isLoading } = useMeQuery();
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (onReachedBottom) {
      const observer = new IntersectionObserver(onReachedBottom);
      if (bottomRef.current) observer.observe(bottomRef.current);
      return () => {
        if (bottomRef.current) observer.unobserve(bottomRef.current);
      };
    }
  }, []);

  return (
    <div class="container mx-auto p-3">
      <Navbar username={data?.user?.username} isLoading={isLoading} />
      {title && <h1 class="text-3xl font-bold mt-7 mb-10">{title}</h1>}
      {columns ? (
        <div class="columns-2 lg:columns-3 relative">{children}</div>
      ) : (
        children
      )}
      <footer class="mt-10 mb-8 text-center" ref={bottomRef}>
        v1 / software containerization v1 / group 48
      </footer>
    </div>
  );
};
