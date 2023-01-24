import { UpdateUserForm } from "@/components/me/update-user-form";
import { getMe } from "@/util/get";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Fragment } from "react";

export default async function Update() {
  const res = await getMe(headers().get("cookie"));
  if (!res.ok) redirect("/login");

  return (
    <Fragment>
      <h2 className="text-2xl font-bold">update user details</h2>
      <UpdateUserForm username={res.user!.username} name={res.user!.name} />
    </Fragment>
  );
}
