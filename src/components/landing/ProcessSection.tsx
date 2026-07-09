"use client";

import { motion } from "framer-motion";

import { processSteps } from "@/components/landing/content";
import { SectionShell } from "@/components/landing/SectionShell";

export function ProcessSection() {
  return (
    <SectionShell
      id="process"
      eyebrow="Process"
      title="A polished process from first conversation to long-term support."
      description="The delivery flow is designed to feel organized and premium, with enough clarity to reduce uncertainty without overwhelming the visitor."
    >
      <div className="relative grid gap-4 lg:grid-cols-6">
        <div className="absolute left-6 right-6 top-8 hidden h-px bg-gradient-to-r from-transparent via-sky-300/25 to-transparent lg:block" />
        {processSteps.map((step, index) => (
          <motion.article
            key={step.number}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, delay: index * 0.08 }}
            className="relative rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-2xl"
          >
            <span className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full border border-sky-300/20 bg-[linear-gradient(135deg,rgba(75,132,255,0.24),rgba(206,89,255,0.12))] text-sm font-semibold tracking-[0.3em] text-sky-200/86">
              {step.number}
            </span>
            <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
            <p className="mt-4 text-sm leading-7 text-white/55">{step.description}</p>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
