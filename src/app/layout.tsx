import type { Metadata } from "next";
import { Geist, Geist_Mono, Caveat } from "next/font/google";
import "./globals.css";
import Providers from "@/src/lib/providers/Providers";
import ToastProvider from "../components/Common/ToastProvider/ToastProvider";

// ✅ Font Optimization
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Handwritten accent font for headline highlight words (e.g. "Journeys")
const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

// ✅ SEO Metadata
// NOTE: metadataBase/canonical use a placeholder domain — swap in the
// real domain once one is registered/deployed.
export const metadata: Metadata = {
  metadataBase: new URL("https://nexafab.com"),

  title: {
    default: "NexaFab Automation | Intelligent Automation for Smart Manufacturing",
    template: "%s | NexaFab Automation",
  },

  description:
    "Transform your manufacturing operations with AI-powered automation, connected systems, real-time intelligence, and smart industrial solutions.",

  keywords: [
    "NexaFab Automation",
    "intelligent automation",
    "smart manufacturing",
    "industrial IoT",
    "predictive maintenance",
    "AI manufacturing solutions",
    "robotics automation",
    "digital twin manufacturing",
  ],

  authors: [{ name: "NexaFab Automation" }],
  creator: "NexaFab Automation",
  publisher: "NexaFab Automation",

  category: "technology",

  // ✅ Open Graph (Facebook, LinkedIn)
  openGraph: {
    title: "NexaFab Automation | Intelligent Automation for Smart Manufacturing",
    description:
      "AI-powered automation, industrial IoT, and real-time intelligence for modern manufacturers.",
    url: "https://nexafab.com",
    siteName: "NexaFab Automation",
    images: [
      {
        url: "/images/mi.jpg",
        width: 1600,
        height: 1000,
        alt: "NexaFab Automation — intelligent smart factory",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // ✅ Twitter SEO
  twitter: {
    card: "summary_large_image",
    title: "NexaFab Automation | Intelligent Automation for Smart Manufacturing",
    description:
      "AI-powered automation, industrial IoT, and real-time intelligence for modern manufacturers.",
    images: ["/images/mi.jpg"],
  },

  // ✅ Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ✅ Canonical
  alternates: {
    canonical: "https://nexafab.com",
  },

  // ✅ Icons
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.svg",
  },

  // ✅ App Info
  applicationName: "NexaFab Automation",
  referrer: "origin-when-cross-origin",

  // ✅ Format detection
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} font-sans antialiased bg-white text-brand-900`}
      >
        <Providers>
          {children}
          <ToastProvider />
        </Providers>
      </body>
    </html>
  );
}
