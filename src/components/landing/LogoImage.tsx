"use client";

import { useState } from "react";

const logoPath = "/client-assets/logos/manosbuilds-logo.png";

type LogoImageProps = {
  className?: string;
  textClassName?: string;
};

export function LogoImage({ className, textClassName }: LogoImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className={textClassName}>
        <span className="block text-sm font-semibold uppercase tracking-[0.28em] text-white">
          Manos Builds
        </span>
        <span className="mt-1 block text-[11px] uppercase tracking-[0.26em] text-white/46">
          Premium digital studio
        </span>
      </div>
    );
  }

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logoPath}
        alt="Manos Builds logo"
        className={className}
        onError={() => setHasError(true)}
      />
    </>
  );
}
