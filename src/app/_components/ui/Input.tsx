import { cn } from "./utils";
import * as React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ className, ...props }, ref) => (
    <div className="flex flex-col gap-1 w-full">
      <label className=" font-medium text-slate-700">
        {props.label}
      </label>
      <input
        ref={ref}
        className={cn(
          "border border-slate-300 outline-none rounded-md shadow-sm focus:border-[#333333] ring-black w-full p-2",
          className,
        )}
        {...props}
      />
      <p className="text-xs text-red-500">{props.error}</p>
    </div>
  ),
);
