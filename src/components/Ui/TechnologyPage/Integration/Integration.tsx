import SectionHeading from "@/src/components/Common/SectionHeading/SectionHeading";

const SYSTEMS = ["ERP", "MES", "CRM", "SCADA", "PLC", "WMS", "IoT Devices", "Cloud Platforms"];

const Integration = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-50/40">
      <div className="container">
        <SectionHeading
          eyebrow="Integration"
          title="Designed to Work With Your Existing Systems"
        />

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {SYSTEMS.map((system) => (
            <div
              key={system}
              className="flex items-center justify-center rounded-xl border border-navy-900/8 bg-white py-6 text-sm font-bold text-navy-900 shadow-sm"
            >
              {system}
            </div>
          ))}
        </div>

        <p className="mt-10 mx-auto max-w-2xl rounded-xl bg-navy-900 px-6 py-5 text-center text-sm font-semibold text-white">
          No need to replace your entire infrastructure. Connect and modernize
          your existing systems.
        </p>
      </div>
    </section>
  );
};

export default Integration;
