"use client";

import { motion } from "framer-motion";

import { processSteps } from "@/components/landing/content";
import { SectionShell } from "@/components/landing/SectionShell";

export function ProcessSection() {
  return (
    <SectionShell
      id="process"
      eyebrow="Process"
      title="A clear path from idea to launch."
      description="The process is intentionally simple: define the right system, design it with precision, build it cleanly, and keep improving it after launch."
    >
      <div className="grid gap-4 lg:grid-cols-4">
        {processSteps.map((step, index) => (
          <motion.article
            key={step.number}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, delay: index * 0.08 }}
            className="rounded-[1.75rem] border border-white/10 bg-white/[0.025] p-6 backdrop-blur-2xl"
          >
            <p className="text-sm font-semibold tracking-[0.3em] text-cyan-300/75">
              {step.number}
            </p>
            <h3 className="mt-6 text-2xl font-semibold text-white">{step.title}</h3>
            <p className="mt-4 text-sm leading-7 text-white/55">{step.description}</p>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
