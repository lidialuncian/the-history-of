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

## PR #1 design refinements — approved

Addresses the owner's review at https://github.com/lidialuncian/the-history-of/pull/1#pullrequestreview-5801881570.

- Hero: centered flex composition with a capped, near-viewport minimum height on larger/taller screens. Short screens use content height; growing text is never clipped.
- Typography: removed forced hero line breaks; balanced fluid headline and narrower supporting copy. Header and headings wrap at enlarged text sizes.
- Gallery: an exactly-three-subject curation with one featured exhibit uses four desktop tracks: two for Ballet and one each for Tango and Opera, with aligned image heights. Other collections retain the original reusable grid. Tablet and mobile retain their responsive layouts.
- Transition: restrained warm background fade, existing fine rule and responsive gallery spacing; native scrolling and reduced-motion behavior retained.
- Artwork remains visibly labeled development-only composition; no added dependencies or external images.

Validation of the refinement: lint, TypeScript, production build and diff whitespace checks passed. Production Chrome screenshots inspected at 320px, 375px, 768px and 1440px. Browser measurements found no horizontal overflow at those widths, 720×450 short landscape, or 320px with root text doubled to 200%. At desktop all three images share a row and height. Tab reaches the visible skip link with a solid focus outline; reduced-motion emulation reports native `auto` scrolling. The only navigation links target existing page anchors. These checks are focused verification, not a full accessibility audit.

The owner approved these code changes for commit and push to PR #1. Nothing merged.

## Local exhibit asset integration — approved

Uses the owner's asset handoff in PR #1 (https://github.com/lidialuncian/the-history-of/pull/1#issuecomment-6688176780): three original AI-generated WebP illustrations in `public/images/exhibits/`. These replace all three visible CSS placeholders through the existing typed image data and `next/image` card rendering. Each has descriptive alt text and the visible disclosure “AI-generated illustrative artwork”; these are not archival images or historical evidence. The fallback remains available for future subjects without images. All three exhibits remain Coming soon.

The existing responsive dimensions and centered object-fit crops were preserved. Ballet's full pose remains readable at 320px and desktop. Lint, TypeScript, production build and whitespace checks pass. Production Chrome checks on port 3000 verified all three optimized images decode successfully, no horizontal overflow at 320/375/768/1440px or 200% root text at 320px, visible keyboard focus and reduced-motion native scrolling. Mobile and desktop gallery screenshots were inspected.

The owner approved the image integration and full-width header-divider refinement for commit and push to PR #1. The later masthead/hero proposal is outside this asset integration. Do not merge.

## Balanced Editorial Entrance V2 — pending owner code and visual approval

Implements `docs/tasks/homepage-v2-balanced-entrance.md` and PR #1 comment https://github.com/lidialuncian/the-history-of/pull/1#issuecomment-6688386285. The full-width header keeps its inner content alignment, with a mixed-case serif masthead and supporting catalog label. Navigation now reads “The Collection” with a minimum 44px touch height. The centered hero uses a shorter content-aware minimum height, fluid display type, “Discover the Collection” anchor and one quiet metadata row. Supporting masthead text and metadata are hidden on smaller screens. Existing colors, exhibit cards, imagery, gallery grid, keyboard focus and reduced-motion handling remain intact. No dependencies added.

Final validation: lint, TypeScript, production build and diff checks pass. Production Chrome checks on port 3000 cover 320/375/768/1440px, short landscape 720×450 and doubled root text at 320px, with no horizontal overflow. Skip-link keyboard focus is visible; reduced-motion mode uses native `auto` scrolling. At 1440×900 the collection heading and first image edges are visible without scrolling. Exact font sizes and spacing remain provisional pending visual review.

Review screenshots (local artifacts): `/tmp/homepage-v2-1440x900.png`, `/tmp/homepage-v2-768x1024.png`, `/tmp/homepage-v2-375x812.png`. Owner requested code approval before commit/push; this iteration remains local pending approval. Do not merge PR #1 before screenshot review.

### Simplified V2 comparison — pending review

At the owner’s request, removed the header divider and hero metadata row so only the collection rule separates the entrance and gallery. Serif masthead, collection navigation, hero typography, palette and cards remain. Supersedes the metadata/header-rule treatment described in the first V2 iteration above. Lint, TypeScript, production build and browser checks pass, including 320px, 375px, tablet, desktop, short landscape, doubled root text, keyboard focus and reduced motion. New comparison screenshots: `/tmp/homepage-calm-1440x900.png`, `/tmp/homepage-calm-768x1024.png`, `/tmp/homepage-calm-375x812.png`. Changes remain local for code and visual approval.

### Matched divider revision — approved

The owner selected restoring the header line at the collection’s content width. The border now belongs to `.site-header-inner.page-width`, matching the collection rule’s width, color and weight at every breakpoint. Hero metadata remains removed; the rest of the current visual iteration is preserved. This supersedes the full-width/no-header-divider treatments above. The owner approved the final combined V2 revision for commit and push to PR #1. Earlier pending-review notes describe intermediate iterations; the matched dividers and removed metadata are the final selected treatment. Do not merge.
