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
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/12 bg-[linear-gradient(180deg,rgba(8,18,39,0.72),rgba(6,16,31,0.6))] px-4 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.08),inset_0_0_32px_rgba(95,148,255,0.05)] backdrop-blur-[28px] sm:px-6">
        <a href="#top" className="group flex items-center">
          <div className="relative flex items-center">
            <span className="absolute inset-0 rounded-[1.3rem] bg-[radial-gradient(circle_at_center,rgba(85,135,255,0.28),transparent_62%)] blur-xl" />
            <div className="relative flex h-[3.8rem] w-[12.65rem] items-center justify-center overflow-hidden rounded-[1.3rem] border border-sky-300/22 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.04))] px-1.5 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_0_24px_rgba(84,136,255,0.06),0_10px_40px_rgba(32,83,196,0.14)] sm:h-[4.15rem] sm:w-[14.5rem] lg:w-[16rem] lg:px-1">
              <LogoImage
                className="h-[5.35rem] w-[18.4rem] max-w-none origin-center scale-[1.58] object-contain object-center sm:h-[5.9rem] sm:w-[20.8rem] sm:scale-[1.64] lg:h-[6.15rem] lg:w-[23rem] lg:scale-[1.82]"
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
              className="rounded-full px-3 py-2 text-sm text-white/62 transition-all duration-300 hover:bg-white/[0.045] hover:text-white hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
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
