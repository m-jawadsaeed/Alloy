import {
  forwardRef,
  type InputHTMLAttributes,
} from "react";

const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className = "", ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={`
        w-full
        rounded-xl
        border
        border-slate-700
        bg-slate-800
        px-4
        py-3
        text-white
        placeholder:text-slate-500
        outline-none
        transition
        focus:border-indigo-500
        focus:ring-2
        focus:ring-indigo-500/20
        ${className}
      `}
      {...props}
    />
  );
});

Input.displayName = "Input";

export default Input;