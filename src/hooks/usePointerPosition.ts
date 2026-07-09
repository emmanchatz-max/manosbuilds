"use client";

import { useEffect, useState } from "react";

type PointerPosition = {
  x: number;
  y: number;
};

const defaultPointer = { x: 0, y: 0 };

export function usePointerPosition() {
  const [pointer, setPointer] = useState<PointerPosition>(defaultPointer);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const width = window.innerWidth || 1;
      const height = window.innerHeight || 1;

      setPointer({
        x: (event.clientX / width) * 2 - 1,
        y: (event.clientY / height) * 2 - 1,
      });
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return pointer;
}
