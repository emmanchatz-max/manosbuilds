"use client";

import { motion } from "framer-motion";

import { capabilityCards } from "@/components/landing/content";
import { SectionShell } from "@/components/landing/SectionShell";

export function CapabilitySection() {
  return (
    <SectionShell
      id="approach"
      eyebrow="Approach"
      title="Built with restraint, engineered for leverage."
      description="The work is not just visually polished. It is designed to improve trust, reduce friction, and create better operating systems for the business behind the interface."
    >
      <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8 }}
          className="rounded-[2rem] border border-white/10 bg-[linear-gradient(160deg,rgba(59,130,246,0.12),rgba(255,255,255,0.04),rgba(34,211,238,0.06))] p-8 backdrop-blur-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200/75">
            Why Manos Builds
          </p>
          <h3 className="mt-5 max-w-xl text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
            A world-class digital presence starts where product thinking meets execution.
          </h3>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/62">
            The goal is to make the company feel premium at first glance, while also
            building systems that support sales, operations, and growth behind the
            scenes. Elegant presentation and technical depth are treated as one
            discipline.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { value: "Fast", label: "delivery rhythm" },
              { value: "Clean", label: "system architecture" },
              { value: "Smart", label: "AI integration" },
            ].map((metric) => (
              <div
                key={metric.label}
                className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5"
              >
                <p className="text-2xl font-semibold text-white">{metric.value}</p>
                <p className="mt-2 text-sm text-white/50">{metric.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="space-y-4">
          {capabilityCards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.75, delay: index * 0.08 }}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-2xl"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300/75">
                {card.eyebrow}
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white">
                {card.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/58">{card.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
