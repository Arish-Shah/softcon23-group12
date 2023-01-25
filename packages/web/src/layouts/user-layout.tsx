import { UserNav } from "@/components/user-nav";
import { Navbar } from "@/components/navbar";
import { useMeQuery } from "@/hooks/use-query";
import { FunctionComponent } from "preact";
import { route } from "preact-router";

export const UserLayout: FunctionComponent = ({ children }) => {
  const { data, error, isLoading } = useMeQuery();

  if (error) {
    route("/login", true);
    return null;
  }

  return (
    <div class="container mx-auto p-3">
      <Navbar username={data?.user?.username} isLoading={isLoading} />
      <div class="flex">
        <UserNav />
        <div class="sm:ml-3 p-3 w-full sm:max-w-md bg-white text-gray-800 rounded-md drop-shadow">
          {children}
        </div>
      </div>
    </div>
  );
};
