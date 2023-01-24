import { AuthForm } from "@/components/auth-form";
import Link from "next/link";
import { Fragment } from "react";

export default function Register() {
  return (
    <Fragment>
      <div className="bg-white text-gray-800 w-full max-w-sm rounded-md p-4 mt-4 drop-shadow">
        <h2 className="text-2xl font-bold">register</h2>
        <AuthForm type="register" />
      </div>
      <div className="mt-2 text-sm">
        already have an account?{" "}
        <Link href="/login" className="underline">
          login
        </Link>
      </div>
    </Fragment>
  );
}
