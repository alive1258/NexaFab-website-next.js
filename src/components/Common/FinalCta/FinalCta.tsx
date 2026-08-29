import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface FinalCtaProps {
  title: string;
  description: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}

const FinalCta: React.FC<FinalCtaProps> = ({ title, description, primary, secondary }) => {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 md:py-24">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#2ecca6 1px, transparent 1px), linear-gradient(90deg, #2ecca6 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute -top-32 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl" />

      <div className="container relative text-center">
        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white max-w-2xl mx-auto leading-tight">
          {title}
        </h2>
        <p className="mt-5 max-w-xl mx-auto text-white/60 text-base md:text-lg leading-relaxed">
          {description}
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={primary.href}
            className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-400"
          >
            {primary.label}
            <ArrowRight size={16} />
          </Link>
          {secondary && (
            <Link
              href={secondary.href}
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
