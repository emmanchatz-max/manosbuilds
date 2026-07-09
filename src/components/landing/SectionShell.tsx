import { cn } from "@/utils/cn";

type SectionShellProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  children: React.ReactNode;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  className,
  children,
}: SectionShellProps) {
  return (
    <section id={id} className={cn("relative px-6 py-24 sm:px-8 lg:px-10", className)}>
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={cn(
            "mb-12 max-w-3xl",
            align === "center" && "mx-auto text-center",
          )}
        >
          {eyebrow ? (
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/80">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/62 sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
