import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export default function Button({ children, loading, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      disabled={loading || props.disabled}
      className="
        rounded-xl
        bg-black
        px-4
        py-3
        text-white
        transition
        disabled:opacity-50
      "
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
