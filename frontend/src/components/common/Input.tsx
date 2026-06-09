import { forwardRef, InputHTMLAttributes } from "react";

import clsx from "clsx";

type Props = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={clsx(
          "w-full rounded-xl border",
          "border-zinc-200",
          "bg-white",
          "px-4 py-3",
          "outline-none",
          "focus:ring-2",
          "focus:ring-blue-500",
          className,
        )}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

export default Input;
