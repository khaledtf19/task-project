import { cn, Spinner } from "./utils";
import * as React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ className, loading, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "bg-[#262626] hover:bg-white hover:text-gray-500 text-white font-semibold  py-2 px-4 border border-slate-500 transition-colors rounded-md w-full flex items-center justify-center",
        className,
      )}
      {...props}
    >
      {loading ? <Spinner className="w-6 h-6" /> : props.children}
    </button>
  ),
);
