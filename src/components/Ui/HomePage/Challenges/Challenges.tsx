import {
  Gauge,
  Wrench,
  DatabaseZap,
  ScanSearch,
  TrendingDown,
  EyeOff,
} from "lucide-react";
import SectionHeading from "@/src/components/Common/SectionHeading/SectionHeading";
import IconCard from "@/src/components/Common/IconCard/IconCard";

const CHALLENGES = [
  {
    index: "01",
    icon: Gauge,
    title: "Operational Inefficiency",
    description: "Manual processes slow production and increase operational costs.",
  },
  {
    index: "02",
    icon: Wrench,
    title: "Equipment Downtime",
    description: "Unexpected machine failures can interrupt production.",
  },
  {
    index: "03",
    icon: DatabaseZap,
    title: "Data Silos",
    description: "Valuable production data remains disconnected across systems.",
  },
  {
    index: "04",
    icon: ScanSearch,
    title: "Quality Issues",
    description: "Manual inspection can lead to inconsistent quality.",
  },
  {
    index: "05",
    icon: TrendingDown,
    title: "Rising Costs",
    description: "Labor, energy, and maintenance costs continue to increase.",
  },
  {
    index: "06",
    icon: EyeOff,
    title: "Limited Visibility",
    description: "Manufacturers need real-time insight into operations.",
  },
];

const Challenges = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container">
        <SectionHeading
          eyebrow="The Problem"
          title="Modern Manufacturing Has New Challenges"
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CHALLENGES.map((item) => (
            <IconCard key={item.index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenges;
