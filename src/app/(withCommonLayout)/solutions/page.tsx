import type { Metadata } from "next";
import PageHero from "@/src/components/Shared/PageHero/PageHero";
import SolutionsNav from "@/src/components/Ui/SolutionsPage/SolutionsNav/SolutionsNav";
import IoTArchitecture from "@/src/components/Ui/SolutionsPage/IoTArchitecture/IoTArchitecture";
import DigitalFactory from "@/src/components/Ui/SolutionsPage/DigitalFactory/DigitalFactory";
import FeatureSplit from "@/src/components/Common/FeatureSplit/FeatureSplit";
import FinalCta from "@/src/components/Common/FinalCta/FinalCta";
import { unsplash, IMAGES } from "@/src/constants/images";

export const metadata: Metadata = {
  title: "Solutions",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Intelligent Solutions for Modern Manufacturing"
        subtitle="From connected machines to AI-powered decision making, our solutions help manufacturers automate, optimize, and scale."
        image={unsplash(IMAGES.automationTech, 1600)}
        alt="Automated manufacturing control system"
      />

      <SolutionsNav />

      <FeatureSplit
        id="automation"
        eyebrow="Intelligent Automation"
        title="Automate Processes. Improve Performance."
        features={[
          "Automated workflows",
          "PLC integration",
          "Robotic process automation",
          "Machine control",
          "Production scheduling",
          "Automated material handling",
        ]}
        benefits={[
          "Reduced manual work",
          "Higher productivity",
          "Consistent operations",
          "Lower operating costs",
        ]}
        image={IMAGES.roboticArmClose}
        imageAlt="Robotic arm performing automated assembly"
      />

      <IoTArchitecture />

      <FeatureSplit
        id="ai"
        eyebrow="AI & Predictive Intelligence"
        title="Turn Manufacturing Data Into Intelligence"
        features={[
          "Predictive analytics",
          "Machine learning",
          "Anomaly detection",
          "Demand forecasting",
          "Production optimization",
          "Failure prediction",
        ]}
        image={IMAGES.controlRoom}
        imageAlt="Engineers reviewing AI-driven production dashboards"
        reverse
      />

      <FeatureSplit
        id="vision"
        eyebrow="Smart Quality Inspection"
        title="Catch Defects Before They Ship"
        features={[
          "Defect detection",
          "Product classification",
          "Automated inspection",
          "Image recognition",
          "Quality scoring",
          "Real-time alerts",
        ]}
        resultCallout="Detect defects faster and maintain consistent product quality."
        image={IMAGES.circuitMacro}
        imageAlt="Computer vision inspecting a circuit board"
        tinted
      />

      <FeatureSplit
        id="robotics"
        eyebrow="Robotics & Automation"
        title="Robotic Systems Built for the Factory Floor"
        features={[
          "Robotic assembly",
          "Pick & place",
          "Packaging automation",
          "Welding automation",
          "Material handling",
          "Autonomous mobile robots",
        ]}
        image={IMAGES.roboticArmAlt}
        imageAlt="Autonomous robotic arms on a production line"
        reverse
      />

      <DigitalFactory />

      <FinalCta
        title="Let's Build Your Intelligent Manufacturing System"
        description="Talk to our team about the right mix of automation, IoT, and AI for your factory."
        primary={{ label: "Book a Consultation", href: "/about#contact" }}
        secondary={{ label: "Request a Demo", href: "/about#contact" }}
      />
    </>
  );
}
