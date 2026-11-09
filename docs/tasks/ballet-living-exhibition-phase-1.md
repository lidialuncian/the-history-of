# The History of Ballet — Living Exhibition

Status: **Approved UX direction**; Phase 1 below is approved for Codex implementation. Later phases require visual/editorial review.
Branch: `feat/ballet-living-exhibition` (branched from merged homepage `main`)
Project context: `docs/vision.md`, `docs/design-system.md`, `docs/decisions.md`, `AGENTS.md`.

## Product promise
An accessible, immersive, chronological narrative of Ballet, designed as a sequence of evocative museum rooms. The main text is a complete reading experience; timeline and discoveries enrich it without interrupting reading. The page contrasts with the restrained ivory homepage via a soft, graceful, romantic Ballet-specific visual theme.

## Approved experience
- **Living Exhibition:** chapter/room atmospheric introduction, readable historical story, optional contextual discoveries, varied image/person/artifact treatments, gentle transition to next period. Not every chapter must have the identical structure.
- **Hybrid story + timeline:** scroll normally; discreet desktop chapter navigation with active location, and a compact mobile chapter index. Jump by anchor without hijacking scroll. Historical dates are not the same as reading progress.
- **Curated discovery cards:** most optional details opened from clearly labeled cards embedded in chapters. Small glossary-like facts may expand inline.
- **Occasional interactive artwork:** special, purposeful image hotspots or annotated details for selected objects, with accessible equivalent list.
- **Return to story:** desktop side panel and mobile full-screen sheet/dialog as eventual target. Opening discovery preserves story scroll position; close/back/escape restore focus; background interaction/scroll managed accessibly; no nested dialogs; no autoplay.
- **Theme evolution:** overarching blush/ivory/muted rose and elegant serif; era accents may change subtly without impairing legibility.
- **Narrative content:** imagery, verified historical chronology, people, places, quotations and media attribution. AI-generated illustrative work must never masquerade as archival/historical evidence.
- **Motion:** meaningful, calm, optional; preserve reduced-motion and keyboard behavior. No mandatory interactive steps.
- **Ballet entrance animation (LATER):** from the Ballet exhibit artwork, dancer visually steps out, makes one graceful pirouette, and transitions into the Ballet page hero; must be skippable, lightweight and reduced-motion friendly. Do not prototype this as a simple page fade and label it complete.
- **Cabinet of Curiosities (FUTURE, platform-wide):** searchable/browsable shared discoveries across Ballet, Tango, Opera etc. Out of MVP. Model discovery IDs and associations so future reuse is plausible, but do not build a CMS/DB or cabinet UI now.

## Draft chapter outline (historical boundaries and copy require editorial/source verification)
1. Renaissance courts — ballet's roots in Italian court festivities, fifteenth/sixteenth centuries.
2. From court to stage — French court ballet and institutions, seventeenth/eighteenth centuries.
3. Romantic dream — nineteenth-century supernatural imagery, changing costume and pointe technique.
4. Classical spectacle — large-scale theatrical works and developments in nineteenth-century Russia.
5. Reinvention — twentieth-century artistic experimentation, companies and choreographers.
6. Ballet today — global traditions, ongoing debate and contemporary expression.
These are narrative organizing devices, not claims that eras began or ended neatly on specific dates.

## Phase 1 — IMPLEMENT NOW: experience skeleton + visual review
Goal: a production-quality **navigable first draft** with compelling layout and reusable structure, not a full research publication.

Scope:
1. Create a semantic, responsive `/ballet` route using the existing Next 16 App Router, React, TypeScript and project dependencies. Read local `node_modules/next/dist/docs/` guidance as AGENTS.md requires before editing Next-specific code.
2. Develop Ballet theme scoped to its route; keep current homepage appearance unchanged. Prefer component-scoped/CSS variables over new dependencies.
3. Design Ballet hero: accessible return-to-collection link; subject marker/category; 'The History of Ballet' and a concise evocative deck; atmospheric hero visual sourced from existing **illustrative Ballet image** if appropriate, clearly attributed. No falsely archival framing.
4. Build six chapter sections driven by **typed static data** (ID, label, approximate period, heading, summary, image/credit optional, story blocks, discoveries optional). Use usable, concise, **clearly marked provisional editorial copy** rather than repeated lorem ipsum or fabricated precise historical claims. Keep space for later verified citations.
5. Build responsive timeline/chapters navigation using anchors, current chapter indicator if feasible without extra dependencies, keyboard focus/skip behavior; optional sticky desktop rail and compact mobile chapter index. No scroll-jacking/snap.
6. Implement accessible section rhythm: full/wide visual chapter entrances interspersed with comfortable bounded-width story text; a stronger visual change every chapter but avoid monotonous fullscreen panels. Preserve responsive image sizes and alt text.
7. Connect the existing Ballet homepage exhibit card to `/ballet` by setting `status: "published", href: "/ballet"` in `src/data/subjects.ts`. Leave Tango and Opera `coming-soon`. Verify card remains semantically linked.
8. Include **one STATIC curated discovery card preview** in a chapter as a clearly labeled preview; don't imply a functioning interactive card until it actually opens. Do not implement the full drawer/hotspot system in Phase 1.
9. Document any actual content sources; distinguish original illustrative assets from primary/archival historical images. Do not generate fake citations or use copyrighted imagery without clearance.
10. Responsive and a11y checks: ~320, 375, 768, 1440px and short viewport; reduced motion, 200% zoom, keyboard, focus, image loading. Run lint, TypeScript (`npx tsc --noEmit`), build.

Deliverable: update PR (create one from this branch to `main` once code exists); attach/describe desktop & mobile screenshots, list remaining editorial placeholders and no-progress blockers. **DO NOT MERGE** until owner reviews screenshot.

## Phase 2 — NOT YET CODEX'S CURRENT TASK: historically verified content + navigation refinement
- Research chapter narrative with reputable historical sources and provide per-chapter source references. Don't invent quotations, years, archival photos or performer identities. Prefer licensed/public-domain historical images with attribution, copyright checks, and captions.
- Implement richer people/place/media blocks; mobile/desktop timeline usability refinement; review actual story length and historical period precision.
- Decide media licensing and editorial data format based on actual needs (static TS/MDX vs CMS). No DB, ORM or CMS solely for speculative future capabilities.

## Phase 3 — AFTER REVIEW: optional discoveries
- Typed reusable discovery object ID and associations to one/multiple subjects/chapters; curated discovery cards; accessible desktop side panel and mobile dialog/sheet; focus and scroll restoration; Escape and Back behavior, deep link strategy.
- One meaningful interactive artwork sample with marked details and equivalent textual list; no hover-only hotspots.
- Test with keyboard, touch, reduced motion, screen reader basics.
- Future platform-wide Cabinet should consume the same shared discovery identities, but is expressly **not** part of this milestone.

## Phase 4 — SPECIAL ANIMATION, SEPARATELY APPROVED
- Magical homepage-card-to-Ballet entrance, with dancer stepping from illustration, one pirouette, finishes in Ballet hero. Requires planned assets and realistic technical spike; mobile/performance/skip/reduced-motion fallbacks. Do not attempt in Phase 1.

## Guardrails
- No new animation library, map library, auth, database, CMS, or complex router behavior without design review.
- No autoplay music or video, no decorative animations delaying navigation.
- No invented historical source attributions.
- Clear semantic landmarks, readable contrast, focus management, touch size.
- Do not change visual-approval-locked homepage hero/header/collection except Ballet card link.
