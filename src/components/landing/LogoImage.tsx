"use client";

import { useState } from "react";
import Image from "next/image";

import logoImage from "../../../public/client-assets/logos/manosbuilds-logo.png";

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
      <Image
        src={logoImage}
        alt="Manos Builds logo"
        width={1024}
        height={683}
        sizes="(max-width: 640px) 176px, (max-width: 1024px) 232px, 288px"
        className={className}
        priority
        onError={() => setHasError(true)}
      />
    </>
  );
}
