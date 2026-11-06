# Codex task — Homepage prototype v1

Status: APPROVED FOR IMPLEMENTATION (prototype)
Date: 2026-11-06
Scope: homepage only; implement Editorial Entrance and Exhibition Gallery.

## Read first
- `AGENTS.md`
- `docs/vision.md`
- `docs/design-system.md`
- `docs/decisions.md`
- `docs/features/homepage.md`

## Existing repository
This is an existing Next.js 16.4.5 App Router project using React 19, TypeScript, Tailwind CSS v4 and npm (`package-lock.json`). The app lives in `src/app/`, not root `app/`. `src/app/page.tsx` is the unmodified Next.js starter screen; `src/app/layout.tsx` still has starter metadata; `src/app/globals.css` has starter theme styles. `lucide-react` and `motion` are installed. Do not add new libraries for this prototype.

IMPORTANT: Follow the existing Next.js version-specific instructions in `AGENTS.md` and inspect `node_modules/next/dist/docs/` as required by those instructions.

## Goal
Ship a usable, polished, accessible responsive first homepage prototype that feels like entering a contemporary museum and discovering a curated exhibition catalog. Prioritize elegance, scanning speed, and maintainable components over complex effects.

## Page architecture
1. Minimal header with text wordmark `THE HISTORY OF...`, an accessible `Explore` anchor to `#collection`, and a restrained secondary link only if it has a real destination (avoid dead nav links).
2. Editorial Entrance hero: warm ivory background, centered/symmetrical oversized display-serif headline `Everything has a history.`, eyebrow `AN EXPLORATION THROUGH TIME`, concise description (provisional: `Discover the extraordinary stories behind the things that move us.`), and a working anchor `Explore the stories` to `#collection`. No dominant photo/video in the hero.
3. Collection section with id `collection`, title `Choose your curiosity.`, short introductory text, and a hybrid editorial grid with at least Ballet, Tango, and Opera as preview cards.
4. One featured variant in the grid (suggest Ballet for v1) that spans two desktop columns while preserving a compact overall page; standard cards use consistent image ratios and labels. Avoid huge full-height feature sections.
5. Simple closing/footer reflecting the brand. Skip unrelated features.

## Visual direction
- Modern Museum baseline + cinematic subject imagery + Living Encyclopedia curiosity.
- Working tokens, explicitly provisional: ivory #F5F0E8, ink #24221F, muted wine #742F3C, subdued neutral #70635B. Subject identity primarily from art and restrained accents.
- Display serif + clean sans-serif. Cormorant Garamond and DM Sans are candidates, not permanent commitments. Use Next.js font support where practical and ensure fallback styling. If font downloading is blocked, report this and retain graceful fallback.
- Ample negative space, intentional alignment, very restrained rules/captions, nearly square 4px image corners, no heavy shadows or card panels.
- Keep headlines editorial, not marketing-dashboard styled.

## Content architecture
Create reusable components (suggest `src/components/exhibition/ExhibitCard.tsx`, `ExhibitGrid.tsx`, and optionally `CollectionHeader.tsx`), plus typed subject content (suggest `src/data/subjects.ts` and `src/types/subject.ts`). Adjust names if the existing codebase suggests better organization.

Each card visibly contains:
1. image/visual
2. category or exhibit label
3. subject title
4. one intriguing sentence (ideally <=100 characters)

Use a semantic link wrapping a *published* card only. For now, none of the subject pages are confirmed to exist: do NOT link to routes that 404. Represent unpublished exhibits as clearly `Coming soon` (non-navigable) while still displaying all editorial fields. If a valid subject route exists, link directly to it. Do not invent placeholder subject pages unless necessary for a clearly explained preview strategy.

Create a typed data model that can later add `href`, `status`, `featured`, `category`, and image attribution. Labels and descriptions are provisional editorial copy, not verified historical claims.

## Imagery
Visual quality matters, but do not use copyrighted/restricted photographs without permission or attribution. Prefer reusable locally owned/appropriately licensed assets if present. If there are no safe assets, implement thoughtfully composed design placeholders (e.g. gradient-backed art-directed panels with clear development-only labeling) and report exact assets needed; do not hotlink random images or invent credits. Keep image containers dimensionally stable. Avoid turning the prototype into a visually empty wireframe.

## Responsive and interactive behavior
- Wide desktop: structured three-column grid with occasional two-column featured card.
- Tablet: two columns.
- Mobile: compact two-column cards when readable; feature spans full width. At narrow widths or large text, one column.
- Use CSS grid and content-aware breakpoints; no horizontal overflow at 320px.
- Visible interactive hover and keyboard focus states. For linked cards, clipped image scale up to ~1.03 and subtle title/arrow emphasis is sufficient. Don't require hover to discover info.
- Honor `prefers-reduced-motion`. Avoid scroll-jacking, pinned transitions, autoplay, and forced snapping. Native smooth scroll only when motion is allowed.
- Layout and essential content work without client-side JS or animation.
- Accessible labels, semantic headings, meaningful alternatives for imagery, comfortable contrast.
- Mobile navigation must remain usable and not require a complex menu for this small prototype.

## Out of scope for v1
- Immersive ballet subject page, tango page, opera page.
- CMS, accounts, database, search backend, complex filter interface.
- Full curated connections/Follow the Thread section (future).
- Full animation transitions and extensive state management.
- Publishing claims that the subject routes exist.

## Definition of done
- Replace the Next.js starter page with the actual homepage.
- Update metadata title and description.
- Reusable, typed editorial cards and collection grid; avoid monolithic page component.
- Visually coherent hero-to-collection transition and polished spacing.
- 320px mobile, ordinary phone, tablet and wide desktop all usable.
- No dead navigation and no fake historical sourcing.
- Run `npm run lint`, `npx tsc --noEmit`, and `npm run build` when environment permits; report any failures and reasons.
- Summarize changed files, reusable components, decisions deferred, visual asset gaps, and validation.

## Working method
1. Create a branch named `feat/homepage-prototype` if not already present.
2. Implement within the branch; keep changes focused.
3. Run checks.
4. If authorized tooling permits, open a pull request for review. Do not merge without explicit instruction.
5. Do not rewrite approved design decisions without review.
