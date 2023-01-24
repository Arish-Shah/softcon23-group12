import { UpdatePasswordForm } from "@/components/me/update-password-form";
import { getMe } from "@/util/get";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Fragment } from "react";

export default async function UpdatePassword() {
  const res = await getMe(headers().get("cookie"));
  if (!res.ok) redirect("/login");

  return (
    <Fragment>
      <h2 className="text-2xl font-bold">update your password</h2>
      <UpdatePasswordForm />
    </Fragment>
  );
}
