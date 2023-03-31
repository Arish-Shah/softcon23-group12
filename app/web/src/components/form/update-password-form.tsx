import { useUpdatePasswordMutation } from "@/hooks/use-mutation";
import type { JSXInternal } from "preact/src/jsx";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

type UpdatePasswordFormProps = {};

export const UpdatePasswordForm = ({}: UpdatePasswordFormProps) => {
  const { mutate, isLoading } = useUpdatePasswordMutation();

  const handleSubmit: JSXInternal.GenericEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    mutate({
      password: event.currentTarget.password.value,
      confirmPassword: event.currentTarget.confirmPassword.value,
      oldPassword: event.currentTarget.oldPassword.value,
    });
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} class="my-4">
      <Input
        type="password"
        id="password"
        label="new password"
        name="password"
        disabled={isLoading}
        autoFocus
      />
      <Input
        type="password"
        id="confirm-password"
        label="retype new password"
        name="confirmPassword"
        disabled={isLoading}
      />
      <Input
        type="password"
        id="old-password"
        label="current password"
        name="oldPassword"
        disabled={isLoading}
      />
      <Button type="submit" isLoading={isLoading}>
        submit
      </Button>
    </form>
  );
};
