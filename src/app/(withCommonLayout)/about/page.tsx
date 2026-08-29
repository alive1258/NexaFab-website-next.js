import type { Metadata } from "next";
import { Factory, Cpu, Layers, Database, Workflow, Handshake } from "lucide-react";
import PageHero from "@/src/components/Shared/PageHero/PageHero";
import WhoWeAre from "@/src/components/Ui/AboutPage/WhoWeAre/WhoWeAre";
import MissionVision from "@/src/components/Ui/AboutPage/MissionVision/MissionVision";
import ApproachTimeline from "@/src/components/Ui/AboutPage/ApproachTimeline/ApproachTimeline";
import ContactSection from "@/src/components/Ui/AboutPage/ContactSection/ContactSection";
import SectionHeading from "@/src/components/Common/SectionHeading/SectionHeading";
import StatCounter from "@/src/components/Common/StatCounter/StatCounter";
import WhyUsGrid from "@/src/components/Common/WhyUsGrid/WhyUsGrid";
import FinalCta from "@/src/components/Common/FinalCta/FinalCta";
import { unsplash, IMAGES } from "@/src/constants/images";

export const metadata: Metadata = {
  title: "About & Contact",
};

const WHY_US = [
  { icon: Factory, title: "Manufacturing Expertise" },
  { icon: Cpu, title: "Advanced Technology" },
  { icon: Layers, title: "Scalable Solutions" },
  { icon: Database, title: "Data-Driven Decisions" },
  { icon: Workflow, title: "End-to-End Implementation" },
  { icon: Handshake, title: "Long-Term Partnership" },
];

const NUMBERS = [
  { value: 50, suffix: "+", label: "Automation Projects" },
  { value: 20, suffix: "+", label: "Manufacturing Clients" },
  { value: 10, suffix: "+", label: "Industries Served" },
  { value: 99, suffix: ".9%", label: "System Reliability" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Building the Future of Manufacturing"
        subtitle="We help manufacturers move from traditional operations to intelligent, connected, and automated factories."
        image={unsplash(IMAGES.factoryIndustrial, 1600)}
        alt="Modern industrial manufacturing facility"
      />

      <WhoWeAre />
      <MissionVision />
      <ApproachTimeline />
      <WhyUsGrid eyebrow="Why Us" title="Why Manufacturers Choose Us" items={WHY_US} />

      <section className="py-16 md:py-24 bg-brand-600">
        <div className="container">
          <SectionHeading eyebrow="By the Numbers" title="Company Numbers" light />
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {NUMBERS.map((n) => (
              <StatCounter key={n.label} {...n} light />
            ))}
          </div>
        </div>
      </section>

      <ContactSection />

      <FinalCta
        title="The Future of Manufacturing Is Intelligent."
        description="Start your journey toward a smarter, more efficient, and more connected factory."
        primary={{ label: "Get Started", href: "#contact" }}
      />
    </>
  );
}
