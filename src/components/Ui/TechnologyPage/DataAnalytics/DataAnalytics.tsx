import { Gauge, Timer, Clock, PauseCircle, AlertOctagon, Zap, HeartPulse } from "lucide-react";
import SectionHeading from "@/src/components/Common/SectionHeading/SectionHeading";

const METRICS = [
  { icon: Gauge, label: "OEE" },
  { icon: Timer, label: "Throughput" },
  { icon: Clock, label: "Cycle Time" },
  { icon: PauseCircle, label: "Downtime" },
  { icon: AlertOctagon, label: "Scrap Rate" },
  { icon: Zap, label: "Energy Usage" },
  { icon: HeartPulse, label: "Machine Health" },
];

const DataAnalytics = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <SectionHeading eyebrow="Data & Analytics" title="Metrics That Matter, In Real Time" />

        <div className="mt-12 rounded-2xl bg-navy-900 p-6 md:p-8 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-300">
              Factory Analytics
            </span>
            <span className="flex items-center gap-1.5 text-xs text-white/50">
              <span className="h-2 w-2 rounded-full bg-brand-400 animate-pulse" />
              Live
            </span>
          </div>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {METRICS.map(({ icon: Icon, label }) => (
              <div key={label} className="rounded-xl bg-white/5 border border-white/10 p-4 text-center">
                <Icon size={18} className="mx-auto text-brand-300" />
                <span className="mt-2 block text-xs font-semibold text-white">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataAnalytics;
