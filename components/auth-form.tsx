"use client";

import { Input } from "@/components/ui/input";
import { FormEventHandler, useState } from "react";
import { Button } from "./ui/button";

export const AuthForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    console.log({ username, password });
    setLoading((loading) => !loading);
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
