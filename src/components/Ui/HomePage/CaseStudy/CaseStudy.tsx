import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/src/components/Common/SectionHeading/SectionHeading";
import { unsplash, IMAGES } from "@/src/constants/images";

const RESULTS = [
  "42% less downtime",
  "28% higher production efficiency",
  "31% reduction in maintenance costs",
];

const CaseStudy = () => {
  return (
    <section id="case-study" className="scroll-mt-24 py-20 md:py-28 bg-brand-50/40">
      <div className="container">
        <SectionHeading eyebrow="Success Story" title="Real Results from a Real Factory" />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-3xl bg-white shadow-xl">
          <div className="relative min-h-[280px] lg:min-h-full">
            <Image
              src={unsplash(IMAGES.manufacturingPlant, 1000)}
              alt="Smart factory production floor"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="p-8 md:p-12">
            <span className="inline-flex rounded-full bg-brand-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-brand-700">
              Case Study
            </span>
            <h3 className="mt-4 text-2xl md:text-3xl font-bold text-navy-900">
              Smart Factory Transformation
            </h3>

            <div className="mt-6 space-y-4">
              <div>
                <h4 className="text-sm font-bold text-navy-900">Challenge</h4>
                <p className="mt-1 text-sm text-navy-500/75 leading-relaxed">
                  Production downtime and inefficient manual monitoring were
                  eating into throughput and margins.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-navy-900">Solution</h4>
                <p className="mt-1 text-sm text-navy-500/75 leading-relaxed">
                  AI-powered predictive maintenance combined with plant-wide IoT
                  monitoring and real-time dashboards.
                </p>
              </div>
            </div>

            <ul className="mt-6 space-y-2.5">
              {RESULTS.map((result) => (
                <li key={result} className="flex items-center gap-2.5 text-sm font-semibold text-navy-900">
                  <CheckCircle2 size={17} className="shrink-0 text-brand-600" />
                  {result}
                </li>
              ))}
            </ul>

            <Link
              href="/industries"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
            >
              View Case Study
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
