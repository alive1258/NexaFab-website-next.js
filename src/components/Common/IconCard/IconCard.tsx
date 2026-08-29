import React from "react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface IconCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: string;
  href?: string;
  linkLabel?: string;
  variant?: "light" | "dark";
  className?: string;
}

const IconCard: React.FC<IconCardProps> = ({
  icon: Icon,
  title,
  description,
  index,
  href,
  linkLabel = "Learn More",
  variant = "light",
  className = "",
}) => {
  const isDark = variant === "dark";

  return (
    <div
      className={`group relative flex flex-col gap-4 rounded-2xl p-6 transition-all duration-300 ${
        isDark
          ? "bg-white/5 border border-white/10 hover:border-brand-400/40 hover:bg-white/[0.07]"
          : "bg-white border border-navy-900/8 shadow-[0_1px_2px_rgba(10,15,26,0.04)] hover:-translate-y-1 hover:shadow-lg hover:border-brand-200"
      } ${className}`}
    >
      {index && (
        <span
          className={`absolute top-5 right-6 text-xs font-bold tracking-widest ${
            isDark ? "text-white/20" : "text-navy-900/10"
          }`}
        >
          {index}
        </span>
      )}
      <div
        className={`flex items-center justify-center w-12 h-12 rounded-xl ${
          isDark ? "bg-brand-500/15 text-brand-300" : "bg-brand-50 text-brand-600"
        }`}
      >
        <Icon size={22} strokeWidth={2} />
      </div>
      <div>
        <h3
          className={`text-lg font-bold ${isDark ? "text-white" : "text-navy-900"}`}
        >
          {title}
        </h3>
        <p
          className={`mt-2 text-sm leading-relaxed ${
            isDark ? "text-white/60" : "text-navy-500/75"
          }`}
        >
          {description}
        </p>
      </div>
      {href && (
        <Link
          href={href}
          className={`mt-auto inline-flex items-center gap-1.5 text-sm font-semibold transition ${
            isDark
              ? "text-brand-300 hover:text-brand-200"
              : "text-brand-600 hover:text-brand-700"
          }`}
        >
          {linkLabel}
          <ArrowRight
            size={15}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      )}
    </div>
  );
};

export default IconCard;
