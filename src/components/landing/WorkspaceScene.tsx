"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Bot, Braces, ChartColumn, Globe, Sparkles, Workflow } from "lucide-react";

type WorkspaceSceneProps = {
  pointer: {
    x: number;
    y: number;
  };
};

function ScenePanel({
  title,
  subtitle,
  icon: Icon,
  className,
  children,
}: {
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  className: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.03))] p-4 shadow-[0_22px_90px_rgba(0,0,0,0.45)] backdrop-blur-2xl ${className}`}
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-200/70">{subtitle}</p>
          <h3 className="mt-2 text-sm font-semibold text-white">{title}</h3>
        </div>
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.05]">
          <Icon className="h-4 w-4 text-cyan-200" />
        </span>
      </div>
      {children}
    </div>
  );
}

export function WorkspaceScene({ pointer }: WorkspaceSceneProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto h-[28rem] w-full max-w-[42rem] [perspective:1400px] sm:h-[32rem] lg:h-[38rem]"
    >
      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                rotateX: -7 - pointer.y * 3,
                rotateY: 10 + pointer.x * 8,
                y: [0, -8, 0],
              }
        }
        transition={{
          rotateX: { type: "spring", stiffness: 70, damping: 18 },
          rotateY: { type: "spring", stiffness: 70, damping: 18 },
          y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute inset-0 [transform-style:preserve-3d]"
      >
        <div className="absolute inset-[15%_8%_5%_8%] rounded-[2rem] border border-cyan-300/10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01))] blur-3xl" />

        <div className="absolute left-[6%] top-[22%] h-56 w-44 rounded-full bg-cyan-400/12 blur-3xl" />
        <div className="absolute right-[2%] top-[8%] h-64 w-56 rounded-full bg-blue-500/16 blur-3xl" />

        <motion.div
          animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[6%] top-[15%] w-[44%] [transform:translateZ(90px)]"
        >
          <ScenePanel title="Modern Website" subtitle="Interface" icon={Globe} className="min-h-60">
            <div className="space-y-3">
              <div className="h-24 rounded-2xl border border-white/8 bg-[linear-gradient(135deg,rgba(59,130,246,0.18),rgba(34,211,238,0.08))] p-4">
                <div className="h-2 w-16 rounded-full bg-white/40" />
                <div className="mt-4 h-7 w-4/5 rounded-full bg-white/80" />
                <div className="mt-3 h-2 w-3/5 rounded-full bg-white/30" />
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[...Array.from({ length: 6 })].map((_, index) => (
                  <span
                    key={index}
                    className="h-10 rounded-2xl border border-white/8 bg-white/[0.05]"
                  />
                ))}
              </div>
            </div>
          </ScenePanel>
        </motion.div>

        <motion.div
          animate={reduceMotion ? undefined : { y: [0, 12, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          className="absolute right-[7%] top-[10%] w-[40%] [transform:translateZ(140px)]"
        >
          <ScenePanel title="AI Console" subtitle="Agent Layer" icon={Bot} className="min-h-56">
            <div className="space-y-3">
              <div className="flex items-center gap-2 rounded-2xl border border-cyan-400/18 bg-cyan-400/8 p-3 text-xs text-cyan-100">
                <Sparkles className="h-4 w-4" />
                Autonomous workflows active
              </div>
              <div className="space-y-2">
                <div className="h-9 rounded-2xl bg-white/[0.06]" />
                <div className="h-9 w-5/6 rounded-2xl bg-white/[0.04]" />
                <div className="h-9 w-2/3 rounded-2xl bg-white/[0.03]" />
              </div>
            </div>
          </ScenePanel>
        </motion.div>

        <motion.div
          animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          className="absolute left-[22%] top-[50%] w-[34%] [transform:translateZ(180px)]"
        >
          <ScenePanel title="Code Editor" subtitle="Engineering" icon={Braces} className="min-h-48">
            <div className="space-y-2 font-mono text-[11px] text-cyan-100/80">
              <div className="rounded-xl bg-white/[0.04] px-3 py-2">{`const automate = true;`}</div>
              <div className="rounded-xl bg-white/[0.04] px-3 py-2">{`agent.run(workflows);`}</div>
              <div className="rounded-xl bg-white/[0.04] px-3 py-2">{`deploy({ region: "global" });`}</div>
            </div>
          </ScenePanel>
        </motion.div>

        <motion.div
          animate={reduceMotion ? undefined : { y: [0, 10, 0] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          className="absolute right-[16%] top-[52%] w-[28%] [transform:translateZ(110px)]"
        >
          <ScenePanel title="Analytics" subtitle="Clarity" icon={ChartColumn} className="min-h-44">
            <div className="flex h-24 items-end gap-2">
              {[48, 64, 36, 72, 84].map((height, index) => (
                <span
                  key={index}
                  className="flex-1 rounded-t-2xl bg-[linear-gradient(180deg,rgba(34,211,238,0.88),rgba(59,130,246,0.18))]"
                  style={{ height }}
                />
              ))}
            </div>
          </ScenePanel>
        </motion.div>

        <motion.div
          animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
          transition={{ duration: 8.4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="absolute bottom-[8%] left-[10%] w-[34%] [transform:translateZ(70px)]"
        >
          <ScenePanel
            title="Automation Flow"
            subtitle="Operations"
            icon={Workflow}
            className="min-h-40"
          >
            <div className="flex items-center gap-2">
              <span className="h-10 w-10 rounded-2xl bg-cyan-400/16" />
              <span className="h-[2px] flex-1 bg-gradient-to-r from-cyan-400/70 to-transparent" />
              <span className="h-10 w-10 rounded-2xl bg-blue-500/16" />
              <span className="h-[2px] flex-1 bg-gradient-to-r from-blue-500/70 to-transparent" />
              <span className="h-10 w-10 rounded-2xl bg-violet-500/16" />
            </div>
          </ScenePanel>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
