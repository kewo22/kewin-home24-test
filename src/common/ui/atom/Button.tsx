import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  customClass?: string;
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "outline" | "primary";
  testid?: string;
  onClick?: () => void;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props: any, ref) => {
  const {
    children,
    customClass = "",
    variant = "",
    size = "xs",
    testid = "",
    idDisabled = false,
  } = props;

  const { onClick } = props;

  const baseClass = "relative w-fit";
  let className = "";
  const disabledClass =
    "disabled:bg-slate-900 disabled:cursor-default disabled:text-white/50 rounded-md";

  switch (size) {
    case "xs":
      className = twMerge("px-2 py-2 text-xs sm:text-base");
      break;
    case "sm":
      className = twMerge("px-5 py-3 text-sm sm:text-base");
      break;
    case "md":
      className = twMerge("px-6 py-4 text-base");
      break;
    case "lg":
      className = twMerge("px-7 py-5 text-xl");
      break;
    default:
      className = twMerge("px-3 py-2 text-xs");
      break;
  }

  switch (variant) {
    case "outline":
      className = twMerge(className, "bg-transparent border border-slate-300");
      break;
    case "primary":
      className = twMerge(
        className,
        "bg-primary text-white border border-slate-300"
      );
      break;
  }

  const mergedClassName = twMerge(
    baseClass,
    disabledClass,
    className,
    customClass
  );

  return (
    <button
      className={mergedClassName}
      onClick={onClick}
      disabled={idDisabled}
      data-testid={testid}
      ref={ref}
    >
      <span className="relative flex flex-row">{children}</span>
    </button>
  );
});

export default Button;
