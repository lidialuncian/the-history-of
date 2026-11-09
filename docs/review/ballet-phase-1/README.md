# Ballet Phase 1 review

Implemented on `feat/ballet-living-exhibition` against the approved [Phase 1 task](../../tasks/ballet-living-exhibition-phase-1.md). Owner visual/editorial review is required before merge.

## Changed files

- `src/app/ballet/page.tsx`: semantic route, metadata, hero, six chapter rooms, static discovery preview, editorial/attribution note and return links.
- `src/app/ballet/ballet.css`: blush/ivory/rose theme, chapter accents, desktop rail and compact mobile index. Every class is Ballet-prefixed so styles cannot change homepage elements, including after client navigation. The existing Tailwind Turbopack loader did not retain CSS Module class exports in browser verification; prefixed CSS works with the unchanged configuration.
- `src/data/ballet.ts`: typed static chapter/story data and a stable discovery identity with subject/chapter associations.
- `src/components/story/ChapterNav.tsx`: native anchors enhanced with a reading-location indicator, passive scroll observation and cleaned-up listeners. No historical progress percentage or forced scrolling.
- `src/data/subjects.ts`: Ballet published at `/ballet`; Tango and Opera remain coming soon. Homepage components and global styles are unchanged.
- This directory: screenshot evidence and review notes.

## Screenshots

Captured from the successful production build in headless Chrome, using the existing project fonts and reduced-motion preference.

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
- Browser checks at 320, 375, 768 and 1440 CSS pixels: no horizontal document overflow; hero image loaded at each width; all six chapter sections present; route CSS applied.
- Pointer jump to Romantic dream: URL hash, focused section and `aria-current="location"` matched.
- Keyboard: first Tab exposes the skip link; Enter focuses main. Keyboard chapter activation focuses the target section and updates the active indicator.
- Reduced-motion enabled during checks: native anchor jumps remain usable without animation. No new animations, autoplay or motion dependencies.
- At 1440 × 450 the rail becomes static so a short viewport cannot trap lower links offscreen.
- 720 × 450 CSS-pixel reflow check (equivalent layout space to 1440 × 900 at 200% zoom): no horizontal overflow. This checks layout reflow, not browser UI zoom or assistive-technology certification.
- Homepage Ballet exhibit is a semantic link to `/ballet`; exactly two coming-soon labels remain. No browser page errors.
- Desktop and mobile screenshots visually inspected. Full screen-reader and physical-device testing remain outside this local verification.

## Content and asset provenance

The sole content source for this skeleton is the repository's approved Phase 1 brief and its six-room outline. All narrative and approximate period labels are explicitly provisional; no external historical research, verified historical citations or quotations are claimed. The page keeps a visible editorial note and clearly labels the entire edition as awaiting historical verification near the start, with a detailed note at the end.

`public/images/exhibits/ballet.webp` is reused from the existing subject collection. Its existing attribution is **AI-generated illustrative artwork**. It is visibly labeled as non-archival; it does not identify a real performer, production, costume or date. Chapter ornaments are CSS geometry, not historical artifacts. No external or newly generated media were added.

## Remaining editorial decisions

- Verify chronology, overlapping period boundaries and every chapter's narrative against reputable sources in Phase 2.
- Select people, institutions, productions and primary sources; determine archival asset licensing and captions before adding them.
- Review the romantic palette, six room treatments, mobile index and final narrative length from these screenshots.
- The costume discovery remains a labeled static preview, with no drawer or hotspot behavior. Its actual content and media need research and later-phase approval.
- No blockers remain for Phase 1 code review. Historical publication readiness and later-phase interactions remain intentionally pending.

## Owner review refinements — 2026-11-09

Addressed both owner feedback notes on PR #2 within Phase 1:

- Mobile chapter navigation is now a native `details` / `summary` disclosure, collapsed by default with current reading context. Native anchors remain keyboard accessible. At desktop widths it opens as the existing rail; without JavaScript the disclosure still opens normally.
- Removed six repetitive draft labels. One accessible, visible edition notice before the chapter sequence covers all narrative and period labels and links to the detailed closing editorial note.
- Rooms 2 and 6 use a paired entrance/story layout on wide desktops. Both stay to the right of the rail, with the same bounded reading width. Smaller screens return to a comfortable vertical flow.
- Moved the desktop rail 24px farther left and increased its gap to the chapter column by 24px at 1440px. The chapter column stays in its original position; mobile gutters remain 24px.
- Reduced mobile hero spacing without reducing the readable text sizes. Updated mobile screenshots show the resulting opening rhythm.
- Preserved the arched frame and existing image. The source contains both hands and feet but lacks enough overhead margin for the original full-bleed dome crop. The revised frame reserves a narrow, explicitly decorative gradient cap above the illustration (12% headroom), then fits the photograph-like illustration below it. This is CSS framing, not generated or reconstructed historical content. Both hands and feet remain visible in the inspected 1440px and 375px screenshots; the cap's appearance remains an owner visual decision.

Re-ran lint, TypeScript and production build successfully. Repeated 320/375/768/1440px, short-viewport, reduced-motion, focus/anchor and reflow checks. Source-image extremity coordinates were checked against the rendered arched clip at all four widths. The mobile index opens via keyboard; anchors move focus and update active location. All six links also work in the native disclosure with JavaScript disabled. No page errors or horizontal overflow. Updated screenshots replace the previous review captures.
