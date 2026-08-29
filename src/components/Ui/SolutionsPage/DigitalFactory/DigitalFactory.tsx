import { Gauge, Activity, Wrench, ScanEye, Zap, Package } from "lucide-react";
import SectionHeading from "@/src/components/Common/SectionHeading/SectionHeading";

const KPIS = [
  { icon: Gauge, label: "Production KPIs", value: "98.4%" },
  { icon: Activity, label: "OEE", value: "91.2%" },
  { icon: Wrench, label: "Machine Status", value: "97.8%" },
  { icon: ScanEye, label: "Downtime", value: "-40%" },
  { icon: Zap, label: "Quality Metrics", value: "99.1%" },
  { icon: Package, label: "Energy Consumption", value: "-20%" },
];

const DigitalFactory = () => {
  return (
    <section id="analytics" className="scroll-mt-24 py-16 md:py-24 bg-navy-900">
      <div className="container">
        <SectionHeading
          eyebrow="Analytics & Digital Factory"
          title="Every Metric, In One Place"
          light
        />

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {KPIS.map(({ icon: Icon, label, value }) => (
            <div key={label} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <Icon size={20} className="text-brand-300" />
              <div className="mt-3 text-2xl font-extrabold text-white">{value}</div>
              <div className="mt-1 text-xs text-white/60">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalFactory;
