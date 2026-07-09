"use client";

import { useState } from "react";

import { motion } from "framer-motion";
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
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={href}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -3, scale: 1.01 }}
      whileTap={{ scale: 0.985 }}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold tracking-[0.18em] uppercase transition-all duration-300",
        variant === "primary"
          ? "border border-sky-300/25 bg-[linear-gradient(135deg,rgba(61,126,255,0.96),rgba(162,68,255,0.72),rgba(255,79,167,0.58))] text-white shadow-[0_18px_50px_rgba(43,124,255,0.24)]"
          : "border border-white/14 bg-white/[0.04] text-white/88 backdrop-blur-xl",
        className,
      )}
    >
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        animate={{
          opacity: hovered ? 1 : variant === "primary" ? 0.9 : 0.65,
        }}
      >
        <span className="absolute inset-[1px] rounded-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.28),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.02))]" />
      </motion.span>
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 top-1/2 h-16 w-16 -translate-y-1/2 rounded-full bg-white/30 blur-2xl"
        animate={{ x: hovered ? 180 : 0, opacity: hovered ? 0.8 : 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      />
      <span className="relative z-10">{children}</span>
      <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
    </motion.a>
  );
}
