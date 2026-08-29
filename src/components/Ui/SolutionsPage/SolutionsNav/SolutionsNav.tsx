import Link from "next/link";
import { Bot, Wifi, BrainCircuit, Wrench, ScanEye, Cpu, LineChart, Boxes } from "lucide-react";
import SectionHeading from "@/src/components/Common/SectionHeading/SectionHeading";

const SOLUTIONS = [
  { icon: Bot, label: "Intelligent Automation", href: "#automation" },
  { icon: Wifi, label: "Industrial IoT", href: "#iot" },
  { icon: BrainCircuit, label: "AI & Machine Learning", href: "#ai" },
  { icon: Wrench, label: "Predictive Maintenance", href: "#ai" },
  { icon: ScanEye, label: "Computer Vision", href: "#vision" },
  { icon: Cpu, label: "Robotics", href: "#robotics" },
  { icon: LineChart, label: "Smart Analytics", href: "#analytics" },
  { icon: Boxes, label: "Digital Twin", href: "#analytics" },
];

const SolutionsNav = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container">
        <SectionHeading eyebrow="Overview" title="A Complete Solution Suite" />

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {SOLUTIONS.map(({ icon: Icon, label, href }) => (
            <Link
              key={label}
              href={href}
              className="flex flex-col items-center gap-3 rounded-xl border border-navy-900/8 bg-white p-5 text-center transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                <Icon size={20} />
              </div>
              <span className="text-sm font-semibold text-navy-900">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsNav;
