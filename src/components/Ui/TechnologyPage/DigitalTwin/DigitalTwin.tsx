import Image from "next/image";
import { ArrowLeftRight, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/src/components/Common/SectionHeading/SectionHeading";
import { unsplash, IMAGES } from "@/src/constants/images";

const FEATURES = [
  "Simulation",
  "Process optimization",
  "Predictive analysis",
  "Performance monitoring",
  "Scenario testing",
];

const DigitalTwin = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-50/40">
      <div className="container">
        <SectionHeading eyebrow="Digital Twin" title="A Living Model of Your Factory" />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-6">
          <div className="relative aspect-video overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={unsplash(IMAGES.factoryFloor, 800)}
              alt="Physical factory floor"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <span className="absolute bottom-3 left-3 rounded-full bg-navy-900/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
              Physical Factory
            </span>
          </div>

          <div className="flex justify-center py-2 lg:py-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-white">
              <ArrowLeftRight size={20} className="rotate-90 lg:rotate-0" />
            </div>
          </div>

          <div className="relative aspect-video overflow-hidden rounded-2xl shadow-lg ring-2 ring-brand-400/40">
            <Image
              src={unsplash(IMAGES.dataViz, 800)}
              alt="Digital twin simulation dashboard"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <span className="absolute bottom-3 left-3 rounded-full bg-brand-600/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
              Digital Twin
            </span>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {FEATURES.map((f) => (
            <span
              key={f}
              className="inline-flex items-center gap-2 rounded-full bg-white border border-navy-900/8 px-4 py-2 text-sm font-medium text-navy-900"
            >
              <CheckCircle2 size={15} className="text-brand-600" />
              {f}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalTwin;
