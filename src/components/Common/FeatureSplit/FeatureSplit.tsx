import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { unsplash } from "@/src/constants/images";

interface FeatureSplitProps {
  eyebrow?: string;
  title: string;
  description?: string;
  features: string[];
  benefits?: string[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
  resultCallout?: string;
  id?: string;
  tinted?: boolean;
}

const FeatureSplit: React.FC<FeatureSplitProps> = ({
  eyebrow,
  title,
  description,
  features,
  benefits,
  image,
  imageAlt,
  reverse = false,
  resultCallout,
  id,
  tinted = false,
}) => {
  return (
    <section id={id} className={`scroll-mt-24 py-16 md:py-24 ${tinted ? "bg-brand-50/40" : "bg-white"}`}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={reverse ? "lg:order-2" : ""}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={unsplash(image, 900)}
                alt={imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className={reverse ? "lg:order-1" : ""}>
            {eyebrow && (
              <span className="inline-flex rounded-full bg-brand-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-brand-700">
                {eyebrow}
              </span>
            )}
            <h2 className="mt-4 text-2xl md:text-3xl font-bold text-navy-900 leading-tight">
              {title}
            </h2>
            {description && (
              <p className="mt-3 text-base text-navy-500/75 leading-relaxed">
                {description}
              </p>
            )}

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm font-medium text-navy-900">
                  <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-brand-600" />
                  {f}
                </li>
              ))}
            </ul>

            {benefits && (
              <div className="mt-6 rounded-xl border border-brand-100 bg-white p-5">
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-700">
                  Benefits
                </h3>
                <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                  {benefits.map((b) => (
                    <li key={b} className="text-sm text-navy-500/80">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {resultCallout && (
              <p className="mt-6 rounded-xl bg-navy-900 px-5 py-4 text-sm font-semibold text-white">
                {resultCallout}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSplit;
