import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseClass =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300";

  const variantClass =
    variant === "primary"
      ? "bg-[#3b82f6] text-white shadow-md shadow-blue-500/20 hover:-translate-y-0.5 hover:bg-[#2563eb]"
      : "border border-[#8b6e63]/30 bg-white text-[#6f553b] hover:-translate-y-0.5 hover:border-[#8b6e63] hover:bg-[#f3ece8]";

  const classes = `${baseClass} ${variantClass} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes}>
      {children}
    </button>
  );
}