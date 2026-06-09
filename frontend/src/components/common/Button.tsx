import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  children: ReactNode;
}

export default function Button({
  loading,
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={loading}
      className={`
        flex
        items-center
        justify-center
        rounded-xl
        bg-indigo-600
        px-5
        py-3
        font-medium
        text-white
        transition
        hover:bg-indigo-700
        disabled:cursor-not-allowed
        disabled:opacity-60
        ${className}
      `}
      {...props}
    >
      {loading
        ? "Please wait..."
        : children}
    </button>
  );
}