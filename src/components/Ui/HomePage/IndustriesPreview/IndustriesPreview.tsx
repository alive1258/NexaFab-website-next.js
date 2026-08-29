import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/src/components/Common/SectionHeading/SectionHeading";
import { unsplash, IMAGES } from "@/src/constants/images";

const INDUSTRIES = [
  { name: "Automotive", image: IMAGES.assemblyLine, description: "Robotic assembly and automated inspection at scale." },
  { name: "Electronics", image: IMAGES.circuitMacro, description: "Precision automation for PCB and component lines." },
  { name: "Food & Beverage", image: IMAGES.factoryAlt2, description: "Packaging automation and cold-chain monitoring." },
  { name: "Pharmaceuticals", image: IMAGES.industrialAlt2, description: "Compliance-ready automated production and tracking." },
  { name: "Textile & Apparel", image: IMAGES.factoryAlt, description: "Production monitoring and fabric inspection." },
  { name: "Consumer Goods", image: IMAGES.warehouseAlt, description: "Robotic packaging and sorting automation." },
  { name: "Heavy Manufacturing", image: IMAGES.industrialMachinery, description: "Equipment monitoring and industrial robotics." },
  { name: "Packaging", image: IMAGES.factoryMachinery, description: "Label inspection, sorting, and material handling." },
];

const IndustriesPreview = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container">
        <SectionHeading eyebrow="Industries" title="Industries We Transform" />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((industry) => (
            <Link
              key={industry.name}
              href="/industries"
              className="group relative overflow-hidden rounded-2xl aspect-[4/5]"
            >
              <Image
                src={unsplash(industry.image, 600)}
                alt={`${industry.name} manufacturing`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="text-lg font-bold text-white">{industry.name}</h3>
                <p className="mt-1 text-xs text-white/70 leading-relaxed">
                  {industry.description}
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-300">
                  Explore Industry
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesPreview;
