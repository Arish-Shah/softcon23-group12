import { FormEventHandler, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useLoginMutation, useRegisterMutation } from "../hooks/useMutation";
import { useMeQuery } from "../hooks/useQuery";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

type AuthFormProps = {
  hook: typeof useLoginMutation | typeof useRegisterMutation;
};

export const AuthForm = ({ hook: useAuthHook }: AuthFormProps) => {
  const { trigger, isMutating } = useAuthHook();
  const { data } = useMeQuery();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (data?.ok) navigate("/", { replace: true });
  }, [data]);

  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault();
    const data = await trigger({ username, password });
    if (data) {
      if (data.ok) {
        toast.success(data.message);
        navigate("/", { replace: true });
      } else toast.error(data.message);
    }
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
        disabled={isMutating}
        autoFocus
      />
      <Input
        type="password"
        id="password"
        label="password"
        placeholder="•••••"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={isMutating}
      />
      <Button type="submit" loading={isMutating}>
        continue
      </Button>
    </form>
  );
};
