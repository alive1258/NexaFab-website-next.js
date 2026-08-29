import { MapPin, Mail, Clock, PhoneCall } from "lucide-react";
import SectionHeading from "@/src/components/Common/SectionHeading/SectionHeading";
import ContactForm from "./ContactForm";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_TEL,
  OFFICE_ADDRESS,
  BUSINESS_HOURS,
  GOOGLE_MAP_EMBED_SRC,
} from "@/src/constants/company";

const ContactSection = () => {
  return (
    <section id="contact" className="scroll-mt-24 py-16 md:py-24 bg-white">
      <div className="container">
        <SectionHeading eyebrow="Get In Touch" title="Let's Transform Your Factory" />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 rounded-2xl border border-navy-900/8 bg-white p-6 sm:p-8 shadow-sm">
            <ContactForm />
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="rounded-2xl bg-navy-900 p-6 sm:p-8 space-y-5">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-brand-300" />
                <div>
                  <h3 className="text-sm font-bold text-white">Office</h3>
                  <p className="mt-0.5 text-sm text-white/60">{OFFICE_ADDRESS}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-brand-300" />
                <div>
                  <h3 className="text-sm font-bold text-white">Email</h3>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="mt-0.5 block text-sm text-white/60 hover:text-brand-300 transition"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <PhoneCall size={18} className="mt-0.5 shrink-0 text-brand-300" />
                <div>
                  <h3 className="text-sm font-bold text-white">Phone</h3>
                  <a
                    href={`tel:${CONTACT_PHONE_TEL}`}
                    className="mt-0.5 block text-sm text-white/60 hover:text-brand-300 transition"
                  >
                    {CONTACT_PHONE}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={18} className="mt-0.5 shrink-0 text-brand-300" />
                <div>
                  <h3 className="text-sm font-bold text-white">Business Hours</h3>
                  <p className="mt-0.5 text-sm text-white/60">{BUSINESS_HOURS}</p>
                </div>
              </div>
            </div>

            <div className="relative flex-1 min-h-[220px] overflow-hidden rounded-2xl border border-navy-900/8">
              <iframe
                src={GOOGLE_MAP_EMBED_SRC}
                title="Office location map"
                loading="lazy"
                className="absolute inset-0 h-full w-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
