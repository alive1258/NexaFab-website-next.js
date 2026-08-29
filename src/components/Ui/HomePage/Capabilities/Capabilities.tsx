import {
  BrainCircuit,
  Wifi,
  Bot,
  ScanEye,
  Cpu,
  Cloud,
  Activity,
  SlidersHorizontal,
  Boxes,
} from "lucide-react";
import SectionHeading from "@/src/components/Common/SectionHeading/SectionHeading";

const CAPABILITIES = [
  { icon: BrainCircuit, label: "AI & Machine Learning" },
  { icon: Wifi, label: "IoT Connectivity" },
  { icon: Bot, label: "Robotics" },
  { icon: ScanEye, label: "Computer Vision" },
  { icon: Cpu, label: "Edge Computing" },
  { icon: Cloud, label: "Cloud Platforms" },
  { icon: Activity, label: "Real-Time Analytics" },
  { icon: SlidersHorizontal, label: "Automation Control" },
  { icon: Boxes, label: "Digital Twins" },
];

const METRICS = [
  { label: "OEE", value: "91.2%" },
  { label: "Uptime", value: "99.9%" },
  { label: "Quality", value: "99.1%" },
  { label: "Output", value: "+35%" },
];

const Capabilities = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container">
        <SectionHeading eyebrow="Key Capabilities" title="Everything a Modern Factory Needs" />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* CAPABILITY GRID */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {CAPABILITIES.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center gap-3 rounded-xl border border-navy-900/8 bg-white p-5 text-center transition hover:border-brand-300 hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <Icon size={20} />
                </div>
                <span className="text-sm font-semibold text-navy-900">{label}</span>
              </div>
            ))}
          </div>

          {/* DASHBOARD VISUAL */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-navy-900 p-6 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-300">
                  Live Factory Dashboard
                </span>
                <span className="flex items-center gap-1.5 text-xs text-white/50">
                  <span className="h-2 w-2 rounded-full bg-brand-400 animate-pulse" />
                  Live
                </span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                {METRICS.map((m) => (
                  <div key={m.label} className="rounded-xl bg-white/5 p-4">
                    <div className="text-2xl font-extrabold text-white">{m.value}</div>
                    <div className="mt-1 text-xs text-white/50">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-end gap-1.5 h-20">
                {[40, 65, 50, 80, 60, 95, 70, 85, 55, 90, 75, 100].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-brand-600 to-brand-400"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
