"use client";

import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
  size?: "sm" | "md" | "lg";
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#C9A84C] text-black font-semibold hover:bg-[#E2C47A] transition-colors duration-200",
  secondary:
    "bg-[#1A1A1A] text-[#F5F5F5] border border-[#222222] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors duration-200",
  outline:
    "bg-transparent text-[#C9A84C] border border-[#C9A84C] hover:bg-[#C9A84C] hover:text-black transition-colors duration-200",
  ghost:
    "bg-transparent text-[#888888] hover:text-[#F5F5F5] transition-colors duration-200",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  external = false,
  type = "button",
  size = "md",
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-none font-medium tracking-wide cursor-pointer";
  const classes = `${base} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
