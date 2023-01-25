import { LogoutForm } from "@/components/form/logout-form";
import { UserLayout } from "@/layouts/user-layout";
import type { FunctionComponent } from "preact";
import type { RoutableProps } from "preact-router";

export const Logout: FunctionComponent<RoutableProps> = () => {
  return (
    <UserLayout>
      <h2 class="text-2xl font-bold">are you sure?</h2>
      <LogoutForm />
    </UserLayout>
  );
};
