import SectionHeading from "@/src/components/Common/SectionHeading/SectionHeading";
import StatCounter from "@/src/components/Common/StatCounter/StatCounter";

const METRICS = [
  { value: 98, suffix: ".4%", label: "Production" },
  { value: 91, suffix: ".2%", label: "OEE" },
  { value: 99, suffix: ".1%", label: "Quality" },
  { value: 97, suffix: ".8%", label: "Machine Availability" },
];

const OperationalIntelligence = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-600">
      <div className="container">
        <SectionHeading eyebrow="Live Metrics" title="Operational Intelligence" light />

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {METRICS.map((m) => (
            <StatCounter key={m.label} {...m} light />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OperationalIntelligence;
