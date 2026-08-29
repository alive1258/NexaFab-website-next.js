import SectionHeading from "@/src/components/Common/SectionHeading/SectionHeading";
import StatCounter from "@/src/components/Common/StatCounter/StatCounter";

const STATS = [
  { value: 35, prefix: "+", suffix: "%", label: "Production Efficiency" },
  { value: 40, prefix: "-", suffix: "%", label: "Downtime" },
  { value: 25, prefix: "-", suffix: "%", label: "Maintenance Cost" },
  { value: 30, prefix: "-", suffix: "%", label: "Defect Rate" },
  { value: 20, prefix: "-", suffix: "%", label: "Energy Consumption" },
];

const Impact = () => {
  return (
    <section className="py-20 md:py-24 bg-brand-600">
      <div className="container">
        <SectionHeading
          eyebrow="Business Impact"
          title="Automation That Delivers Measurable Results"
          light
        />

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-5 gap-8">
          {STATS.map((stat) => (
            <StatCounter key={stat.label} {...stat} light />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
