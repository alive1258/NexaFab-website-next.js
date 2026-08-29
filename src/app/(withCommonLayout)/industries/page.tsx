import type { Metadata } from "next";
import { Cog, Radio, Network, Cpu, BrainCircuit, LineChart, Building2 } from "lucide-react";
import { ShieldCheck, Layers, Sparkles, Eye, Puzzle, Database } from "lucide-react";
import PageHero from "@/src/components/Shared/PageHero/PageHero";
import IndustryGrid from "@/src/components/Ui/IndustriesPage/IndustryGrid/IndustryGrid";
import IndustryTabs from "@/src/components/Ui/IndustriesPage/IndustryTabs/IndustryTabs";
import OperationalIntelligence from "@/src/components/Ui/IndustriesPage/OperationalIntelligence/OperationalIntelligence";
import CaseStudiesMini from "@/src/components/Ui/IndustriesPage/CaseStudiesMini/CaseStudiesMini";
import FeatureSplit from "@/src/components/Common/FeatureSplit/FeatureSplit";
import FlowDiagram from "@/src/components/Common/FlowDiagram/FlowDiagram";
import SectionHeading from "@/src/components/Common/SectionHeading/SectionHeading";
import WhyUsGrid from "@/src/components/Common/WhyUsGrid/WhyUsGrid";
import FinalCta from "@/src/components/Common/FinalCta/FinalCta";
import { unsplash, IMAGES } from "@/src/constants/images";

export const metadata: Metadata = {
  title: "Industries",
};

const CONNECTED_FACTORY_NODES = [
  { label: "Machines", icon: Cog },
  { label: "Sensors", icon: Radio },
  { label: "Industrial Network", icon: Network },
  { label: "Edge Computing", icon: Cpu },
  { label: "AI Platform", icon: BrainCircuit },
  { label: "Analytics Dashboard", icon: LineChart },
  { label: "Business Decisions", icon: Building2 },
];

const WHY_US = [
  { icon: ShieldCheck, title: "Industry Expertise" },
  { icon: Layers, title: "Scalable Architecture" },
  { icon: Sparkles, title: "AI-Powered Solutions" },
  { icon: Eye, title: "Real-Time Visibility" },
  { icon: Puzzle, title: "Flexible Integration" },
  { icon: Database, title: "Data-Driven Optimization" },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Smart Manufacturing Across Industries"
        subtitle="Our intelligent automation solutions adapt to the unique requirements of different manufacturing environments."
        image={unsplash(IMAGES.factoryInterior, 1600)}
        alt="Wide view of a modern manufacturing facility"
      />

      <IndustryGrid />
      <IndustryTabs />

      <FeatureSplit
        eyebrow="Featured Example"
        title="Automotive Smart Factory"
        description="Connect assembly lines, robots, inspection systems, and production data into one intelligent ecosystem."
        features={[
          "Robotic assembly integration",
          "Computer-vision inspection",
          "Predictive maintenance",
          "Real-time production data",
        ]}
        image={IMAGES.roboticArmAlt}
        imageAlt="Automotive assembly line with robotic arms"
        tinted
      />

      <section className="py-16 md:py-24 bg-navy-900">
        <div className="container">
          <SectionHeading eyebrow="Architecture" title="Connected Factory" light />
          <div className="mt-12">
            <FlowDiagram nodes={CONNECTED_FACTORY_NODES} orientation="vertical" light />
          </div>
        </div>
      </section>

      <OperationalIntelligence />
      <CaseStudiesMini />
      <WhyUsGrid eyebrow="Why Us" title="Why Choose Us" items={WHY_US} />

      <FinalCta
        title="Bring Intelligent Automation to Your Industry"
        description="Talk to an automation expert about the right approach for your factory floor."
        primary={{ label: "Talk to an Automation Expert", href: "/about#contact" }}
      />
    </>
  );
}
