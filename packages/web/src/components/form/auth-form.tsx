import { useLoginMutation, useRegisterMutation } from "@/hooks/use-mutation";
import { route } from "preact-router";
import type { JSXInternal } from "preact/src/jsx";
import { toast } from "react-hot-toast";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

type AuthFormProps = {
  hook: typeof useLoginMutation | typeof useRegisterMutation;
};

export const AuthForm = ({ hook: useAuthMutation }: AuthFormProps) => {
  const { mutate, data, error, isLoading } = useAuthMutation();

  if (error) toast.error(error.message);
  if (data?.ok) {
    toast.success(data.message);
    route("/", true);
  }

  const handleSubmit: JSXInternal.GenericEventHandler<HTMLFormElement> = (
    event
  ) => {
    event.preventDefault();
    mutate({
      username: event.currentTarget.username.value,
      password: event.currentTarget.password.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} class="my-4">
      <Input
        type="text"
        id="username"
        label="username"
        placeholder="luke"
        name="username"
        disabled={isLoading}
        autoFocus
      />
      <Input
        type="password"
        id="password"
        label="password"
        placeholder="•••••"
        name="password"
        disabled={isLoading}
      />
      <Button type="submit" isLoading={isLoading}>
        continue
      </Button>
    </form>
  );
};
