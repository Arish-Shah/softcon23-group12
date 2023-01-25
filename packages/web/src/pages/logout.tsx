import { LogoutForm } from "@/components/form/logout-form";
import { UserLayout } from "@/layouts/user-layout";
import { FunctionComponent } from "preact";
import { RoutableProps } from "preact-router";

export const Logout: FunctionComponent<RoutableProps> = () => {
  return (
    <UserLayout>
      <h2 className="text-2xl font-bold">are you sure?</h2>
      <LogoutForm />
    </UserLayout>
  );
};
