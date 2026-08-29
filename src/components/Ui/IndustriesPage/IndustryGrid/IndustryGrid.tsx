import { CheckCircle2 } from "lucide-react";
import SectionHeading from "@/src/components/Common/SectionHeading/SectionHeading";

const INDUSTRIES = [
  {
    id: "automotive",
    name: "Automotive",
    solutions: ["Robotic assembly", "Computer vision", "Predictive maintenance", "Automated inspection"],
  },
  {
    id: "electronics",
    name: "Electronics",
    solutions: ["Precision automation", "PCB inspection", "Component tracking", "Quality control"],
  },
  {
    id: "food-beverage",
    name: "Food & Beverage",
    solutions: ["Packaging automation", "Quality inspection", "Production monitoring", "Cold-chain monitoring"],
  },
  {
    id: "pharmaceuticals",
    name: "Pharmaceuticals",
    solutions: ["Automated production", "Compliance monitoring", "Quality control", "Batch tracking"],
  },
  {
    id: "textile",
    name: "Textile & Apparel",
    solutions: ["Production monitoring", "Fabric inspection", "Inventory automation", "Quality control"],
  },
  {
    id: "packaging",
    name: "Packaging",
    solutions: ["Robotic packaging", "Label inspection", "Sorting", "Material handling"],
  },
  {
    id: "chemicals",
    name: "Chemicals",
    solutions: ["Process automation", "Safety monitoring", "Predictive maintenance", "Environmental monitoring"],
  },
  {
    id: "heavy-manufacturing",
    name: "Heavy Manufacturing",
    solutions: ["Equipment monitoring", "Robotics", "Asset tracking", "Industrial automation"],
  },
];

const IndustryGrid = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <SectionHeading eyebrow="Industries" title="Solutions Built for Your Industry" />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((industry) => (
            <div
              key={industry.name}
              id={industry.id}
              className="scroll-mt-24 rounded-2xl border border-navy-900/8 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md hover:border-brand-200"
            >
              <h3 className="text-base font-bold text-navy-900">{industry.name}</h3>
              <ul className="mt-4 space-y-2">
                {industry.solutions.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-xs text-navy-500/75">
                    <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-brand-500" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryGrid;
