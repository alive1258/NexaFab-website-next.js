"use client";

import { useState } from "react";
import SectionHeading from "@/src/components/Common/SectionHeading/SectionHeading";

const TABS = [
  {
    name: "Automotive",
    challenge: "Complex assembly lines with high precision and throughput demands.",
    solution: "Robotic assembly cells paired with computer-vision quality checks.",
    result: "40% reduction in downtime and consistent first-pass yield.",
  },
  {
    name: "Food",
    challenge: "Strict hygiene and freshness windows across the cold chain.",
    solution: "Automated packaging lines with real-time cold-chain monitoring.",
    result: "32% higher production efficiency with fewer spoilage losses.",
  },
  {
    name: "Pharma",
    challenge: "Regulatory compliance and full batch traceability requirements.",
    solution: "Automated batch tracking with compliance-ready audit trails.",
    result: "Faster audits and zero compliance-related production stops.",
  },
  {
    name: "Textile",
    challenge: "Inconsistent fabric quality slipping through manual checks.",
    solution: "AI-driven fabric inspection integrated into the production line.",
    result: "Significantly fewer defective rolls reaching packaging.",
  },
  {
    name: "Electronics",
    challenge: "Micro-defects in PCBs are invisible to the naked eye.",
    solution: "High-resolution computer vision inspection at every station.",
    result: "35% fewer quality defects reaching final assembly.",
  },
];

const IndustryTabs = () => {
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  return (
    <section className="py-16 md:py-24 bg-brand-50/40">
      <div className="container">
        <SectionHeading eyebrow="Deep Dive" title="Every Industry Has Different Challenges" />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {TABS.map((t, i) => (
            <button
              key={t.name}
              type="button"
              onClick={() => setActive(i)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                active === i
                  ? "bg-brand-600 text-white"
                  : "bg-white text-navy-900 border border-navy-900/10 hover:border-brand-300"
              }`}
            >
              {t.name}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="rounded-2xl bg-white border border-navy-900/8 p-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-navy-500/60">
              Challenge
            </h3>
            <p className="mt-2 text-sm text-navy-900 leading-relaxed">{tab.challenge}</p>
          </div>
          <div className="rounded-2xl bg-white border border-navy-900/8 p-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-600">
              Solution
            </h3>
            <p className="mt-2 text-sm text-navy-900 leading-relaxed">{tab.solution}</p>
          </div>
          <div className="rounded-2xl bg-navy-900 p-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-300">
              Result
            </h3>
            <p className="mt-2 text-sm text-white leading-relaxed">{tab.result}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryTabs;
