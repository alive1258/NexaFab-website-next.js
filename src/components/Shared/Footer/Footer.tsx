"use client";

import Link from "next/link";
import { MapPin, Mail, PhoneCall, ArrowUp } from "lucide-react";
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaYoutube } from "react-icons/fa";
import Logo from "../Logo/Logo";
import {
  BRAND_NAME,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_TEL,
  OFFICE_ADDRESS,
  SOCIAL_LINKS,
  TAGLINE,
} from "@/src/constants/company";

const COMPANY_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Our Mission", href: "/about#mission" },
  { label: "Careers", href: "/about#careers" },
  { label: "Contact", href: "/about#contact" },
];

const SOLUTIONS_LINKS = [
  { label: "Intelligent Automation", href: "/solutions#automation" },
  { label: "Industrial IoT", href: "/solutions#iot" },
  { label: "Predictive Maintenance", href: "/solutions#ai" },
  { label: "Robotics", href: "/solutions#robotics" },
  { label: "Computer Vision", href: "/solutions#vision" },
];

const INDUSTRIES_LINKS = [
  { label: "Automotive", href: "/industries#automotive" },
  { label: "Electronics", href: "/industries#electronics" },
  { label: "Food & Beverage", href: "/industries#food-beverage" },
  { label: "Pharmaceuticals", href: "/industries#pharmaceuticals" },
  { label: "Packaging", href: "/industries#packaging" },
];

const RESOURCES_LINKS = [
  { label: "Case Studies", href: "/#case-study" },
  { label: "Technology", href: "/technology" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
];

const SOCIALS = [
  { icon: FaLinkedinIn, label: "LinkedIn", href: SOCIAL_LINKS.linkedin },
  { icon: FaTwitter, label: "Twitter", href: SOCIAL_LINKS.twitter },
  { icon: FaFacebookF, label: "Facebook", href: SOCIAL_LINKS.facebook },
  { icon: FaYoutube, label: "YouTube", href: SOCIAL_LINKS.youtube },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-900 text-white pt-20 pb-10 border-t border-white/5">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* BRAND */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <Link href="/" className="inline-flex">
                <Logo variant="light" size="lg" />
              </Link>
              <p className="mt-4 text-white/60 text-sm max-w-sm leading-relaxed">
                {TAGLINE}. We help manufacturers automate, optimize, and scale
                with AI-powered systems built for the connected factory.
              </p>
            </div>

            <div className="flex gap-3">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={href === "#" ? (e) => e.preventDefault() : undefined}
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 text-white/70 hover:bg-brand-600 hover:text-white transition-colors"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* LINK COLUMNS */}
          <div className="lg:col-span-8 grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="space-y-5">
              <h3 className="text-sm font-bold uppercase tracking-widest text-white">
                Company
              </h3>
              <ul className="space-y-3">
                {COMPANY_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-brand-300 text-sm transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              <h3 className="text-sm font-bold uppercase tracking-widest text-white">
                Solutions
              </h3>
              <ul className="space-y-3">
                {SOLUTIONS_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-brand-300 text-sm transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              <h3 className="text-sm font-bold uppercase tracking-widest text-white">
                Industries
              </h3>
              <ul className="space-y-3">
                {INDUSTRIES_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-brand-300 text-sm transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              <h3 className="text-sm font-bold uppercase tracking-widest text-white">
                Resources
              </h3>
              <ul className="space-y-3">
                {RESOURCES_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-brand-300 text-sm transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CONTACT STRIP */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8 border-t border-white/10">
          <a
            href={`tel:${CONTACT_PHONE_TEL}`}
            className="flex items-start gap-2.5 text-white/70 hover:text-brand-300 text-sm transition-colors duration-300"
          >
            <PhoneCall size={16} className="mt-0.5 shrink-0 text-brand-400" />
            {CONTACT_PHONE}
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="flex items-start gap-2.5 text-white/70 hover:text-brand-300 text-sm transition-colors duration-300"
          >
            <Mail size={16} className="mt-0.5 shrink-0 text-brand-400" />
            {CONTACT_EMAIL}
          </a>
          <span className="flex items-start gap-2.5 text-white/70 text-sm">
            <MapPin size={16} className="mt-0.5 shrink-0 text-brand-400" />
            {OFFICE_ADDRESS}
          </span>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-white/50 text-center md:text-left">
            © {currentYear} {BRAND_NAME}. All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link
              href="/privacy-policy"
              className="text-xs text-white/50 hover:text-brand-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-conditions"
              className="text-xs text-white/50 hover:text-brand-300 transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/50 hover:text-brand-300 transition-all group"
          >
            Back to top
            <ArrowUp size={12} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
