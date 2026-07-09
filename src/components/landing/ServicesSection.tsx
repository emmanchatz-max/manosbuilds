"use client";

import { motion } from "framer-motion";

import { services } from "@/components/landing/content";
import { SectionShell } from "@/components/landing/SectionShell";

export function ServicesSection() {
  return (
    <SectionShell
      id="services"
      eyebrow="Services"
      title="A high-end software partner for brands that want more than another template."
      description="Manos Builds brings strategy, design, engineering, and AI execution together in one focused build partner."
      className="pt-8"
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-white/[0.05]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.16),transparent_32%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                  <Icon className="h-5 w-5 text-cyan-200" />
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
