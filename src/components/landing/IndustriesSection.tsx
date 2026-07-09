"use client";

import { motion, useReducedMotion } from "framer-motion";

import { industries } from "@/components/landing/content";
import { SectionShell } from "@/components/landing/SectionShell";

export function IndustriesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <SectionShell
      id="industries"
      eyebrow="Industries"
      title="Built for professionals, hospitality brands, creators, and ambitious businesses."
      description="The visual language and content strategy can adapt to high-trust industries, creative portfolios, hospitality experiences, and business-focused digital platforms."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        {industries.map((industry, index) => {
          const Icon = industry.icon;

          return (
            <motion.article
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, delay: index * 0.04 }}
              whileHover={reduceMotion ? undefined : { y: -5, rotateX: -2, rotateY: 2 }}
              className="group relative overflow-hidden rounded-[1.65rem] border border-white/10 bg-white/[0.045] p-5 backdrop-blur-2xl"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(84,136,255,0.18),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(217,98,255,0.12),transparent_35%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06]">
                  <Icon className="h-4.5 w-4.5 text-sky-200" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white">{industry.title}</h3>
              </div>
            </motion.article>
          );
        })}
      </div>
    </SectionShell>
  );
}
