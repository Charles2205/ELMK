# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project overview

Marketing/informational website for **Loco Motion Foundation**, a youth-development research and public policy institute (Berryville, VA, founded 2015). This is a from-scratch rebuild of a WordPress site (`larlok8892ed4d3db0-wzlxa.wordpress.com`) as a Next.js App Router app with Tailwind CSS v4 and shadcn/ui. There is no CMS or database — all copy lives directly in the page files, and the site is fully static (every route prerenders at build time).

## Commands

- `npm run dev` — start the dev server (Turbopack)
- `npm run build` — production build (Turbopack); also runs the TypeScript check
- `npm run start` — serve the production build
- `npm run lint` — ESLint
- `npx shadcn@latest add <component>` — add more shadcn/ui components (writes into `src/components/ui`)

There is no test suite configured.

## Architecture

- **Routes**: one folder per nav destination under `src/app/` — `about`, `research-projects`, `mobility-programs`, `collaborate`, `sponsors` — plus the home page at `src/app/page.tsx`. Every page is a Server Component with static content; none fetch external data.
- **`src/lib/site.ts`**: single source of truth for the org name/tagline/social links and the `navLinks` array consumed by both `SiteHeader` and `SiteFooter`. Update nav here, not per-component.
- **`src/lib/actions.ts`**: `submitContactForm`, a single `'use server'` Server Action (zod-validated) shared by every `ContactForm` instance across the site (Collaborate, Mobility Programs, Sponsors pages) — instances are distinguished only by a hidden `context` form field, not separate endpoints. It sends a notification email via [Resend](https://resend.com) using `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL` (see `.env.example`); `subscribeNewsletter` in the same file follows the same pattern for newsletter signups.
- **`src/components/contact-form.tsx`**: client component driving that action via `useActionState`, rendering inline success/error UI (no redirect). Reused with different copy/labels rather than duplicated per page.
- **`src/components/page-hero.tsx`** / **`section-heading.tsx`**: shared heading patterns used by every interior page — prefer these over ad-hoc heading markup when adding sections.
- **`src/components/ui/*`**: shadcn/ui components generated with the **Base UI** primitive library (`components.json` → `"style": "base-nova"`), **not Radix**. Polymorphic composition therefore uses the `render` prop, not `asChild`:

  ```tsx
  // Correct in this codebase
  <Button render={<Link href="/about" />}>About</Button>

  // Wrong — `asChild` doesn't exist on these components and fails typecheck
  <Button asChild><Link href="/about">About</Link></Button>
  ```

  This applies to every primitive in `ui/*` (`Button`, `SheetTrigger`, `SheetClose`, etc.), and layers compose by nesting `render` props (e.g. a `SheetClose` that renders a `Button` that renders a `Link`).
- The installed `lucide-react` version ships no brand/social icons (Instagram, Facebook, etc. were removed from the package). Social links use text-monogram badges (`IG`/`FB`) instead — don't import brand icons from `lucide-react`.
- `globals.css`: `shadcn init` generates a circular `--font-sans: var(--font-sans)` token. This repo points it at the literal `--font-geist-sans`/`--font-geist-mono` variables that `next/font` injects via `className` on `<html>` in `layout.tsx` — preserve that mapping if regenerating theme tokens.
- Theme colors are a deep indigo primary with a warm amber `--accent`, defined in `src/app/globals.css` (`:root` / `.dark`), not the shadcn grayscale defaults.
