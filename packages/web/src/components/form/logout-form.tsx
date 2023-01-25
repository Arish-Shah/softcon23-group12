import { useLogoutMutation } from "@/hooks/use-mutation";
import { route } from "preact-router";
import { JSXInternal } from "preact/src/jsx";

export const LogoutForm = () => {
  const { mutate, data } = useLogoutMutation();

  if (data?.ok) route("/login");

  const handleLogout: JSXInternal.MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    event.preventDefault();
    mutate();
  };

  return (
    <button
      className="font-bold mt-4 bg-gray-800 text-white px-4 py-2 rounded-md"
      onClick={handleLogout}
    >
      confirm
    </button>
  );
};
