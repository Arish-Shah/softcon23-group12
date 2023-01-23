"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { AuthInput } from "@/types";
import { postLogin, postRegister } from "@/util/post";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";
import toast from "react-hot-toast";

type AuthFormProps = {
  type: "login" | "register";
};

export function AuthForm({ type }: AuthFormProps) {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault();
    setIsFetching(true);

    const input: AuthInput = { username, password };
    const response =
      type === "login" ? await postLogin(input) : await postRegister(input);
    if (response.ok) router.push("/");
    else toast.error(response.error as string);

    setIsFetching(false);
  };

  return (
    <form onSubmit={handleSubmit} className="my-4">
      <Input
        type="text"
        id="username"
        label="username"
        placeholder="luke"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        disabled={isFetching}
        autoFocus
      />
      <Input
        type="password"
        id="password"
        label="password"
        placeholder="•••••"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={isFetching}
      />
      <Button type="submit" loading={isFetching}>
        continue
      </Button>
    </form>
  );
}
