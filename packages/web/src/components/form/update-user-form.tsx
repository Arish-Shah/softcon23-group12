import { useUpdateUserMutation } from "@/hooks/use-mutation";
import type { JSXInternal } from "preact/src/jsx";
import { toast } from "react-hot-toast";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

type UpdateUserFormProps = {
  username: string;
  name: string;
};

export const UpdateUserForm = ({ username, name }: UpdateUserFormProps) => {
  const { mutate, data, error, isLoading } = useUpdateUserMutation();

  if (data?.ok) toast.success(data.message);
  if (error) toast.error(error.message);

  const handleSubmit: JSXInternal.GenericEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    mutate({
      username: event.currentTarget.username.value,
      name: event.currentTarget.fullname.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} class="my-4">
      <Input
        type="text"
        id="username"
        label="new username"
        name="username"
        value={username}
        disabled={isLoading}
        autoFocus
      />
      <Input
        type="text"
        id="name"
        label="your name"
        name="fullname"
        value={name}
        disabled={isLoading}
      />
      <Button type="submit" isLoading={isLoading}>
        submit
      </Button>
    </form>
  );
};
