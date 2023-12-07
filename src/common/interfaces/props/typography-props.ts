export type Variant = "span" | "lg" | "xl";

export interface TypographyProps {
    text: string;
    variant?: Variant;
    className?: string;
    ref?: any;
}