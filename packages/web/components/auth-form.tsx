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
  const [loading, setLoading] = useState(false);

  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    const input: AuthInput = { username, password };
    const res =
      type === "login" ? await postLogin(input) : await postRegister(input);
    if (res.ok) {
      toast.success(res.message as string);
      router.push("/");
    } else toast.error(res.message as string);

    setLoading(false);
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
        disabled={loading}
        autoFocus
      />
      <Input
        type="password"
        id="password"
        label="password"
        placeholder="•••••"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={loading}
      />
      <Button type="submit" loading={loading}>
        continue
      </Button>
    </form>
  );
}
