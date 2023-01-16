import { FormEventHandler, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthResponse } from "../types/response";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

type AuthFormProps = {
  url: string;
};

export const AuthForm = ({ url }: AuthFormProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const promise = await fetch(url, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const response: AuthResponse = await promise.json();
    if (response.ok) {
      toast.success(response.message);
      navigate("/", { replace: true });
    } else {
      toast.error(response.message);
    }
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
