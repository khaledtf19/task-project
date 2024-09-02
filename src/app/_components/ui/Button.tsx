import { cn } from "./utils";
import * as React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "bg-[#262626] hover:bg-slate-500 text-white font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded-md w-full",
        className,
      )}
      {...props}
    >
      {props.children}
    </button>
  ),
);
