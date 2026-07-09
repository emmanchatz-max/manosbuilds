"use client";

import { useState } from "react";

type AssetImageProps = {
  imageName: string;
  alt: string;
  className?: string;
  fallback?: React.ReactNode;
};

export function AssetImage({
  imageName,
  alt,
  className,
  fallback = null,
}: AssetImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <>{fallback}</>;
  }

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/client-assets/images/${imageName}`}
        alt={alt}
        className={className}
        onError={() => setHasError(true)}
      />
    </>
  );
}
