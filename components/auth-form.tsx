"use client";

import { Input } from "@/components/ui/input";
import { FormEventHandler, useState } from "react";
import { Button } from "./ui/button";

type AuthFormProps = {
  url: string;
};

export const AuthForm = ({ url }: AuthFormProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });
    const json = await response.json();
    console.log(json);
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
};
