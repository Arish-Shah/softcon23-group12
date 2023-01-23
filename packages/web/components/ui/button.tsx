import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children: React.ReactNode;
  loading?: boolean;
  variant?: "primary" | "secondary";
};

export const Button = ({
  children,
  loading = false,
  variant = "primary",
  ...props
}: ButtonProps) => {
  const content = loading ? spinner : children;
  const colors =
    variant === "primary"
      ? "bg-gray-800 text-white focus:ring-gray-300 disabled:bg-gray-600"
      : "bg-white text-gray-800 focus:ring-gray-300 disabled:bg-gray-200";

  return (
    <div className="mt-4">
      <button
        className={`${colors} w-full h-10 font-bold p-2 rounded-md flex items-center justify-center focus:ring disabled:cursor-not-allowed`}
        disabled={loading}
        {...props}
      >
        {content}
      </button>
    </div>
  );
};

const spinner = (
  <svg
    className="animate-spin h-5 w-5 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);
