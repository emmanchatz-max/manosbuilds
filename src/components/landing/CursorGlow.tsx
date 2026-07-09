"use client";

import { motion, useReducedMotion } from "framer-motion";

type CursorGlowProps = {
  pointer: {
    x: number;
    y: number;
  };
};

export function CursorGlow({ pointer }: CursorGlowProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-1/2 top-1/2 z-0 hidden h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(80,126,255,0.18),rgba(165,74,255,0.12),transparent_70%)] blur-3xl lg:block"
      animate={
        reduceMotion
          ? undefined
          : {
              x: pointer.x * 180,
              y: pointer.y * 120,
              opacity: 0.95,
            }
      }
      transition={{ type: "spring", stiffness: 35, damping: 22, mass: 0.8 }}
    />
  );
}
