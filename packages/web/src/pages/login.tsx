import { AuthForm } from "@/components/auth-form";
import { useLoginMutation } from "@/hooks/use-mutation";
import { AuthLayout } from "@/layouts/auth-layout";
import { FunctionComponent } from "preact";
import { Link, RoutableProps } from "preact-router";

export const Login: FunctionComponent<RoutableProps> = ({}) => {
  return (
    <AuthLayout>
      <div class="bg-white text-gray-800 w-full max-w-sm rounded-md p-4 mt-4 drop-shadow">
        <h2 class="text-2xl font-bold">login</h2>
        <AuthForm hook={useLoginMutation} />
      </div>
      <div class="mt-2 text-sm">
        no account yet?{" "}
        <Link href="/register" class="underline">
          register
        </Link>
      </div>
    </AuthLayout>
  );
};
