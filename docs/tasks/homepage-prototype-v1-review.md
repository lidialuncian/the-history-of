# Homepage prototype v1 — implementation review

Implemented on `feat/homepage-prototype` against the approved prototype task. No new dependencies or Next.js configuration changes.

## Implementation
- `src/app/page.tsx`: centered Editorial Entrance, working collection anchors, gallery and brand footer; no links to unfinished subject routes.
- `src/app/globals.css`: provisional ivory/ink/wine tokens, responsive one/two/three-column grid, two-column Ballet feature, visible keyboard focus and reduced-motion behavior.
- `src/app/layout.tsx`: real metadata and provisional Cormorant Garamond / DM Sans via Next.js font support, with serif/sans fallbacks.
- `src/components/exhibition/`: reusable server-rendered ExhibitCard and ExhibitGrid.
- `src/types/subject.ts`, `src/data/subjects.ts`: typed previews; published entries require a route, coming-soon entries cannot supply one. Optional image data includes alt text and attribution.

## Asset and editorial follow-up
All three exhibits are non-navigable Coming soon previews. Teasers and exhibit numbers are provisional, not verified historical claims. Original CSS compositions are visibly labeled Prototype artwork; they are development placeholders, not sourced historical images.

Before replacing placeholders, supply licensed/owned Ballet rehearsal or performance imagery (16:9 desktop featured crop, 3:2 small-screen crop), Tango dance imagery (3:4), and Opera stage or theatre imagery (3:4). Each needs a source file, license/permission record, creator/credit wording, and meaningful alt text. Confirm final typography, copy, media and published routes before launch. Approved decisions have not changed.

## Validation
- `npm run lint`: passed.
- `npx tsc --noEmit`: passed.
- `git diff --check`: passed.
- `npm run build`: attempted in sandbox and with elevated execution. Initial Google font fetch failed; retry reached compilation but Turbopack's CSS loader worker failed to bind a port with `Operation not permitted`. Production build remains unverified due to environment restrictions; configuration was preserved.
- Local development server returned HTTP 200. Headless Chrome screenshots inspected at 320px and 1440px; reviewed responsive layout and corrected placeholder-caption styling. Tablet/phone breakpoints and enlarged text still merit interactive review; no automated accessibility audit was run.
