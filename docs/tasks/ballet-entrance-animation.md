# Ballet — Magical Entrance Animation

Status: Approved **creative direction**, implementation initiated as isolated feature; animation asset feasibility and final choreography require browser review.
Branch: `feat/ballet-entrance-animation`
Base: Ballet Phase 1 branch head `49ec58dd7661bfda159e8a242c3837bb6e65ce92` because PR #2 was still OPEN when this branch was created. **Before opening a PR, wait for the owner to merge PR #2, fetch latest `main`, and bring this branch up to date with `main`; avoid duplicate Ballet Phase 1 changes.** Do not merge anything automatically.

## Storyboard / magic to preserve
Visitor selects the **Ballet exhibit card** on the homepage.
1. The card's still ballet artwork feels alive; the ballerina subtly separates from the image/its theatrical setting.
2. She appears to step/emerge from the artwork, performs **one graceful pirouette** (not repeated spinning, not a generic card zoom).
3. The transition carries us into the **/ballet** entrance hero. Her movement resolves there, as though she has entered a new exhibition room.
4. Visitor is immediately able to read/navigate the Ballet page; animation never blocks navigation indefinitely.
The result should be quiet, poetic, and cinematic, not a flashy loading screen. No autoplay sound/music.

## Important asset/technical reality
A single flattened WebP image **cannot itself provide believable limb movement, walking, a 3D spin, or a consistent dancer silhouette**. Do not pretend CSS rotating the whole rectangular image achieves the creative brief. Choose a feasible asset strategy based on actual resources, such as separately generated transparent figure frames/short original motion clip/layered image sequence (appropriately licensed), with visual continuity between the homepage original art and Ballet hero variant. Transparencies, camera framing, and continuity are essential. If high-fidelity assets are not currently available, implement a genuine progressive-enhancement transition and document the precise asset requirements; **do not claim the full ballerina pirouette is complete**.

## Development stages
### A. Feasibility spike / visual proof — FIRST
- Audit existing source art `public/images/exhibits/ballet.webp` and page hero `public/images/exhibits/ballet-arch-v2.webp`. Compare dancer position, crop and silhouette.
- Propose 1–2 achievable transition approaches, explicitly distinguishing motion authored with CSS/Motion from dancer animation requiring new assets.
- Build a small in-browser prototype of the card-to-page transition if possible, with a static fallback and representative performance. Share screenshot/video/GIF or clear reproduction steps.
- Record bundle/runtime/performance impact, whether additional assets are required, and expected mobile behavior. No full production rollout until the approach is visually reviewed.

### B. Production interactive transition (after proof review)
- Use the existing `motion` dependency only when needed. No new heavy libraries by default.
- On primary pointer/touch/keyboard activation of **published Ballet card**, retain true semantic link behavior and destination `/ballet`. Respect Ctrl/Cmd-click, open-in-new-tab, download/preview semantics and ordinary browser navigation.
- Consider shared overlay, measured image/card bounds, and final hero alignment; ensure movement resolution at destination, not abrupt image replacement.
- If animation cannot play (network/device/performance), navigate immediately to `/ballet`. Avoid timeouts that trap the visitor, double navigation, hydration surprises, or scroll restoration regressions.
- An immediately visible **Skip animation** affordance. Respect `prefers-reduced-motion: reduce` by navigating with no dance, no fade delay. Provide simple/no-motion fallback for low-end mobile.
- Keyboard-operable controls, sensible focus at destination and screen-reader-safe non-announced decoration. No overlay focus trap unless explicitly needed; no blocking reading once route is loaded.
- Keep homepage calm and visually untouched at rest; do not animate Tango/Opera.
- Make animation replayable from the homepage Ballet card on subsequent intentional visits; do not auto-replay on refresh/direct `/ballet` URL or browser back.
- Maintain graceful behavior for history Back/Forward and deep links.
- Page should never require JS to reach /ballet.

## Visual acceptance criteria
- Card illustration is recognizable throughout; dancer apparently emerges rather than simply rotating a photo. Exactly one pirouette and visual continuation into the Ballet page hero when assets support it.
- Original Ballet card retains layout, semantics and accessible click target.
- No cut limbs, odd duplicate dancers, flashes, blank frames, stretched images or jarring crop jump.
- Desktop 1440, tablet 768, phone 375 and 320, short/zoomed viewport. No horizontal scroll caused by overlay.
- Under reduced motion, immediate accessible navigation without dance.
- Interaction remains responsive; test interruption and repeated click.
- Page and image attribution remain honest: AI illustration is not archival footage.

## Out of scope
- Historical content Phase 2; timeline redesign; discovery panel work; Cabinet of Curiosities; auto-playing audio; changes to other exhibit cards; global route transition system.
- Do not invent new historical content or change the approved homepage hero/header layout.

## Deliverable and workflow
1. Commit this planning document on the isolated branch.
2. **Start with an animation feasibility/visual prototype** rather than declaring fully finished motion based on a CSS effect.
3. Post alternative strategy with pros/cons and a short screen recording or reproducible preview.
4. Get owner's review of whether it feels magical and graceful.
5. Then complete the implementation, validate `npm run lint`, `npx tsc --noEmit`, `npm run build`, pointer/keyboard/reduced-motion/mobile, and create PR to `main` **after Phase 1 is merged and branch is synchronized**.
6. Do not merge without explicit approval.

## Initial exploration questions for Codex
- Do available art assets provide a separable ballerina figure or only flattened imagery?
- Which visual movement can be achieved convincingly with existing resources, and which demands new image/video frames?
- Can the approach preserve instant page navigation on reduced-motion and slow devices?
- How can the transition finish convincingly in the Ballet hero without mismatched crops/subjects?

## Stage A implementation status — 2026-11-09

PR #2 is merged. This feature branch was synchronized with `origin/main` at `c709524` before implementation. An isolated nine-pose visual proof is available at `/ballet/entrance-preview`; the actual homepage entrance is not enabled. See [the feasibility review, asset requirements and recording](../review/ballet-entrance/README.md). Choreography smoothness, silhouette continuity and final hero matching still require visual review and additional registered motion assets before Stage B or a production PR.
