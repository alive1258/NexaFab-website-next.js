import { Target, Eye } from "lucide-react";
import SectionHeading from "@/src/components/Common/SectionHeading/SectionHeading";

const MissionVision = () => {
  return (
    <section id="mission" className="scroll-mt-24 py-16 md:py-24 bg-brand-50/40">
      <div className="container">
        <SectionHeading eyebrow="Purpose" title="Mission & Vision" />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-navy-900 p-8">
            <Target size={28} className="text-brand-300" />
            <h3 className="mt-4 text-xl font-bold text-white">Our Mission</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Make advanced manufacturing automation accessible, scalable, and
              practical for modern businesses.
            </p>
          </div>
          <div className="rounded-2xl bg-brand-600 p-8">
            <Eye size={28} className="text-white" />
            <h3 className="mt-4 text-xl font-bold text-white">Our Vision</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/85">
              Create a world where every factory can operate intelligently,
              efficiently, and sustainably.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
