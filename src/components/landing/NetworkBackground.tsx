"use client";

import { motion, useReducedMotion } from "framer-motion";

type NetworkBackgroundProps = {
  pointer: {
    x: number;
    y: number;
  };
};

const particles = [
  { id: 1, left: "8%", top: "14%", size: 5 },
  { id: 2, left: "18%", top: "28%", size: 6 },
  { id: 3, left: "29%", top: "12%", size: 4 },
  { id: 4, left: "38%", top: "34%", size: 5 },
  { id: 5, left: "48%", top: "18%", size: 4 },
  { id: 6, left: "60%", top: "30%", size: 5 },
  { id: 7, left: "70%", top: "16%", size: 6 },
  { id: 8, left: "84%", top: "24%", size: 5 },
  { id: 9, left: "14%", top: "54%", size: 5 },
  { id: 10, left: "27%", top: "64%", size: 4 },
  { id: 11, left: "43%", top: "58%", size: 5 },
  { id: 12, left: "57%", top: "72%", size: 6 },
  { id: 13, left: "71%", top: "60%", size: 4 },
  { id: 14, left: "86%", top: "70%", size: 5 },
];

const linePaths = [
  "M90 90 L240 160 L410 96 L560 170 L750 112",
  "M160 280 L304 340 L460 300 L650 360 L860 312",
  "M120 520 L310 470 L470 560 L660 496 L860 590",
];

export function NetworkBackground({ pointer }: NetworkBackgroundProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                x: pointer.x * 12,
                y: pointer.y * 12,
              }
        }
        transition={{ type: "spring", stiffness: 40, damping: 18, mass: 0.8 }}
        className="absolute inset-0"
      >
        <div className="absolute left-1/2 top-[10%] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.18),transparent_70%)] blur-3xl" />
        <div className="absolute right-[12%] top-[22%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.12),transparent_72%)] blur-3xl" />
        <div className="absolute left-[8%] top-[48%] h-[20rem] w-[20rem] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.10),transparent_70%)] blur-3xl" />

        <svg
          viewBox="0 0 1000 700"
          className="absolute inset-0 h-full w-full opacity-45"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="network-line" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(59,130,246,0.08)" />
              <stop offset="50%" stopColor="rgba(34,211,238,0.44)" />
              <stop offset="100%" stopColor="rgba(139,92,246,0.18)" />
            </linearGradient>
          </defs>
          {linePaths.map((path) => (
            <motion.path
              key={path}
              d={path}
              fill="none"
              stroke="url(#network-line)"
              strokeWidth="1.25"
              initial={{ pathLength: 0.1, opacity: 0.15 }}
              animate={
                reduceMotion
                  ? { pathLength: 1, opacity: 0.35 }
                  : { pathLength: [0.4, 1, 0.7], opacity: [0.15, 0.55, 0.24] }
              }
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </svg>
      </motion.div>

      {particles.map((particle, index) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-cyan-200/90 shadow-[0_0_18px_rgba(34,211,238,0.85)]"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [0, -10 - (index % 5), 0],
                  opacity: [0.4, 1, 0.5],
                  scale: [1, 1.2, 1],
                }
          }
          transition={{
            duration: 4 + (index % 4),
            delay: index * 0.12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_35%),linear-gradient(to_bottom,rgba(9,9,9,0.05),rgba(9,9,9,0.82)_60%,#090909)]" />
      <div className="absolute inset-0 opacity-[0.14] [background-image:radial-gradient(rgba(255,255,255,0.6)_0.6px,transparent_0.6px)] [background-size:22px_22px]" />
    </div>
  );
}
