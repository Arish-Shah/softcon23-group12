"use client";

import { postUpdatePassword } from "@/util/put";
import { FormEventHandler, useState } from "react";
import { toast } from "react-hot-toast";
import { Button } from "../auth/button";
import { Input } from "../auth/input";

type UpdatePasswordFormProps = {};

export function UpdatePasswordForm({}: UpdatePasswordFormProps) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await postUpdatePassword({
      password,
      confirmPassword,
      oldPassword,
    });
    if (!res.ok) toast.error(res.message as string);
    else toast.success(res.message as string);

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="my-4">
      <Input
        type="password"
        id="password"
        label="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={loading}
        autoFocus
      />
      <Input
        type="password"
        id="confirm-password"
        label="retype password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        disabled={loading}
      />
      <Input
        type="password"
        id="old-password"
        label="old password"
        value={oldPassword}
        onChange={(e) => setOldPassword(e.target.value)}
        disabled={loading}
      />
      <Button type="submit" loading={loading}>
        submit
      </Button>
    </form>
  );
}
