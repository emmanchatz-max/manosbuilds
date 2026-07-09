"use client";

import { motion } from "framer-motion";

import { workPreviews } from "@/components/landing/content";
import { SectionShell } from "@/components/landing/SectionShell";

export function WorkPreviewSection() {
  return (
    <SectionShell
      id="work"
      eyebrow="Selected Work"
      title="Designed to scale into a portfolio, already refined enough to sell the standard."
      description="This section acts as a premium work teaser now and expands naturally into full case studies later."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {workPreviews.map((project, index) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75, delay: index * 0.08 }}
            className="group overflow-hidden rounded-[1.9rem] border border-white/10 bg-white/[0.03] backdrop-blur-2xl"
          >
            <div className="relative h-56 overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.24),transparent_36%),linear-gradient(135deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))]">
              <div className="absolute inset-6 rounded-[1.5rem] border border-white/10 bg-black/30 p-5 transition-transform duration-500 group-hover:scale-[1.02]">
                <div className="flex items-center justify-between">
                  <span className="h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.9)]" />
                  <span className="text-[11px] uppercase tracking-[0.28em] text-white/42">
                    {project.type}
                  </span>
                </div>
                <div className="mt-6 space-y-3">
                  <div className="h-16 rounded-[1.25rem] bg-white/[0.08]" />
                  <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-2 h-14 rounded-[1.25rem] bg-white/[0.05]" />
                    <div className="h-14 rounded-[1.25rem] bg-cyan-400/12" />
                  </div>
                  <div className="h-10 rounded-[1.25rem] bg-white/[0.04]" />
                </div>
              </div>
            </div>

            <div className="p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/70">{project.type}</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{project.name}</h3>
              <p className="mt-4 text-sm leading-7 text-white/56">{project.summary}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
