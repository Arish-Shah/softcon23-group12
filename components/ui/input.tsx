import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  useEffect,
  useRef,
} from "react";

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  id: string;
  label: string;
};

export const Input = ({ id, label, autoFocus, ...props }: InputProps) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus) ref.current?.focus();
  }, []);

  return (
    <div className="mt-2">
      <label htmlFor={id} className="text-sm block mb-1">
        {label}
      </label>
      <input
        id={id}
        className="w-full p-1.5 rounded-md outline-none border-2 focus:border-gray-400 transition-all focus:ring focus:ring-gray-300 disabled:bg-gray-200"
        ref={ref}
        {...props}
      />
    </div>
  );
};
