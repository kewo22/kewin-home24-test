export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    customClass?: string;
    size?: "xs" | "sm" | "md" | "lg";
    variant?: "outline" | "primary";
    testid?: string;
    isDisabled?: boolean;
    onClick?: () => void;
}