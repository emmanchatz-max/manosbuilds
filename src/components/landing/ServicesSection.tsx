"use client";

import { motion, useReducedMotion } from "framer-motion";

import { services } from "@/components/landing/content";
import { SectionShell } from "@/components/landing/SectionShell";

export function ServicesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <SectionShell
      id="services"
      eyebrow="Services"
      title="Premium websites first. Smart digital systems next."
      description="The first priority is giving your business a premium online presence. Then, when the business is ready, the platform can expand into applications, AI, and automation."
      className="pt-8"
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.05 }}
              whileHover={
                reduceMotion ? undefined : { y: -6, rotateX: -2, rotateY: 2, scale: 1.01 }
              }
              className="group relative overflow-hidden rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-2xl"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(86,140,255,0.22),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(255,79,167,0.12),transparent_28%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
                  <Icon className="h-5 w-5 text-sky-200" />
                </span>
                <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/58">{service.description}</p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </SectionShell>
  );
}
