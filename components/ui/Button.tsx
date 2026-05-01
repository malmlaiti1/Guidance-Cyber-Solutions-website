import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "text";

interface ButtonLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className"> {
  variant?: Variant;
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
}

const baseClasses =
  "inline-flex items-center gap-2.5 font-semibold text-[15px] leading-tight whitespace-nowrap transition-colors";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-accent text-white px-[22px] py-[14px] hover:bg-[var(--color-accent-hover)] focus-visible:outline-offset-4",
  secondary:
    "bg-white text-navy px-[22px] py-[14px] border border-border hover:border-navy",
  text: "text-accent",
};

export function ButtonLink({
  variant = "primary",
  children,
  className = "",
  fullWidth = false,
  ...rest
}: ButtonLinkProps) {
  const cls = `${baseClasses} ${variantClasses[variant]} ${
    fullWidth ? "w-full justify-center" : ""
  } ${className}`.trim();
  return (
    <a {...rest} className={cls}>
      {children}
    </a>
  );
}
