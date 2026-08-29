import { Router, Wifi, Cloud, BrainCircuit } from "lucide-react";
import SectionHeading from "@/src/components/Common/SectionHeading/SectionHeading";

const STACK = [
  {
    icon: Router,
    title: "Edge",
    items: ["Industrial Gateways", "Edge Computing", "PLC Integration", "Local Processing"],
  },
  {
    icon: Wifi,
    title: "Connectivity",
    items: ["MQTT", "OPC UA", "Modbus", "Industrial Ethernet"],
  },
  {
    icon: Cloud,
    title: "Cloud",
    items: ["Cloud Infrastructure", "Data Storage", "APIs", "Microservices"],
  },
  {
    icon: BrainCircuit,
    title: "Intelligence",
    items: ["AI", "Machine Learning", "Computer Vision", "Predictive Analytics"],
  },
];

const TechStack = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <SectionHeading eyebrow="The Stack" title="Technology Stack" />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STACK.map(({ icon: Icon, title, items }) => (
            <div key={title} className="rounded-2xl border border-navy-900/8 bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-base font-bold text-navy-900">{title}</h3>
              <ul className="mt-3 space-y-1.5">
                {items.map((item) => (
                  <li key={item} className="text-sm text-navy-500/75">
                    {item}
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

export default TechStack;
