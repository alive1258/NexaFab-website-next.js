"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Gauge, ShieldCheck, TrendingUp, Radio } from "lucide-react";
import { unsplash, IMAGES } from "@/src/constants/images";

const TRUST_METRICS = [
  { icon: ShieldCheck, label: "99.9% System Reliability" },
  { icon: TrendingUp, label: "30%+ Efficiency Improvement" },
  { icon: Radio, label: "24/7 Monitoring" },
  { icon: Gauge, label: "Real-Time Analytics" },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div className="absolute inset-0">
        <Image
          src={unsplash(IMAGES.heroFactory, 1920, 75)}
          alt="Robotic arms on an automated smart factory production line"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/95 to-navy-900/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-navy-900/40" />
      </div>

      <div className="container relative py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT: headline */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-300">
              Smart Manufacturing Platform
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.08] text-white">
              Intelligent Automation for the Future of Manufacturing
            </h1>
            <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-white/70">
              Transform your manufacturing operations with AI-powered automation,
              connected systems, real-time intelligence, and smart industrial
              solutions.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-400"
              >
                Explore Solutions
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/about#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
              >
                Talk to an Expert
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-6 max-w-xl">
              {TRUST_METRICS.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <Icon size={18} className="shrink-0 text-brand-400" />
                  <span className="text-xs sm:text-[13px] font-medium text-white/70 leading-tight">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: lead-capture card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-2xl">
              <h2 className="text-xl font-bold text-navy-900">
                Request a Free Consultation
              </h2>
              <p className="mt-1.5 text-sm text-navy-500/70">
                Tell us about your operation — we&apos;ll follow up within one
                business day.
              </p>

              <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full rounded-lg border border-navy-900/10 px-3.5 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full rounded-lg border border-navy-900/10 px-3.5 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Work Email"
                  className="w-full rounded-lg border border-navy-900/10 px-3.5 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full rounded-lg border border-navy-900/10 px-3.5 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                />
                <textarea
                  rows={3}
                  placeholder="What are you looking to automate?"
                  className="w-full rounded-lg border border-navy-900/10 px-3.5 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="w-full rounded-lg bg-brand-600 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
                >
                  Get Started
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
