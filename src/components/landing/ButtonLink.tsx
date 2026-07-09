"use client";

import { ArrowRight } from "lucide-react";

import { cn } from "@/utils/cn";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-[0.18em] uppercase transition-all duration-300",
        variant === "primary"
          ? "bg-[linear-gradient(135deg,rgba(59,130,246,0.98),rgba(34,211,238,0.92))] text-white shadow-[0_0_28px_rgba(34,211,238,0.24)] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(34,211,238,0.28)]"
          : "border border-white/12 bg-white/[0.03] text-white/88 backdrop-blur-xl hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.07]",
        className,
      )}
    >
      <span>{children}</span>
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
    </a>
  );
}
