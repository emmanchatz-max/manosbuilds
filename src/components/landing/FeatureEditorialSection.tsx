"use client";

import { motion } from "framer-motion";

import { capabilityCards } from "@/components/landing/content";

export function FeatureEditorialSection() {
  return (
    <section className="relative px-6 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1.08fr_0.92fr]">
        {capabilityCards.map((card, index) => (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, delay: index * 0.08 }}
            className={[
              "group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-7 shadow-[0_28px_100px_rgba(0,0,0,0.22)] backdrop-blur-2xl lg:p-9",
              index === 0 ? "lg:translate-y-10" : "",
              index === 1 ? "lg:col-start-2" : "",
              index === 2 ? "lg:col-span-2 lg:grid lg:grid-cols-[0.78fr_1.22fr] lg:items-start" : "",
            ].join(" ")}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(86,140,255,0.18),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(255,79,167,0.10),transparent_28%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-sky-200/76">
                {card.eyebrow}
              </p>
              <h3 className="mt-5 max-w-2xl text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
                {card.title}
              </h3>
            </div>
            <div className={`relative ${index === 2 ? "mt-8 lg:mt-0" : "mt-7"}`}>
              <p className="max-w-2xl text-base leading-8 text-white/60">{card.description}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                {card.points.map((point) => (
                  <span
                    key={point}
                    className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs uppercase tracking-[0.22em] text-white/68"
                  >
                    {point}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
