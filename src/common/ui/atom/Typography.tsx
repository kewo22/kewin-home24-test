import React, { ElementType, forwardRef } from "react";

import { useTranslation, Trans } from "react-i18next";
import { twMerge } from "tailwind-merge";

type Variant = "span";

interface TypographyProps {
  text: string;
  variant?: Variant;
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
    const { variant = "span", className, text } = props;

    const { t, i18n } = useTranslation();

    const sizeClasses = sizes[variant];
    const Tag = tags[variant];
    const mergedClassName = twMerge(sizeClasses, className);

    return (
      <Tag className={mergedClassName} ref={ref}>
        {/* {t("wow")} */}
        {/* <Trans t={t}>Hello World</Trans> */}
        {t(text)}
      </Tag>
    );
  }
);

export default Typography;
