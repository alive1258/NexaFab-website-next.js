import type { Metadata } from "next";
import {
  Factory,
  Radio,
  Router,
  Cloud,
  BrainCircuit,
  LayoutDashboard,
  TrendingUp,
  AlertTriangle,
  ScanEye,
  LineChart,
  Sparkles,
  Cpu,
  KeyRound,
  UserCog,
  Lock,
  ShieldAlert,
  Eye,
  DatabaseBackup,
  ServerCog,
} from "lucide-react";
import PageHero from "@/src/components/Shared/PageHero/PageHero";
import TechStack from "@/src/components/Ui/TechnologyPage/TechStack/TechStack";
import DigitalTwin from "@/src/components/Ui/TechnologyPage/DigitalTwin/DigitalTwin";
import DataAnalytics from "@/src/components/Ui/TechnologyPage/DataAnalytics/DataAnalytics";
import Integration from "@/src/components/Ui/TechnologyPage/Integration/Integration";
import SectionHeading from "@/src/components/Common/SectionHeading/SectionHeading";
import FlowDiagram from "@/src/components/Common/FlowDiagram/FlowDiagram";
import IconCard from "@/src/components/Common/IconCard/IconCard";
import WhyUsGrid from "@/src/components/Common/WhyUsGrid/WhyUsGrid";
import FinalCta from "@/src/components/Common/FinalCta/FinalCta";
import { unsplash, IMAGES } from "@/src/constants/images";

export const metadata: Metadata = {
  title: "Technology",
};

const ARCHITECTURE_NODES = [
  { label: "Factory Machines", icon: Factory },
  { label: "Sensors & Controllers", icon: Radio },
  { label: "Edge Gateway", icon: Router },
  { label: "Cloud / Data Platform", icon: Cloud },
  { label: "AI & Analytics Engine", icon: BrainCircuit },
  { label: "Smart Dashboard", icon: LayoutDashboard },
];

const AI_CAPABILITIES = [
  { icon: TrendingUp, title: "Predictive Modeling", description: "Forecast outcomes from historical and live production data." },
  { icon: AlertTriangle, title: "Anomaly Detection", description: "Spot unusual machine behavior before it becomes downtime." },
  { icon: ScanEye, title: "Pattern Recognition", description: "Identify recurring issues hidden across production runs." },
  { icon: LineChart, title: "Demand Forecasting", description: "Plan production around predicted demand shifts." },
  { icon: Sparkles, title: "Process Optimization", description: "Continuously tune parameters for peak efficiency." },
  { icon: Cpu, title: "Intelligent Decision Support", description: "Give operators AI-backed recommendations in real time." },
];

const SECURITY = [
  { icon: KeyRound, title: "Secure Authentication" },
  { icon: UserCog, title: "Role-Based Access" },
  { icon: Lock, title: "Data Encryption" },
  { icon: ShieldAlert, title: "Network Security" },
  { icon: Eye, title: "Monitoring" },
  { icon: DatabaseBackup, title: "Backup & Recovery" },
  { icon: ServerCog, title: "High Availability" },
];

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title="Technology Powering the Intelligent Factory"
        subtitle="Connect machines, collect data, apply intelligence, and automate decisions with our modern industrial technology stack."
        image={unsplash(IMAGES.serverRoom, 1600)}
        alt="Data center powering industrial AI systems"
      />

      <TechStack />

      <section className="py-16 md:py-24 bg-navy-900">
        <div className="container">
          <SectionHeading eyebrow="Architecture" title="IoT Architecture" light />
          <div className="mt-12">
            <FlowDiagram nodes={ARCHITECTURE_NODES} orientation="vertical" light />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <SectionHeading eyebrow="Artificial Intelligence" title="AI That Understands Your Factory" />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {AI_CAPABILITIES.map((item) => (
              <IconCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <DigitalTwin />
      <DataAnalytics />
      <Integration />

      <WhyUsGrid eyebrow="Security" title="Security & Reliability" items={SECURITY} light />

      <FinalCta
        title="Ready to Modernize Your Manufacturing Technology?"
        description="Let's map your current systems and design the right automation architecture."
        primary={{ label: "Discuss Your Architecture", href: "/about#contact" }}
      />
    </>
  );
}
