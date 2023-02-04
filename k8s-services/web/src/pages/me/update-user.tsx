import { UpdateUserForm } from "@/components/form/update-user-form";
import { authSkeleton } from "@/components/skeleton";
import { useMeQuery } from "@/hooks/use-query";
import { UserLayout } from "@/layouts/user-layout";
import type { FunctionComponent } from "preact";
import type { RoutableProps } from "preact-router";

export const UpdateUser: FunctionComponent<RoutableProps> = () => {
  const { data, isLoading } = useMeQuery();

  const content =
    !isLoading && data?.ok ? (
      <UpdateUserForm username={data.user!.username} name={data.user!.name} />
    ) : (
      authSkeleton
    );

  return (
    <UserLayout>
      <h2 class="text-2xl font-bold">update user details</h2>
      {content}
    </UserLayout>
  );
};
