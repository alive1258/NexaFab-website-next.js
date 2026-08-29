import { Cable, Database, BrainCircuit, AlertTriangle, Cog, LineChart, ChevronRight } from "lucide-react";
import SectionHeading from "@/src/components/Common/SectionHeading/SectionHeading";

const STEPS = [
  { icon: Cable, title: "Connect", description: "Connect machines, equipment, and sensors." },
  { icon: Database, title: "Collect", description: "Collect production data in real time." },
  { icon: BrainCircuit, title: "Analyze", description: "AI analyzes operational patterns." },
  { icon: AlertTriangle, title: "Predict", description: "Detect potential problems before they happen." },
  { icon: Cog, title: "Automate", description: "Automatically optimize manufacturing processes." },
  { icon: LineChart, title: "Improve", description: "Increase productivity, quality, and efficiency." },
];

const HowItWorks = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container">
        <SectionHeading
          eyebrow="The Process"
          title="How Intelligent Manufacturing Works"
          description="Machines → Sensors → Data → AI → Automation → Insights"
        />

        <div className="mt-14 flex flex-col lg:flex-row items-stretch gap-3">
          {STEPS.map((step, i) => (
            <div key={step.title} className="flex flex-col lg:flex-row items-center gap-3 flex-1">
              <div className="w-full flex-1 rounded-2xl border border-navy-900/8 bg-white p-6 text-center shadow-sm">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white font-bold text-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <step.icon size={22} className="mx-auto mt-4 text-brand-600" />
                <h3 className="mt-3 text-base font-bold text-navy-900">{step.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-navy-500/70">
                  {step.description}
                </p>
              </div>

              {i < STEPS.length - 1 && (
                <ChevronRight
                  size={20}
                  className="shrink-0 rotate-90 lg:rotate-0 text-brand-300"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
