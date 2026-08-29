"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "../Logo/Logo";
import { MENU_ITEMS } from "./menuItems";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState<string | null>(null);
  const pathname = usePathname();

  /* close mobile drawer whenever the route changes — derived during
     render rather than in an effect, to avoid a cascading re-render */
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  /* scroll shadow */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* stop body scroll when menu open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 bg-white transition-shadow ${
          isScrolled ? "shadow-sm" : "border-b border-navy-900/10"
        }`}
      >
        <div className="container flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="shrink-0">
            <Logo variant="dark" />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-8">
            {MENU_ITEMS.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm font-medium transition ${
                    isActive ? "text-brand-600" : "text-navy-900 hover:text-brand-600"
                  }`}
                >
                  {item.display}
                  {isActive && (
                    <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-brand-500" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center">
            <Link
              href="/about#contact"
              className="bg-brand-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-brand-700 transition"
            >
              Talk to an Expert
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((prev) => !prev)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-navy-900 hover:bg-navy-900/5 transition"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* MOBILE SLIDE-IN SHEET */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-navy-950/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl transition-transform duration-300 pt-24 pb-8 px-6 flex flex-col ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col gap-1">
            {MENU_ITEMS.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-3 rounded-lg text-base font-medium transition ${
                    isActive
                      ? "bg-brand-50 text-brand-700"
                      : "text-navy-900 hover:bg-navy-900/5"
                  }`}
                >
                  {item.display}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/about#contact"
            className="mt-auto bg-brand-600 text-white text-center px-5 py-3 rounded-lg text-sm font-semibold hover:bg-brand-700 transition"
          >
            Talk to an Expert
          </Link>
        </div>
      </div>

      {/* spacer for the fixed header */}
      <div className="h-16 md:h-20" />
    </>
  );
};

export default Navbar;
