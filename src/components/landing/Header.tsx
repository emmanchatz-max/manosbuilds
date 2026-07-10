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
        <a href="#top" className="group flex items-center">
          <div className="relative flex items-center">
            <span className="absolute inset-0 rounded-[1.3rem] bg-[radial-gradient(circle_at_center,rgba(85,135,255,0.26),transparent_60%)] blur-xl" />
            <div className="relative flex h-[3.7rem] w-[11.25rem] items-center justify-start overflow-hidden rounded-[1.3rem] border border-sky-300/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] px-3 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_40px_rgba(32,83,196,0.12)] sm:h-[4rem] sm:w-[13rem] sm:px-4">
              <LogoImage
                className="h-[5rem] w-[16rem] max-w-none origin-left scale-[1.42] object-contain object-left sm:h-[5.4rem] sm:w-[18rem] sm:scale-[1.48]"
                textClassName="min-w-[11rem] sm:min-w-[12rem]"
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
