"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check, Monitor, Sparkles } from "lucide-react";

import { ButtonLink } from "@/components/landing/ButtonLink";
import { heroHighlights, proofPoints } from "@/components/landing/content";

type HeroSectionProps = {
  pointer: {
    x: number;
    y: number;
  };
};

export function HeroSection({ pointer }: HeroSectionProps) {
  return (
    <section id="top" className="relative px-6 pb-20 pt-14 sm:px-8 lg:px-10 lg:pt-20">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)]">
        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mb-6 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.34em] text-sky-200/85 backdrop-blur-xl"
          >
            Premium Digital Experiences
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl text-5xl font-semibold tracking-[-0.07em] text-white sm:text-6xl lg:text-[5.4rem] lg:leading-[0.98]"
          >
            Beautiful Websites.
            <br />
            Powerful Applications.
            <br />
            Intelligent AI Solutions.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.3 }}
            className="mt-7 max-w-2xl text-lg leading-8 text-white/66 sm:text-xl"
          >
            We design modern websites that help businesses stand out, attract more
            customers and grow online. As your business evolves, we build custom
            applications, AI assistants and automation tailored specifically to
            your needs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.42 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <ButtonLink href="#contact">Start Your Project</ButtonLink>
            <ButtonLink href="#portfolio" variant="secondary">
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
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-300 shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
                <span>{item}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.64 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            {proofPoints.slice(0, 5).map((item) => {
              const Icon = item.icon;

              return (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-white/70 backdrop-blur-xl"
                >
                  <Icon className="h-3.5 w-3.5 text-sky-200" />
                  {item.label}
                </span>
              );
            })}
          </motion.div>
        </div>

        <div className="relative">
          <motion.div
            className="absolute inset-0 rounded-[2.25rem] bg-[radial-gradient(circle_at_top,rgba(74,127,255,0.22),transparent_48%),radial-gradient(circle_at_bottom_right,rgba(212,90,255,0.18),transparent_38%),radial-gradient(circle_at_left,rgba(255,74,166,0.10),transparent_30%)] blur-2xl"
            animate={{
              x: pointer.x * 12,
              y: pointer.y * 10,
            }}
            transition={{ type: "spring", stiffness: 36, damping: 18 }}
          />
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.05, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
          >
            <div className="mb-4 flex items-center justify-between rounded-full border border-white/10 bg-white/[0.04] px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-pink-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-violet-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-sky-400" />
              </div>
              <span className="text-[11px] uppercase tracking-[0.28em] text-white/45">
                Website-first studio
              </span>
            </div>

            <div className="grid gap-4 md:grid-cols-[1.08fr_0.92fr]">
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-[1.8rem] border border-white/10 bg-[linear-gradient(160deg,rgba(70,120,255,0.16),rgba(255,255,255,0.04),rgba(255,79,167,0.07))] p-5"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.3em] text-sky-200/76">
                      Premium website
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-white">
                      Cinematic first impression
                    </h3>
                  </div>
                  <Monitor className="h-5 w-5 text-sky-200" />
                </div>
                <div className="mt-6 space-y-3">
                  <div className="h-28 rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(255,255,255,0.04))] p-4">
                    <div className="h-2 w-14 rounded-full bg-white/40" />
                    <div className="mt-5 h-8 w-3/4 rounded-full bg-white/88" />
                    <div className="mt-3 h-2.5 w-2/3 rounded-full bg-white/28" />
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[...Array.from({ length: 6 })].map((_, index) => (
                      <span
                        key={index}
                        className="h-12 rounded-[1.1rem] border border-white/10 bg-white/[0.05]"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

              <div className="grid gap-4">
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                  className="rounded-[1.7rem] border border-white/10 bg-white/[0.05] p-5"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.3em] text-violet-200/75">
                        Smart systems
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-white">
                        Apps, AI, automation
                      </h3>
                    </div>
                    <Sparkles className="h-5 w-5 text-violet-200" />
                  </div>
                  <div className="mt-5 space-y-3">
                    {[
                      "Client booking flow",
                      "Custom internal dashboard",
                      "AI assistant support layer",
                    ].map((line) => (
                      <div
                        key={line}
                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/15 px-3 py-3 text-sm text-white/72"
                      >
                        <Check className="h-4 w-4 text-sky-200" />
                        {line}
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.35 }}
                  className="rounded-[1.7rem] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-5"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.3em] text-pink-200/72">
                        Crafted for growth
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-white">
                        Premium digital presence
                      </h3>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-pink-200" />
                  </div>
                  <div className="mt-5 flex h-28 items-end gap-3">
                    {[56, 72, 46, 84, 68].map((height, index) => (
                      <span
                        key={index}
                        className="flex-1 rounded-t-[1rem] bg-[linear-gradient(180deg,rgba(118,170,255,0.88),rgba(191,95,255,0.28),rgba(255,79,167,0.2))]"
                        style={{ height }}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
