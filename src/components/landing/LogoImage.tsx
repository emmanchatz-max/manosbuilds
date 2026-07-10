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
        <span className="block text-lg font-semibold uppercase tracking-[0.18em] text-white sm:text-[1.15rem]">
          Manos Builds
        </span>
        <span className="mt-1 block text-[10px] uppercase tracking-[0.24em] text-white/48 sm:text-[11px]">
          Premium websites and digital experiences
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
