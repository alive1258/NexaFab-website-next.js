# NexaFab Automation — Frontend

Marketing site + admin dashboard for an intelligent-automation / smart-manufacturing
company, built with Next.js (App Router). The public site is currently seeded with
**placeholder brand details** (see [Placeholder content](#placeholder-content) below).

## Tech stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript, React 19
- **Styling:** Tailwind CSS v4 (theme tokens in `src/app/globals.css`)
- **State:** Redux Toolkit + redux-persist
- **Forms:** react-hook-form
- **Icons:** lucide-react, react-icons
- **Data:** RTK Query (`src/redux/api/*`) against a NestJS backend

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000 (or next available port)
npm run build
npm run start
npm run lint
```

## Environment variables

`.env.local`:

```
NEXT_PUBLIC_API_URL=<backend API base URL>
```

> ⚠️ This currently points at the old yacht-charter backend
> (`yachts-backned-nest-js.onrender.com`). The public marketing pages don't call it
> (content is static — see below), but the `/dashboard` CMS and its API/redux layers
> (`src/redux/api/*`) still do. Point this at the real backend before relying on the
> dashboard.

## Project structure

```
src/
  app/
    (withCommonLayout)/   # public marketing site — Navbar + Footer chrome
      page.tsx            # Home
      solutions/
      industries/
      technology/
      about/              # About + Contact (combined)
      privacy-policy/  refund-policy/  terms-conditions/
    (dashboardLayout)/
      dashboard/          # admin CMS (auth-gated)
    login/  signup/  otp/
  components/
    Shared/                # cross-page chrome: Navbar, Footer, Logo, PageHero
    Common/                 # reusable primitives: SectionHeading, IconCard,
                             # StatCounter, FeatureSplit, FlowDiagram, WhyUsGrid,
                             # FinalCta, Form inputs, ToastProvider, etc.
    Ui/
      HomePage/  SolutionsPage/  IndustriesPage/  TechnologyPage/  AboutPage/
      Dashboard/              # CMS screens (yacht-domain modules — see note below)
  constants/
    company.ts              # brand name, contact info, social links (placeholders)
    images.ts                # verified Unsplash photo IDs used across the site
  redux/                     # store, RTK Query API slices, feature slices
  hooks/                     # useCountUp, useDebounce, useChatSocket, ...
```

## Public site

Five pages under `(withCommonLayout)`, built section-by-section to match an approved
content spec: **Home, Solutions, Industries, Technology, About/Contact**. Copy and
imagery are hardcoded directly in the page/section components — nothing on the
public site is fetched from the CMS. Shared layout patterns (icon-card grids,
image+feature splits, connect-the-boxes flow diagrams, stat counters) live in
`components/Common/` and are reused across all five pages rather than duplicated.

## Placeholder content

Everything below is a placeholder pending real client details, centralized in
**`src/constants/company.ts`** for a one-file swap:

- Brand name (`NexaFab Automation`) and logo wordmark
- Contact email, phone, office address, business hours
- Social links
- Google Maps embed on the Contact section

## Admin dashboard

`(dashboardLayout)/dashboard` is a full CRUD CMS carried over from this project's
original yacht-charter build (Yachts, Destinations, Experiences, Hero, About,
Services, Portfolio, Testimonials, etc. — see `components/Ui/Dashboard/*` and
`redux/api/*`). It is **not wired to the public marketing pages** (those are static,
per above) and still reflects yacht-domain content/branding. Treat it as a separate
legacy system until/unless it's repurposed.

## Notes

- `package.json`'s `name` field (`sustainable-yachts-frontend`) is left over from the
  project's original scope and hasn't been renamed.
- Image remote hosts are allow-listed in `next.config.ts` (`images.unsplash.com`,
  `res.cloudinary.com`, etc.) — add new hosts there before using them in `next/image`.
