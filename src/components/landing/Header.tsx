"use client";

import { motion } from "framer-motion";

import { navigationItems } from "@/components/landing/content";
import { ButtonLink } from "@/components/landing/ButtonLink";

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-40 px-4 pt-4 sm:px-6"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-2xl sm:px-6">
        <a href="#top" className="group flex items-center gap-3">
          <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-cyan-400/30 bg-white/[0.04] text-lg font-semibold text-white">
            <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.42),transparent_70%)] blur-md" />
            <span className="relative z-10">M</span>
          </span>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold tracking-[0.2em] text-white">Manos Builds</p>
            <p className="text-xs tracking-[0.18em] uppercase text-white/45">
              Code, systems, AI
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/65 transition-colors duration-300 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <ButtonLink href="#contact" className="px-4 py-2.5 text-[11px] sm:px-5">
          Start Your Project
        </ButtonLink>
      </div>
    </motion.header>
  );
}
