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

The sole content source for this skeleton is the repository's approved Phase 1 brief and its six-room outline. All narrative and approximate period labels are explicitly provisional; no external historical research, verified historical citations or quotations are claimed. The page keeps a visible editorial note and labels every chapter's narrative as awaiting sources.

`public/images/exhibits/ballet.webp` is reused from the existing subject collection. Its existing attribution is **AI-generated illustrative artwork**. It is visibly labeled as non-archival; it does not identify a real performer, production, costume or date. Chapter ornaments are CSS geometry, not historical artifacts. No external or newly generated media were added.

## Remaining editorial decisions

- Verify chronology, overlapping period boundaries and every chapter's narrative against reputable sources in Phase 2.
- Select people, institutions, productions and primary sources; determine archival asset licensing and captions before adding them.
- Review the romantic palette, six room treatments, mobile index and final narrative length from these screenshots.
- The costume discovery remains a labeled static preview, with no drawer or hotspot behavior. Its actual content and media need research and later-phase approval.
- No blockers remain for Phase 1 code review. Historical publication readiness and later-phase interactions remain intentionally pending.
