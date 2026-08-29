import {
  Bot,
  Wifi,
  Wrench,
  ScanEye,
  Cpu,
  Activity,
  Boxes,
  Zap,
} from "lucide-react";
import SectionHeading from "@/src/components/Common/SectionHeading/SectionHeading";
import IconCard from "@/src/components/Common/IconCard/IconCard";

const SOLUTIONS = [
  {
    icon: Bot,
    title: "AI-Powered Automation",
    description: "Automate repetitive workflows with intelligent, adaptive control systems.",
  },
  {
    icon: Wifi,
    title: "Industrial IoT",
    description: "Connect machines and sensors into one real-time data network.",
  },
  {
    icon: Wrench,
    title: "Predictive Maintenance",
    description: "Detect failures before they happen and cut unplanned downtime.",
  },
  {
    icon: ScanEye,
    title: "Smart Quality Inspection",
    description: "Computer vision catches defects faster than manual review.",
  },
  {
    icon: Cpu,
    title: "Robotics & Machine Automation",
    description: "Deploy robotic arms and AMRs for assembly, handling, and packaging.",
  },
  {
    icon: Activity,
    title: "Real-Time Production Monitoring",
    description: "Live dashboards for OEE, throughput, and machine health.",
  },
  {
    icon: Boxes,
    title: "Digital Twin",
    description: "Simulate and optimize your factory before changing the floor.",
  },
  {
    icon: Zap,
    title: "Energy Optimization",
    description: "Cut consumption with AI-driven energy management.",
  },
];

const SolutionsOverview = () => {
  return (
    <section id="solutions" className="py-20 md:py-28 bg-brand-50/40">
      <div className="container">
        <SectionHeading
          eyebrow="What We Offer"
          title="One Intelligent Platform. Complete Manufacturing Visibility."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOLUTIONS.map((item) => (
            <IconCard key={item.title} {...item} href="/solutions" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsOverview;
