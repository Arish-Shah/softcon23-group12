import { UpdatePasswordForm } from "@/components/form/update-password-form";
import { authSkeleton } from "@/components/skeleton";
import { useMeQuery } from "@/hooks/use-query";
import { UserLayout } from "@/layouts/user-layout";
import type { FunctionComponent } from "preact";
import type { RoutableProps } from "preact-router";

export const UpdatePassword: FunctionComponent<RoutableProps> = () => {
  const { data, isLoading } = useMeQuery();

  const content =
    !isLoading && data?.ok ? <UpdatePasswordForm /> : authSkeleton;

  return (
    <UserLayout>
      <h2 class="text-2xl font-bold">update your password</h2>
      {content}
    </UserLayout>
  );
};
