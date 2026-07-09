"use client";

import { motion } from "framer-motion";

import { ButtonLink } from "@/components/landing/ButtonLink";

export function ContactSection() {
  return (
    <section id="contact" className="px-6 pb-24 pt-8 sm:px-8 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-7xl overflow-hidden rounded-[2.4rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(72,130,255,0.2),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(204,89,255,0.16),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(255,79,167,0.12),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] px-8 py-12 shadow-[0_32px_120px_rgba(0,0,0,0.26)] backdrop-blur-2xl sm:px-10 lg:px-14 lg:py-16"
      >
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-sky-200/82">
              Let&apos;s Build Something Exceptional
            </p>
            <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
              If you want your business to look premium online, let&apos;s create
              the right digital experience for it.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/64 sm:text-lg">
              Whether you need a polished website, a custom application, an AI
              assistant, or a smarter digital system, Manos Builds creates work
              that feels modern, refined, and built with care.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
            <ButtonLink href="mailto:hello@manosbuilds.com" className="justify-between">
              Start Your Project
            </ButtonLink>
            <ButtonLink href="#portfolio" variant="secondary" className="justify-between">
              View Our Work
            </ButtonLink>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
