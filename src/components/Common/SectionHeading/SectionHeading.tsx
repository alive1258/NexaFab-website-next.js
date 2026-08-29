import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className = "",
}) => {
  const isCenter = align === "center";

  return (
    <div
      className={`${isCenter ? "text-center mx-auto" : "text-left"} max-w-2xl ${
        isCenter ? "" : "max-w-none"
      } ${className}`}
    >
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-widest ${
            light
              ? "bg-white/10 text-brand-300 border border-white/10"
              : "bg-brand-50 text-brand-700"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-bold leading-tight text-3xl md:text-4xl lg:text-[2.75rem] mt-4 ${
          light ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed ${
            light ? "text-white/70" : "text-navy-500/80"
          } ${isCenter ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
