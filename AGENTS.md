# Masjid Al-Ezz Website

Community website for Masjid Al-Ezz. React SPA deployed as a static site.

## Tech Stack

- **React 18** + **TypeScript** + **Vite**
- **React Router DOM v6** — client-side routing
- **Tailwind CSS** — styling (primary color: `#620043`)
- **Radix UI** — headless UI primitives (via shadcn-style setup in `src/components/ui/`)
- **Framer Motion** — animations
- **Lucide React** — icons

## Project Structure

```
src/
  Router.tsx              # All route definitions
  config.ts               # SITE_URL, LAUNCHGOOD_DONATE_URL
  pages/                  # One file per route
    Home.tsx
    About.tsx
    Programs.tsx
    EventCalendar.tsx
    Contact.tsx
    Donate.tsx
    not-found.tsx
  components/
    layout/
      Navbar.tsx           # Sticky top nav; desktop + mobile
      Footer.tsx           # Social links, charity info
    home/                  # Sections used only on the Home page
      About.tsx
      Donate.tsx
      EventPopup.tsx
      FeaturedEvent.tsx    # Pulls latest Instagram post (image-only)
      Gallery.tsx
      InstagramEvents.tsx  # Instagram feed via Behold.so API
      MasjidBoxWidget.tsx  # Prayer times widget
      Programs.tsx         # Shows up to 6 programs (shuffled)
      VideoReels.tsx
    ui/                    # Radix/shadcn components + custom atoms
  assets/
    logo.png
    sheikh_rasool.jpg
    sheikh_usta.jpg
    images/               # Gallery and program images
```

## Routes

| Path | Page | Notes |
|------|------|-------|
| `/` | Home | Hero, prayer times, events, gallery, programs, donate |
| `/about` | About | Mission, values, 2 Shuyukh bios |
| `/programs` | Programs | All 8 programs with registration links |
| `/calendar` | EventCalendar | Embedded Outlook calendar iframe |
| `/contact` | Contact | Address, phone, email, Google Maps iframe |
| `/donate`, `/fundraiser`, `/fundraise` | — | Redirect to IRM platform |
| `*` | NotFound | 404 page |

## Navigation

`src/components/layout/Navbar.tsx` — `navigationItems` array drives both desktop and mobile menus. To add a nav item, add an entry to that array and a corresponding route in `Router.tsx`.

Desktop: logo left · nav links center · Donate + WhatsApp right
Mobile: logo · Donate · WhatsApp · hamburger → animated full-screen overlay

## Key Integrations

- **Instagram feed** — Behold.so API key in `FeaturedEvent.tsx` / `InstagramEvents.tsx`
- **Donations** — IRM platform (`app.irm.io/masjidalezz.com/...`); also LaunchGood URL in `config.ts`
- **WhatsApp** — Community group link hardcoded in `Navbar.tsx`
- **Calendar** — Microsoft Outlook iframe in `EventCalendar.tsx`
- **Maps** — Google Maps iframe in `Contact.tsx`

## Programs Data

Hardcoded in `src/components/home/Programs.tsx`. Each program has: `title`, `description`, `schedule`, `time`, `cost`, `image`, optional `registrationLink`.

Current programs (8): Sahaba Stories, Youth Qur'an Class, Beginner's Boxing, Sisters Tafsir, Brothers Ilm & Chill, Family Tafsir Night, Sisters Tajweed & Hifdh, Weekly Grappling.

## Conventions

- Path aliases: `@/` maps to `src/`
- No backend — all data is static/hardcoded or fetched from third-party APIs
- Tailwind only — no CSS files; use `cn()` utility for conditional classes
- Keep new pages in `src/pages/`, new reusable components in `src/components/`
- New home-page-only sections go in `src/components/home/`
