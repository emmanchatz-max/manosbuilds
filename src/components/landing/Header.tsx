"use client";

import { motion } from "framer-motion";

import { navigationItems } from "@/components/landing/content";
import { ButtonLink } from "@/components/landing/ButtonLink";
import { LogoImage } from "@/components/landing/LogoImage";

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-40 px-4 pt-4 sm:px-6"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[rgba(6,16,31,0.58)] px-4 py-3 shadow-[0_14px_50px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:px-6">
        <a href="#top" className="group flex items-center gap-3">
          <div className="relative flex items-center gap-3">
            <span className="absolute inset-0 rounded-[1.3rem] bg-[radial-gradient(circle_at_center,rgba(85,135,255,0.26),transparent_60%)] blur-xl" />
            <div className="relative flex min-h-[3.45rem] min-w-[5.7rem] items-center justify-center rounded-[1.3rem] border border-sky-300/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] px-4 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              <LogoImage
                className="max-h-10 w-auto max-w-[7rem] object-contain sm:max-h-11 sm:max-w-[7.5rem]"
                textClassName="min-w-[10rem]"
              />
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/62 transition-colors duration-300 hover:text-white"
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
