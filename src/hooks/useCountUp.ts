"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animates a number from 0 → target once the returned ref scrolls into
 * view. Re-runs are prevented after the first trigger.
 */
export function useCountUp(target: number, durationMs = 1600) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasRun.current) return;
        hasRun.current = true;

        const start = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - start) / durationMs, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(Math.round(target * eased));
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, durationMs]);

  return { ref, value };
}
