"use client";

import { motion, useReducedMotion } from "framer-motion";

type AtmosphereBackgroundProps = {
  pointer: {
    x: number;
    y: number;
  };
};

const particles = [
  { left: "7%", top: "18%", size: 4 },
  { left: "15%", top: "58%", size: 3 },
  { left: "24%", top: "26%", size: 5 },
  { left: "34%", top: "72%", size: 4 },
  { left: "46%", top: "18%", size: 3 },
  { left: "54%", top: "52%", size: 4 },
  { left: "64%", top: "24%", size: 5 },
  { left: "72%", top: "68%", size: 3 },
  { left: "84%", top: "34%", size: 4 },
  { left: "90%", top: "76%", size: 5 },
];

const linePaths = [
  "M120 160 L320 220 L460 140 L680 210 L920 180",
  "M160 460 L330 380 L520 470 L760 410 L920 520",
];

export function AtmosphereBackground({ pointer }: AtmosphereBackgroundProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        animate={
          reduceMotion
            ? undefined
            : {
                x: pointer.x * 16,
                y: pointer.y * 12,
              }
        }
        transition={{ type: "spring", stiffness: 32, damping: 20, mass: 0.9 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(45,94,255,0.22),transparent_34%),radial-gradient(circle_at_80%_15%,rgba(165,74,255,0.14),transparent_24%),radial-gradient(circle_at_18%_74%,rgba(255,71,168,0.12),transparent_22%),linear-gradient(180deg,#06111f_0%,#081222_40%,#070d19_100%)]" />
        <div className="absolute left-[10%] top-[22%] h-[30rem] w-[30rem] rounded-full bg-sky-500/10 blur-[140px]" />
        <div className="absolute right-[8%] top-[8%] h-[24rem] w-[24rem] rounded-full bg-violet-500/10 blur-[120px]" />
        <div className="absolute left-[42%] top-[58%] h-[26rem] w-[26rem] rounded-full bg-pink-500/8 blur-[120px]" />
        <div className="absolute left-[28%] top-[36%] h-[20rem] w-[20rem] rounded-full bg-sky-400/8 blur-[120px]" />
        <div className="absolute left-[-8%] top-[6%] h-[140%] w-[22rem] rotate-12 bg-[linear-gradient(90deg,transparent,rgba(122,173,255,0.06),transparent)] blur-3xl" />
        <div className="absolute right-[8%] top-[-10%] h-[120%] w-[16rem] -rotate-12 bg-[linear-gradient(90deg,transparent,rgba(197,116,255,0.05),transparent)] blur-3xl" />
        <motion.div
          className="absolute left-[14%] top-[18%] h-[70%] w-40 rotate-[22deg] bg-[linear-gradient(90deg,transparent,rgba(130,186,255,0.08),transparent)] blur-3xl"
          animate={reduceMotion ? undefined : { x: [0, 60, 0], opacity: [0.2, 0.45, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[12%] top-[32%] h-[54%] w-28 -rotate-[18deg] bg-[linear-gradient(90deg,transparent,rgba(255,130,214,0.08),transparent)] blur-3xl"
          animate={reduceMotion ? undefined : { x: [0, -48, 0], opacity: [0.14, 0.34, 0.14] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        />
      </motion.div>

      <svg
        viewBox="0 0 1000 700"
        className="absolute inset-0 h-full w-full opacity-40"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="premium-line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="35%" stopColor="rgba(86,173,255,0.25)" />
            <stop offset="70%" stopColor="rgba(196,116,255,0.18)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>
        {linePaths.map((path, index) => (
          <motion.path
            key={path}
            d={path}
            fill="none"
            stroke="url(#premium-line)"
            strokeWidth="1.2"
            initial={{ pathLength: 0.15, opacity: 0.1 }}
            animate={
              reduceMotion
                ? { pathLength: 1, opacity: 0.18 }
                : { pathLength: [0.25, 1, 0.6], opacity: [0.08, 0.28, 0.1] }
            }
            transition={{ duration: 12 + index * 3, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </svg>

      {particles.map((particle, index) => (
        <motion.span
          key={`${particle.left}-${particle.top}`}
          className="absolute rounded-full bg-white/75 shadow-[0_0_16px_rgba(126,183,255,0.55)]"
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
                  y: [0, -12 - (index % 4), 0],
                  opacity: [0.35, 0.95, 0.4],
                  scale: [1, 1.12, 1],
                }
          }
          transition={{
            duration: 4 + (index % 3),
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.2,
          }}
        />
      ))}

      <div className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(rgba(255,255,255,0.9)_0.5px,transparent_0.5px)] [background-size:22px_22px]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,13,25,0.05),rgba(7,13,25,0.3)_30%,rgba(7,13,25,0.72)_70%,rgba(7,13,25,0.94))]" />
    </div>
  );
}
