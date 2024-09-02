import { cn } from "./utils";
import * as React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded",
        className,
      )}
      {...props}
    >
      {props.children}
    </button>
  ),
);
