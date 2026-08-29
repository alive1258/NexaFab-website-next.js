import Image from "next/image";
import SectionHeading from "@/src/components/Common/SectionHeading/SectionHeading";
import { unsplash, IMAGES } from "@/src/constants/images";

const CASES = [
  { title: "Automotive Factory", stat: "40% downtime reduction", image: IMAGES.assemblyLine },
  { title: "Food Manufacturing", stat: "32% productivity increase", image: IMAGES.factoryAlt2 },
  { title: "Electronics Production", stat: "35% fewer quality defects", image: IMAGES.circuitMacro },
];

const CaseStudiesMini = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <SectionHeading eyebrow="Proof" title="Case Studies" />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {CASES.map((c) => (
            <div key={c.title} className="overflow-hidden rounded-2xl border border-navy-900/8 shadow-sm">
              <div className="relative h-48">
                <Image
                  src={unsplash(c.image, 600)}
                  alt={c.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-navy-900">{c.title}</h3>
                <p className="mt-1.5 text-sm font-semibold text-brand-600">{c.stat}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesMini;
