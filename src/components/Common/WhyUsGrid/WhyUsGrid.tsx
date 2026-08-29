import type { LucideIcon } from "lucide-react";
import SectionHeading from "@/src/components/Common/SectionHeading/SectionHeading";

export interface WhyUsItem {
  icon: LucideIcon;
  title: string;
  description?: string;
}

interface WhyUsGridProps {
  eyebrow?: string;
  title: string;
  items: WhyUsItem[];
  light?: boolean;
}

const WhyUsGrid: React.FC<WhyUsGridProps> = ({ eyebrow, title, items, light = false }) => {
  return (
    <section className={`py-16 md:py-24 ${light ? "bg-navy-900" : "bg-white"}`}>
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={title} light={light} />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title: itemTitle, description }) => (
            <div
              key={itemTitle}
              className={`flex items-start gap-4 rounded-2xl p-6 ${
                light
                  ? "bg-white/5 border border-white/10"
                  : "bg-white border border-navy-900/8 shadow-sm"
              }`}
            >
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                  light ? "bg-brand-500/15 text-brand-300" : "bg-brand-50 text-brand-600"
                }`}
              >
                <Icon size={20} />
              </div>
              <div>
                <h3 className={`text-base font-bold ${light ? "text-white" : "text-navy-900"}`}>
                  {itemTitle}
                </h3>
                {description && (
                  <p className={`mt-1.5 text-sm leading-relaxed ${light ? "text-white/60" : "text-navy-500/75"}`}>
                    {description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsGrid;
