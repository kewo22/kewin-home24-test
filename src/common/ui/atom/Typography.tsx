import React, { ElementType, forwardRef } from "react";

import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";

type Variant = "span" | "lg" | "xl";

interface TypographyProps {
  text: string;
  variant?: Variant;
  className?: string;
  ref?: any;
}

const tags: Record<Variant, ElementType> = {
  span: "span",
  lg: "p",
  xl: "p",
};

const typographyClasses = {
  span: "text-sm lg:text-base",
  lg: "text-base lg:text-lg xl:text-xl",
  xl: "text-base lg:text-xl xl:text-4xl",
};

const sizes: Record<Variant, string> = {
  span: typographyClasses.span,
  lg: typographyClasses.lg,
  xl: typographyClasses.xl
};

const Typography = forwardRef<HTMLButtonElement, TypographyProps>(
  (props: TypographyProps, ref) => {
    const { variant = "span", className, text } = props;

    const { t } = useTranslation();

    const sizeClasses = sizes[variant];
    const Tag = tags[variant];
    const mergedClassName = twMerge(sizeClasses, className);

    return (
      <Tag className={mergedClassName} ref={ref}>
        {t(text)}
      </Tag>
    );
  }
);

export default Typography;
