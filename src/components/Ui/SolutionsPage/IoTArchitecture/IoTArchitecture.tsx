import { Cog, Radio, Router, CloudCog, LineChart } from "lucide-react";
import SectionHeading from "@/src/components/Common/SectionHeading/SectionHeading";
import FlowDiagram from "@/src/components/Common/FlowDiagram/FlowDiagram";

const NODES = [
  { label: "Machines", icon: Cog },
  { label: "Sensors", icon: Radio },
  { label: "Edge Gateway", icon: Router },
  { label: "Cloud", icon: CloudCog },
  { label: "Analytics", icon: LineChart },
];

const FEATURES = [
  "Real-time monitoring",
  "Sensor integration",
  "Machine connectivity",
  "Asset tracking",
  "Environmental monitoring",
  "Remote control",
];

const IoTArchitecture = () => {
  return (
    <section id="iot" className="scroll-mt-24 py-16 md:py-24 bg-brand-50/40">
      <div className="container">
        <SectionHeading eyebrow="Connectivity" title="Industrial IoT" />

        <div className="mt-12">
          <FlowDiagram nodes={NODES} orientation="horizontal" />
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {FEATURES.map((f) => (
            <div
              key={f}
              className="rounded-xl border border-navy-900/8 bg-white px-4 py-3.5 text-center text-sm font-semibold text-navy-900"
            >
              {f}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IoTArchitecture;
