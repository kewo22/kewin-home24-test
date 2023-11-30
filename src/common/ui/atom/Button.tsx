import React, { forwardRef, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  customClass?: string;
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "outline" | "primary";
  badgeValue?: string;
  icon?: any;
  idDisabled?: boolean;
  onClick?: () => void;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props: any, ref) => {
  const {
    children,
    customClass = "",
    variant = "",
    size = "xs",
    badgeValue = "",
    icon,
    idDisabled = false,
  } = props;

  const { onClick } = props;

  const btnContentRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (badgeValue && btnContentRef && btnContentRef.current) {
      btnContentRef.current.classList.add("btn-badge");
      btnContentRef.current.setAttribute("data-value", badgeValue);
    }
  }, [badgeValue]);

  const baseClass = "relative w-fit";
  let className = "";
  // let iconClass = "";
  const disabledClass =
    "disabled:bg-slate-900 disabled:cursor-default disabled:text-white/50";

  switch (size) {
    case "xs":
      className = twMerge("px-2 py-2 text-xs sm:text-base");
      // iconClass = "scale-90 sm:scale-95";
      break;
    case "sm":
      className = twMerge("px-5 py-3 text-sm sm:text-base");
      // iconClass = "scale-95 sm:scale-100";
      break;
    case "md":
      className = twMerge("px-6 py-4 text-base");
      // iconClass = "scale-100 sm:scale-100";
      break;
    case "lg":
      className = twMerge("px-7 py-5 text-xl");
      // iconClass = "scale-100";
      break;
    default:
      className = twMerge("px-3 py-2 text-xs");
      // iconClass = "scale-75 sm:scale-90";
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

  if (badgeValue) {
    return (
      <button className={mergedClassName} disabled={idDisabled} ref={ref}>
        <span ref={btnContentRef} className="relative flex flex-row">
          {/* {icon && <span className={iconClass}>{icon}</span>} */}
          {icon && icon}
          {children}
        </span>
      </button>
    );
  }

  return (
    <button
      className={mergedClassName}
      onClick={onClick}
      disabled={idDisabled}
      ref={ref}
    >
      <span className="relative flex flex-row">
        {/* {icon && <span className={iconClass}>{icon}</span>} */}
        {icon && icon}
        {children}
      </span>
    </button>
  );
});

export default Button;
