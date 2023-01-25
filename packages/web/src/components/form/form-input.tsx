import { FunctionComponent } from "preact";
import { useEffect, useRef } from "preact/hooks";
import type { JSXInternal } from "preact/src/jsx";

type FormInputProps = JSXInternal.HTMLAttributes<HTMLInputElement> & {
  id: string;
  label: string;
};

export const FormInput: FunctionComponent<FormInputProps> = ({
  id,
  label,
  autoFocus,
  ...props
}) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus) ref.current?.focus();
  }, []);

  return (
    <div class="mt-2">
      <label htmlFor={id} class="text-sm block mb-1">
        {label}
      </label>
      <input
        id={id}
        class="w-full p-1.5 rounded-md outline-none border-2 focus:border-gray-400 transition-all focus:ring focus:ring-gray-300 disabled:bg-gray-200"
        ref={ref}
        {...props}
      />
    </div>
  );
};
