"use client";

import { postUpdateUser } from "@/util/put";
import { FormEventHandler, useState } from "react";
import { toast } from "react-hot-toast";
import { Button } from "../auth/button";
import { Input } from "../auth/input";

type UpdateUserFormProps = {
  username: string;
  name: string;
};

export function UpdateUserForm({
  username: defaultUsername,
  name: defaultName,
}: UpdateUserFormProps) {
  const [username, setUsername] = useState(defaultUsername);
  const [name, setName] = useState(defaultName);
  const [loading, setLoading] = useState(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await postUpdateUser({ name, username });
    if (!res.ok) toast.error(res.message as string);
    else toast.success(res.message as string);

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="my-4">
      <Input
        type="text"
        id="username"
        label="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        disabled={loading}
        autoFocus
      />
      <Input
        type="text"
        id="name"
        label="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={loading}
      />
      <Button type="submit" loading={loading}>
        submit
      </Button>
    </form>
  );
}
