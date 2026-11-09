# Ballet Phase 1 review

Implemented on `feat/ballet-living-exhibition` against the approved [Phase 1 task](../../tasks/ballet-living-exhibition-phase-1.md). The owner approved the final hero framing and authorized commit/push on 2026-11-09. This is still a provisional editorial draft; the PR remains unmerged.

## Changed files

- `src/app/ballet/page.tsx`: semantic route, metadata, hero, six chapter rooms, static discovery preview, editorial/attribution note and return links.
- `src/app/ballet/ballet.css`: blush/ivory/rose theme, chapter accents, desktop rail and compact mobile index. Every class is Ballet-prefixed so styles cannot change homepage elements, including after client navigation. The existing Tailwind Turbopack loader did not retain CSS Module class exports in browser verification; prefixed CSS works with the unchanged configuration.
- `src/data/ballet.ts`: typed static chapter/story data and a stable discovery identity with subject/chapter associations.
- `src/components/story/ChapterNav.tsx`: native anchors enhanced with a reading-location indicator, passive scroll observation and cleaned-up listeners. No historical progress percentage or forced scrolling.
- `src/data/subjects.ts`: Ballet published at `/ballet`; Tango and Opera remain coming soon. Homepage components and global styles are unchanged.
- `public/images/exhibits/ballet-arch-v2.webp`: attributed portrait variant with extended stage backdrop; original homepage asset preserved.
- This directory: final screenshots, review notes and image-edit prompt.

## Screenshots

Captured from the final live localhost:3000 preview in headless Chrome, using the existing project fonts and reduced-motion preference. The production build also passed.

- [Desktop entrance, 1440 × 1000](desktop.png)
- [Desktop Romantic chapter and active rail, 1440 × 1000](desktop-chapter.png)
- [Mobile entrance, 375 × 812](mobile.png)
- [Mobile chapter index, 375 × 812](mobile-chapters.png)
- [Mobile complete page, 375px wide](mobile-full.png)
- [Mobile complete pose and attribution](mobile-pose.png)
- [Mobile chapter index expanded](mobile-chapters-open.png)
- [Desktop chapter layout variation](desktop-variation.png)

## Validation

- `npm run lint` — passed.
- `npx tsc --noEmit` — passed.
- `npm run build` — passed; `/` and `/ballet` statically prerendered. Initial attempts encountered sandbox font-download/port-binding failures; a clean build with permission succeeded. No Next configuration or dependency changes.
- Browser checks at 320, 375, 768, 960, 1024 and 1440 CSS pixels: no horizontal document overflow; hero image loaded at each width; all six chapter sections present; route CSS applied.
- Pointer jump to Romantic dream: URL hash, focused section and `aria-current="location"` matched.
- Keyboard: first Tab exposes the skip link; Enter focuses main. Keyboard chapter activation focuses the target section and updates the active indicator.
- Reduced-motion enabled during checks: native anchor jumps remain usable without animation. No new animations, autoplay or motion dependencies.
- At 1440 × 450 the rail becomes static so a short viewport cannot trap lower links offscreen.
- 720 × 450 CSS-pixel reflow check (equivalent layout space to 1440 × 900 at 200% zoom): no horizontal overflow. This checks layout reflow, not browser UI zoom or assistive-technology certification.
- Homepage Ballet exhibit is a semantic link to `/ballet`; exactly two coming-soon labels remain. No browser page errors.
- Desktop and mobile screenshots visually inspected. Full screen-reader and physical-device testing remain outside this local verification.

## Content and asset provenance

The sole content source for this skeleton is the repository's approved Phase 1 brief and its six-room outline. All narrative and approximate period labels are explicitly provisional; no external historical research, verified historical citations or quotations are claimed. The page keeps a visible editorial note and clearly labels the entire edition as awaiting historical verification near the start, with a detailed note at the end.

`public/images/exhibits/ballet.webp` remains the unchanged homepage illustration. The Ballet route uses `public/images/exhibits/ballet-arch-v2.webp` (1122 × 1402), a portrait variant created from it with the built-in imagegen tool and WebP-encoded with the installed Sharp package. The stage backdrop extends continuously above the dancer to protect the raised hand inside the original arch. Generative editing can reinterpret details; this is a variant rather than a pixel-identical outpaint. See the exact [edit prompt](image-edit-prompt.txt).

The page visibly credits **AI-generated illustrative artwork · AI-extended backdrop · Not an archival photograph**. Neither image identifies a real performer, production, costume or date. Chapter ornaments are CSS geometry, not historical artifacts. No external archival media were added.

## Remaining editorial decisions

- Verify chronology, overlapping period boundaries and every chapter's narrative against reputable sources in Phase 2.
- Select people, institutions, productions and primary sources; determine archival asset licensing and captions before adding them.
- Final hero framing is visually approved. Continue editorial review of the six room narratives and final story length in Phase 2.
- The costume discovery remains a labeled static preview, with no drawer or hotspot behavior. Its actual content and media need research and later-phase approval.
- No blockers remain for Phase 1 code review. Historical publication readiness and later-phase interactions remain intentionally pending.

## Approved visual refinements — 2026-11-09

The owner approved the final local preview and authorized commit/push. The PR remains unmerged.

- Mobile chapter navigation is a native disclosure, collapsed by default with current reading context. Desktop uses the active chapter rail. Native links work with keyboard and without JavaScript.
- One visible edition notice replaces repeated chapter draft labels, with the detailed editorial note retained at the end.
- Rooms 2 and 6 use paired entrance/story layouts on wide desktops. All chapter contents stay to the right of the rail. The rail sits 24px farther left with an increased gap; the reading column retains its original position.
- The hero uses the original arch dimensions: approximately 673 × 691px at 1440px viewport, 35rem tablet height, and a 4:5 mobile frame. No decorative cap is present.
- The portrait illustration variant sits at `object-position: center 65%`, leaving clear space around the full raised hand while retaining both feet. The whole raised-hand bounding box, other hand and both feet passed clip-boundary checks at 320/375/768/960/1024/1440px. Desktop and mobile screenshots were visually inspected on localhost:3000.
- Lint, TypeScript and production build passed for this final implementation. Owner approval covers this visual framing; researched content and later phases remain pending.
