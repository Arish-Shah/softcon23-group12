import { AuthForm } from "@/components/form/auth-form";
import { useRegisterMutation } from "@/hooks/use-mutation";
import { AuthLayout } from "@/layouts/auth-layout";
import { FunctionComponent } from "preact";
import { Link, RoutableProps } from "preact-router";
import { Fragment } from "preact/jsx-runtime";

export const Register: FunctionComponent<RoutableProps> = ({}) => {
  return (
    <AuthLayout>
      <Fragment>
        <div class="bg-white text-gray-800 w-full max-w-sm rounded-md p-4 mt-4 drop-shadow">
          <h2 class="text-2xl font-bold">register</h2>
          <AuthForm hook={useRegisterMutation} />
        </div>
        <div class="mt-2 text-sm">
          already have an account?{" "}
          <Link href="/login" class="underline">
            login
          </Link>
        </div>
      </Fragment>
    </AuthLayout>
  );
};
