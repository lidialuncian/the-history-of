# Homepage V2 — Balanced Editorial Entrance

Status: APPROVED DIRECTION FOR CODEX VISUAL ITERATION; exact font sizes and spacing are provisional
PR: #1, branch: feat/homepage-prototype
Date: 2026-11-06

## Context / user feedback
The current desktop localhost screenshot has an elegant centered serif headline, but the tiny uppercase brand and isolated Explore control feel weak, while the large empty hero and absence of a visible gallery cue make the site look unfinished. A full-width border by itself does not fix the hierarchy. The owner selected a *balanced* museum/editorial direction: subtle exhibition details, not empty minimalism and not overdecorated magazine styling.

## Preserve
- Existing ivory/ink/muted wine palette.
- Current display serif + clean sans pairing and centered headline 'Everything has a history.' with italic wine-colored 'history.'
- Semantic anchors, accessible focus behavior, responsive collection grid and card components.
- Natural scrolling, reduced-motion behavior, no forced scroll effects.
- The Collection follows the entrance; do not reintroduce a fullscreen featured Ballet story.

## Required V2 design iteration
### Header
- Give 'The History Of...' a visual identity: a modest serif wordmark (working range 26-32px on wide desktop; fluid on smaller screens), mixed case rather than tiny tracked uppercase.
- Optional restrained micro-label below or beside wordmark, such as 'A COLLECTION OF STORIES'; hide or reposition it if the mobile header becomes crowded.
- Rename header navigation from vague 'Explore' to 'The Collection', linking to #collection. Add a small minimal direction arrow if it improves the composition.
- Make the header divider truly full viewport width while keeping the brand/nav aligned to the main editorial container: full-width outer header with inner max-width wrapper. Take care if this header change exists only in the owner's local working tree: inspect/merge rather than blindly overwrite it.
- Make nav focus/touch targets comfortable (at least ~44px interactive height).

### Hero
- Keep the existing centered editorial H1, elegant italics, and calm background. Do NOT add a dominant hero photo/video or turn the section into a marketing banner.
- Reduce excessive desktop whitespace so the viewport suggests there is a collection immediately below. Aim for a glimpse of the collection heading or a meaningful transition cue on common desktop viewports, without hardcoding brittle viewport clipping.
- Use a content-aware min-height, responsive vertical gaps, and thoughtful H1 scaling. Allow short-screen phones and 200% text zoom to expand; never clip or overlap.
- Add a *single quiet* museum-catalog metadata row (e.g. 'ART · CULTURE · IDEAS' and '01 / THE ENTRANCE') near the bottom only if it genuinely balances the composition. Subordinate it to H1. Avoid fake claims such as 'EST. 2026' unless intentionally approved as branding.
- CTA text proposal: 'Discover the Collection'; link to #collection and retain visible affordance.
- On mobile, simplify/remove marginal text rather than squeezing it.

### Hero → Collection
- Keep the collection as an immediately scannable exhibition, not a full-screen standalone panel.
- Refine transition with spacing, rules and very subtle warm background shift; no scroll snapping, parallax, full-screen animation or arbitrary ornamental blocks.
- Preserve existing grid and exhibit card behavior. Do not add new subjects, unrelated UI, or fake links.
- Production imagery generated in ChatGPT was handed off separately; only integrate if local files are actually present in the branch. Do not silently link missing assets.

## Desired layout hierarchy
1. Expressive but restrained wordmark and clear collection nav
2. Beautiful centered exhibition-title hero
3. Supporting one-sentence description and clear discover CTA
4. Quiet metadata (optional, low contrast)
5. A natural invitation into 'Choose your curiosity' and the exhibition cards

## Responsive acceptance criteria
- Desktop around 1440x900: header reads as brand, hero feels intentional (not blank), and below-the-fold content is signaled.
- Tablet around 768: typography and header remain balanced.
- Mobile 375 and 320: no sideways overflow, awkward linebreaks, clipped text, or min-height traps.
- Short landscape 720x450 and 200% zoom retain usable controls and content.
- Keyboard focus and skip-to-content remain visible; reduced-motion behavior maintained.
- Run lint, TS, build; screenshot the homepage at 1440x900, 768 and 375 before seeking merge.

## Workflow
Iterate in feat/homepage-prototype and update PR #1, do not merge. Post screenshot paths or images for human visual review. Summarize what changed, checks run and anything still provisional.
