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
      title="Designed like premium offerings, not software feature cards."
      description="Websites are the foundation of the business. The rest of the service stack exists to deepen the client experience, improve operations, and support growth when needed."
      className="pt-8"
    >
      <div className="grid gap-5 lg:grid-cols-12">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isLead = index === 0;

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
              className={[
                "group relative overflow-hidden rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-2xl",
                isLead
                  ? "lg:col-span-6 lg:min-h-[24rem] lg:p-8"
                  : "sm:grid sm:grid-cols-[auto_1fr] sm:items-start sm:gap-5 lg:col-span-3",
              ].join(" ")}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(86,140,255,0.22),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(255,79,167,0.12),transparent_28%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
                  <Icon className="h-5 w-5 text-sky-200" />
                </span>
                <div className={isLead ? "mt-10" : "mt-6 sm:mt-0"}>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-white/46">
                    {service.label}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-white lg:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-white/58 lg:text-[15px]">
                    {service.description}
                  </p>
                </div>
                {isLead ? (
                  <div className="mt-10 grid gap-3 sm:grid-cols-3">
                    {[
                      "Professional services",
                      "Hospitality brands",
                      "Premium local businesses",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-4 text-xs uppercase tracking-[0.24em] text-white/68"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </motion.article>
          );
        })}
      </div>
    </SectionShell>
  );
}
