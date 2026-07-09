"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Hotel, Scale, Sparkles, Stethoscope } from "lucide-react";

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
    <section id="top" className="relative px-6 pb-16 pt-14 sm:px-8 lg:px-10 lg:pt-20">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
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
            Premium Websites
            <br />
            For Modern
            <br />
            Businesses.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.3 }}
            className="mt-7 max-w-2xl text-lg leading-8 text-white/66 sm:text-xl"
          >
            Manos Builds creates elegant websites and premium digital experiences
            that help serious businesses look exceptional online. As your company
            grows, we extend that foundation with custom applications, AI
            assistants, automation, digital systems, and cloud solutions.
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
            {proofPoints.slice(0, 6).map((item) => {
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
            className="relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
          >
            <div className="mb-4 flex items-center justify-between rounded-full border border-white/10 bg-white/[0.04] px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-pink-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-violet-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-sky-400" />
              </div>
              <span className="text-[11px] uppercase tracking-[0.28em] text-white/45">
                Crafted digital presence
              </span>
            </div>

            <div className="grid gap-4 lg:grid-cols-[1.16fr_0.84fr]">
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-[2rem] border border-white/10 bg-[linear-gradient(160deg,rgba(70,120,255,0.16),rgba(255,255,255,0.04),rgba(255,79,167,0.07))] p-5"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.3em] text-sky-200/76">
                      Featured website
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-white">
                      Luxury multi-device presence
                    </h3>
                  </div>
                  <Globe className="h-5 w-5 text-sky-200" />
                </div>
                <div className="mt-6 space-y-4">
                  <div className="rounded-[1.7rem] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.18),rgba(255,255,255,0.05))] p-4">
                    <div className="mb-4 flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-white/42">
                      <span>Homepage concept</span>
                      <span>Desktop</span>
                    </div>
                    <div className="rounded-[1.2rem] border border-white/10 bg-[#0a1628] p-4">
                      <div className="h-2 w-16 rounded-full bg-white/35" />
                      <div className="mt-5 h-10 w-4/5 rounded-[1rem] bg-white/88" />
                      <div className="mt-3 h-2.5 w-3/4 rounded-full bg-white/28" />
                      <div className="mt-6 grid grid-cols-[1.1fr_0.9fr] gap-3">
                        <div className="h-20 rounded-[1.2rem] bg-[linear-gradient(135deg,rgba(96,146,255,0.28),rgba(255,255,255,0.08))]" />
                        <div className="grid gap-3">
                          <span className="h-8 rounded-xl bg-white/10" />
                          <span className="h-8 rounded-xl bg-white/10" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-[0.72fr_0.28fr] gap-4">
                    <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.05] p-4">
                      <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-white/42">
                        <span>Hospitality</span>
                        <Hotel className="h-3.5 w-3.5 text-pink-200/75" />
                      </div>
                      <div className="h-28 rounded-[1.2rem] bg-[linear-gradient(135deg,rgba(220,112,255,0.18),rgba(98,152,255,0.18),rgba(255,255,255,0.06))]" />
                    </div>
                    <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.05] p-3">
                      <div className="mb-3 text-[10px] uppercase tracking-[0.28em] text-white/42">
                        Mobile
                      </div>
                      <div className="h-28 rounded-[1.2rem] border border-white/10 bg-[#09111f] p-3">
                        <div className="h-2 w-10 rounded-full bg-white/32" />
                        <div className="mt-4 h-12 rounded-[1rem] bg-[linear-gradient(180deg,rgba(95,151,255,0.46),rgba(255,255,255,0.08))]" />
                        <div className="mt-3 h-2 w-3/4 rounded-full bg-white/20" />
                      </div>
                    </div>
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
                        Professional sectors
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-white">
                        Built for trust
                      </h3>
                    </div>
                    <Sparkles className="h-5 w-5 text-violet-200" />
                  </div>
                  <div className="mt-5 space-y-3">
                    {[
                      { label: "Clinics & healthcare", icon: Stethoscope },
                      { label: "Law firms & professionals", icon: Scale },
                      { label: "Hotels & restaurants", icon: Hotel },
                    ].map((line) => {
                      const Icon = line.icon;

                      return (
                        <div
                          key={line.label}
                          className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/15 px-3 py-3 text-sm text-white/72"
                        >
                          <Icon className="h-4 w-4 text-sky-200" />
                          {line.label}
                        </div>
                      );
                    })}
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
                        Growth services
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-white">
                        Beyond the website
                      </h3>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-pink-200" />
                  </div>
                  <div className="mt-5 space-y-3">
                    {[
                      "Custom web applications",
                      "AI assistants",
                      "Business automation",
                      "Cloud solutions",
                    ].map((item, index) => (
                      <div key={item} className="space-y-2">
                        <div className="flex items-center justify-between text-xs uppercase tracking-[0.26em] text-white/45">
                          <span>{item}</span>
                          <span>{90 - index * 11}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-white/8">
                          <motion.span
                            className="block h-full rounded-full bg-[linear-gradient(90deg,rgba(118,170,255,0.95),rgba(190,96,255,0.42),rgba(255,79,167,0.26))]"
                            initial={{ width: 0 }}
                            animate={{ width: `${90 - index * 11}%` }}
                            transition={{ duration: 0.9, delay: 0.4 + index * 0.08 }}
                          />
                        </div>
                      </div>
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
