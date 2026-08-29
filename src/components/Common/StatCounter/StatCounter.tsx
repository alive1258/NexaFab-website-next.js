"use client";

import React from "react";
import { useCountUp } from "@/src/hooks/useCountUp";

interface StatCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  /** true = white text, for use on a dark/colored background */
  light?: boolean;
  className?: string;
}

const StatCounter: React.FC<StatCounterProps> = ({
  value,
  prefix = "",
  suffix = "",
  label,
  light = false,
  className = "",
}) => {
  const { ref, value: animated } = useCountUp(value);

  return (
    <div ref={ref} className={`text-center ${className}`}>
      <div
        className={`text-4xl md:text-5xl font-extrabold tabular-nums ${
          light ? "text-white" : "text-navy-900"
        }`}
      >
        {prefix}
        {animated}
        {suffix}
      </div>
      <div
        className={`mt-2 text-sm md:text-base font-medium ${
          light ? "text-white/60" : "text-navy-500/70"
        }`}
      >
        {label}
      </div>
    </div>
  );
};

export default StatCounter;
