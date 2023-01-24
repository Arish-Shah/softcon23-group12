import { LogoutForm } from "@/components/me/logout-form";
import { getMe } from "@/util/get";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Fragment } from "react";

export default async function Logout() {
  const res = await getMe(headers().get("cookie"));
  if (!res.ok) redirect("/login");

  return (
    <Fragment>
      <h2 className="text-2xl font-bold">are you sure?</h2>
      <LogoutForm />
    </Fragment>
  );
}
