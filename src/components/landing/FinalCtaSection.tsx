"use client";

import { motion } from "framer-motion";

import { ButtonLink } from "@/components/landing/ButtonLink";

export function FinalCtaSection() {
  return (
    <section id="contact" className="px-6 pb-24 pt-8 sm:px-8 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.16),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] px-8 py-12 backdrop-blur-2xl sm:px-10 lg:px-14 lg:py-16"
      >
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-300/78">
              Start a Conversation
            </p>
            <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
              Build something that looks exceptional and works even harder behind the scenes.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/62 sm:text-lg">
              Manos Builds creates polished digital products, AI-powered systems, and
              modern software experiences that help businesses move faster with less
              friction.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
            <ButtonLink href="mailto:hello@manosbuilds.com" className="justify-between">
              Start Your Project
            </ButtonLink>
            <ButtonLink href="#work" variant="secondary" className="justify-between">
              View Our Work
            </ButtonLink>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
