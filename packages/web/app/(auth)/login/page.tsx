import { AuthForm } from "@/components/auth-form";
import Link from "next/link";
import { Fragment } from "react";

export default async function Login() {
  return (
    <Fragment>
      <div className="bg-white text-gray-800 w-full max-w-sm rounded-md p-4 mt-4 drop-shadow">
        <h2 className="text-2xl font-bold">login</h2>
        <AuthForm type="login" />
      </div>
      <div className="mt-2 text-sm">
        no account yet?{" "}
        <Link href="/register" className="underline">
          register
        </Link>
      </div>
    </Fragment>
  );
}
