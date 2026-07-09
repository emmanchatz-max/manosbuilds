"use client";

import { motion } from "framer-motion";

import { ButtonLink } from "@/components/landing/ButtonLink";
import { WorkspaceScene } from "@/components/landing/WorkspaceScene";

type HeroSectionProps = {
  pointer: {
    x: number;
    y: number;
  };
};

const heroHighlights = [
  "Custom websites and premium web experiences",
  "AI agents, voice systems, and business automations",
  "Cloud-ready products with elegant engineering",
];

export function HeroSection({ pointer }: HeroSectionProps) {
  return (
    <section id="top" className="relative px-6 pb-20 pt-14 sm:px-8 lg:px-10 lg:pt-20">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)]">
        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mb-6 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.34em] text-cyan-200/80 backdrop-blur-xl"
          >
            Premium Software Studio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl text-5xl font-semibold tracking-[-0.07em] text-white sm:text-6xl lg:text-7xl"
          >
            Building the Future with Code &amp; AI
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.3 }}
            className="mt-7 max-w-2xl text-lg leading-8 text-white/62 sm:text-xl"
          >
            We create beautiful websites, powerful applications, AI assistants and
            automations that help businesses grow faster.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.42 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <ButtonLink href="#contact">Start Your Project</ButtonLink>
            <ButtonLink href="#work" variant="secondary">
              View Our Work
            </ButtonLink>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.54 }}
            className="mt-10 space-y-3 text-sm text-white/54"
          >
            {heroHighlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
                <span>{item}</span>
              </li>
            ))}
          </motion.ul>
        </div>

        <div className="relative">
          <div
            className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.12),transparent_42%)] blur-2xl"
            style={{
              transform: `translate3d(${pointer.x * 14}px, ${pointer.y * 14}px, 0)`,
            }}
          />
          <WorkspaceScene pointer={pointer} />
        </div>
      </div>
    </section>
  );
}
