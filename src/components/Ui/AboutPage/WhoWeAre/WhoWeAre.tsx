import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { unsplash, IMAGES } from "@/src/constants/images";
import { BRAND_NAME } from "@/src/constants/company";

const POINTS = [
  "A technology company focused on intelligent automation, IoT, AI, robotics, and smart manufacturing",
  "We build connected, data-driven systems that scale with your operation",
  "We serve manufacturers across automotive, electronics, food & beverage, pharma, and heavy industry",
  "What makes us different: end-to-end delivery, from architecture to the factory floor",
];

const WhoWeAre = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={unsplash(IMAGES.engineerTablet, 900)}
              alt="Engineer reviewing automation systems on a tablet"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <span className="inline-flex rounded-full bg-brand-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-brand-700">
              Who We Are
            </span>
            <h2 className="mt-4 text-2xl md:text-3xl font-bold text-navy-900 leading-tight">
              Building the Future of Manufacturing
            </h2>
            <p className="mt-4 text-base text-navy-500/75 leading-relaxed">
              We are {BRAND_NAME}, a technology company focused on intelligent
              automation, industrial IoT, AI, robotics, and smart
              manufacturing solutions.
            </p>

            <ul className="mt-6 space-y-3">
              {POINTS.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-navy-900">
                  <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-brand-600" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
