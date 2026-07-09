"use client";

import { motion } from "framer-motion";
import { Laptop, Monitor, Smartphone, Tablet } from "lucide-react";

import { AssetImage } from "@/components/landing/AssetImage";
import { portfolioItems } from "@/components/landing/content";
import { SectionShell } from "@/components/landing/SectionShell";

function DeviceMockup({
  label,
  icon: Icon,
  className,
}: {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  className: string;
}) {
  return (
    <div
      className={`rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] p-3 backdrop-blur-xl ${className}`}
    >
      <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-white/42">
        <span>{label}</span>
        <Icon className="h-3.5 w-3.5 text-sky-200/80" />
      </div>
      <div className="rounded-[1rem] border border-white/10 bg-[#08111f] p-3">
        <AssetImage
          imageName={`${label.toLowerCase()}-preview.png`}
          alt={`${label} preview`}
          className="h-24 w-full rounded-[0.85rem] object-cover"
          fallback={
            <div className="h-24 rounded-[0.85rem] bg-[linear-gradient(135deg,rgba(91,144,255,0.24),rgba(181,96,255,0.18),rgba(255,79,167,0.14))] p-3">
              <div className="h-2 w-12 rounded-full bg-white/35" />
              <div className="mt-4 h-5 w-3/4 rounded-full bg-white/80" />
              <div className="mt-2 h-2 w-2/3 rounded-full bg-white/25" />
              <div className="mt-4 grid grid-cols-3 gap-2">
                <span className="h-6 rounded-lg bg-white/10" />
                <span className="h-6 rounded-lg bg-white/10" />
                <span className="h-6 rounded-lg bg-white/10" />
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
}

export function PortfolioSection() {
  return (
    <SectionShell
      id="portfolio"
      eyebrow="Portfolio"
      title="A portfolio section that sells transformation, not just screens."
      description="Every presentation is composed like a premium case-study teaser, using layered mockups and sector-specific framing to help visitors imagine their own brand at a higher level."
    >
      <div className="space-y-8">
        {portfolioItems.map((item, index) => (
          <motion.article
            key={item.name}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.08 }}
            className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6 shadow-[0_32px_100px_rgba(0,0,0,0.22)] backdrop-blur-2xl lg:p-8"
          >
            <div
              className={`grid gap-8 lg:items-center ${
                index % 2 === 0
                  ? "lg:grid-cols-[0.8fr_1.2fr]"
                  : "lg:grid-cols-[1.2fr_0.8fr]"
              }`}
            >
              <div className={index % 2 === 0 ? "" : "lg:order-2"}>
                <p className="text-xs uppercase tracking-[0.3em] text-sky-200/75">
                  {item.type}
                </p>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                  {item.name}
                </h3>
                <p className="mt-5 max-w-xl text-base leading-8 text-white/60">
                  {item.summary}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs uppercase tracking-[0.28em] text-white/62">
                    {item.category}
                  </span>
                  {item.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs uppercase tracking-[0.22em] text-white/62"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>

              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                className={`rounded-[1.9rem] border border-white/10 bg-[linear-gradient(140deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-4 shadow-[0_25px_80px_rgba(0,0,0,0.22)] ${
                  index % 2 === 0 ? "" : "lg:order-1"
                }`}
              >
                <div
                  className={`rounded-[1.6rem] bg-gradient-to-br ${item.accent} p-5`}
                >
                  <div className="grid gap-4 md:grid-cols-[1.18fr_0.82fr]">
                    <div className="space-y-4">
                      <DeviceMockup label="Desktop" icon={Monitor} className="min-h-[14rem]" />
                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.1] p-4">
                          <div className="text-[10px] uppercase tracking-[0.28em] text-white/44">
                            Layout
                          </div>
                          <div className="mt-4 h-16 rounded-[1rem] bg-white/14" />
                          <div className="mt-3 h-2 w-3/4 rounded-full bg-white/24" />
                        </div>
                        <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.1] p-4">
                          <div className="text-[10px] uppercase tracking-[0.28em] text-white/44">
                            Brand tone
                          </div>
                          <div className="mt-4 h-16 rounded-[1rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))]" />
                          <div className="mt-3 h-2 w-2/3 rounded-full bg-white/24" />
                        </div>
                      </div>
                    </div>
                    <div className="grid gap-4">
                      <DeviceMockup label="Laptop" icon={Laptop} className="min-h-[8rem]" />
                      <div className="grid grid-cols-2 gap-4">
                        <DeviceMockup label="Tablet" icon={Tablet} className="min-h-[7rem]" />
                        <DeviceMockup
                          label="Phone"
                          icon={Smartphone}
                          className="min-h-[7rem]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
