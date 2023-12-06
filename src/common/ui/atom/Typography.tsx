import React, { ElementType, forwardRef } from "react";

import { twMerge } from "tailwind-merge";

type Variant = "span";

interface TypographyProps {
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
  ref?: any;
}

const tags: Record<Variant, ElementType> = {
  span: "span",
};

const typographyClasses = {
  span: "text-sm lg:text-base",
};

const sizes: Record<Variant, string> = {
  span: typographyClasses.span,
};

const Typography = forwardRef<HTMLButtonElement, TypographyProps>(
  (props: TypographyProps, ref) => {
    const { variant = "span", children, className } = props;

    const sizeClasses = sizes[variant];
    const Tag = tags[variant];
    const mergedClassName = twMerge(sizeClasses, className);

    return (
      <Tag className={mergedClassName} ref={ref}>
        {children}
      </Tag>
    );
  }
);

export default Typography;
