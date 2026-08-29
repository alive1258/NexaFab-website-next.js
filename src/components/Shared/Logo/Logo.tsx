import { BRAND_SHORT } from "@/src/constants/company";

/* ================= LOGO MARK (SVG) ================= */
/* A connected circuit-node glyph inside a rounded square — evokes
   automation + connectivity without needing an external asset. */
export const LogoMark = ({ className = "w-9 h-9" }: { className?: string }) => (
  <svg
    viewBox="0 0 40 40"
    className={`shrink-0 ${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect width="40" height="40" rx="10" fill="#0D9488" />
    <circle cx="12" cy="13" r="3" fill="#ECFDF7" />
    <circle cx="28" cy="13" r="3" fill="#ECFDF7" />
    <circle cx="20" cy="27" r="3" fill="#ECFDF7" />
    <path
      d="M12 13L20 27L28 13"
      stroke="#ECFDF7"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 13H28"
      stroke="#ECFDF7"
      strokeWidth="2"
      strokeLinecap="round"
      strokeOpacity="0.6"
    />
  </svg>
);

/* ================= LOGO (MARK + WORDMARK) ================= */
const SIZES = {
  sm: { icon: "w-7 h-7", text: "text-lg" },
  md: { icon: "w-9 h-9", text: "text-xl" },
  lg: { icon: "w-11 h-11", text: "text-2xl" },
} as const;

interface LogoProps {
  variant?: "dark" | "light";
  size?: keyof typeof SIZES;
  className?: string;
}

const Logo = ({ variant = "dark", size = "md", className = "" }: LogoProps) => {
  const { icon, text } = SIZES[size];

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={icon} />
      <span
        className={`font-bold leading-none whitespace-nowrap tracking-tight ${text} ${
          variant === "dark" ? "text-navy-900" : "text-white"
        }`}
      >
        {BRAND_SHORT}
      </span>
    </span>
  );
};

export default Logo;
