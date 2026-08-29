import type { Metadata } from "next";
import Hero from "@/src/components/Ui/HomePage/Hero/Hero";
import Challenges from "@/src/components/Ui/HomePage/Challenges/Challenges";
import SolutionsOverview from "@/src/components/Ui/HomePage/SolutionsOverview/SolutionsOverview";
import HowItWorks from "@/src/components/Ui/HomePage/HowItWorks/HowItWorks";
import Capabilities from "@/src/components/Ui/HomePage/Capabilities/Capabilities";
import Impact from "@/src/components/Ui/HomePage/Impact/Impact";
import IndustriesPreview from "@/src/components/Ui/HomePage/IndustriesPreview/IndustriesPreview";
import CaseStudy from "@/src/components/Ui/HomePage/CaseStudy/CaseStudy";
import FinalCta from "@/src/components/Common/FinalCta/FinalCta";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Challenges />
      <SolutionsOverview />
      <HowItWorks />
      <Capabilities />
      <Impact />
      <IndustriesPreview />
      <CaseStudy />
      <FinalCta
        title="Ready to Build a Smarter Factory?"
        description="Discover how intelligent automation can transform your manufacturing operations."
        primary={{ label: "Schedule a Consultation", href: "/about#contact" }}
        secondary={{ label: "Explore Our Solutions", href: "/solutions" }}
      />
    </>
  );
}
