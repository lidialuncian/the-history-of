# Ballet Animation V2 — Video-led continuity and matched artwork

**Status:** approved direction for Codex to implement as a **visual prototype**, not approved for merge.
**Feature branch:** `feat/ballet-entrance-animation`. Continue existing unmerged work; do not overwrite it. Check actual PR/branch state locally first.

## Core change — the owner explicitly identified a visual mismatch
The existing Ballet article hero uses a different ballerina / theater than the approved Seedance videos. **Replace the article hero artwork to match the approved clip's final still.** Also match the homepage Ballet exhibit artwork to the start of the awakening clip, otherwise the opening transition is equally broken.

Use these new files, extracted from the approved animation and provided in the ChatGPT handoff `ballet-animation-v2-matched-stills.zip`:
- `homepage-ballet-start.png`: exact frame 1 of `awakening_1080.mp4`.
- `ballet-hero-final.png`: exact final freeze still from the approved stitched 1080 video.
These two stills are both **1080 × 1080 square** with the video artwork. They are matched video frames, not new AI artwork inventions.

**Critical:** The current Ballet hero is a tall rounded-top *arch*. Keep the **arched silhouette** but adapt/reframe its interior to the square video asset without cutting off hands/feet/extended leg. If the current CSS `object-fit: cover` crops limbs, consider a contained/scaled image with seamless background underlay or an expanded canvas drawn from the **same actual stage**; never replace with another dancer/background. Prefer exact frames to any reinterpretation. Test 320/375/768/1440 widths.

## Approved storyboard
Homepage Ballet card still → she breathes/lowers arms/looks around/smiles → steps out across artwork boundary → full pirouette → graceful leap **completes its airborne arc** → **the Ballet page/stage appears at the handoff, as she comes down from the leap** → she lands on the Ballet exhibition stage → returns into the page's arched hero artwork → resumes original extended pose → freezes.

Four approved video clips are in ChatGPT owner-provided `the-history-of-ballet-animation-codex-handoff.zip`:
- `awakening_1080.mp4`
- `pirouette_1080.mp4`
- `leap_1080.mp4`
- `landing_freeze_1080.mp4`
Plus combined `painting_comes_alive_1080_preview.mp4`, ~21 sec, 1080 square, 24fps; use as choreography **master/reference, not automatically a 21-second blocking page transition**.

## Character emerging — honest technical constraints
Current clips have ballerina + backdrop flattened into the video. Simply scaling/rotating a video *rectangle* is NOT an emergence effect. Explore subject foreground segmentation (masked video/cutouts) or use a supported compositing approach with precise mask/background handling. The true out-of-frame illusion needs the dancer overlay to cross the card boundary while the stage remains static. Verify mask edge quality, temporal flicker and garment edges. If segmentation is impractical, demonstrate a high-quality video-to-page transition honestly as an interim fallback, and specify remaining assets/tech; do **not** mark true character emergence complete.

## Critical stage-change cue — owner correction (2026-11-10)
The Ballet page must appear **immediately when the leap finishes its airborne movement**, not after the ballerina finishes landing and returning to pose. The jump is the bridge between two theatrical stages.

Visual sequence:
1. Homepage stage is visible during awakening, stepping out and pirouette.
2. She prepares and leaps away; maintain continuous dancer motion.
3. **At the end of the leap / just before first landing contact, reveal the Ballet page and its new stage** (stage/background transition timed to the leap). The viewer should perceive that she has jumped *from one stage into another*. The exact handoff frame should be chosen by inspecting actual video so the floor contact, perspective and character position remain credible.
4. She **lands already on the Ballet page**, then lifts into the final extended arabesque, aligns with the hero artwork and freezes. The landing/freeze scene belongs entirely to the destination stage.
5. The page's surrounding title and content may resolve during/after the stage reveal, but it must already be the Ballet page at landing; don't hold the entire old page visible until the final freeze.

This is a composited stage change, not a hard cut that teleports the ballerina or a late page fade. Preserve character identity/position, continuity of motion and full limbs. Static matching Ballet hero image should be the final freeze frame. If existing leap and landing source footage differ in stage/background, use masking/foreground separation or a clean stage-change treatment that can convincingly cross the boundary. Do not conceal mismatches with a long crossfade or two overlapping dancers.

## Clip sequencing and continuity
- Stitch short selected moments (rather than the full 21sec) to create a skippable ~4–7 second user-initiated entrance *if the motion can remain coherent*. Never time-stretch human motion unnaturally.
- Use exact boundary frames / matching stills to prevent visual swaps. Do not crossfade moving figures into two ghost ballerinas.
- Preload/prepare the Ballet page before the leap ends; reveal the destination **at the leap-to-landing handoff**, so landing, return to pose, and final freeze all happen visibly on the Ballet page.
- Prefer video-encoded versions optimized for supported browsers, preload only as sensible, lazy load nonessential content, and retain static fallbacks.
- Preserve existing design, accessibility, correct attribution as AI-generated illustrative content, and no new historical claims.
- Reduced-motion: navigate immediately with no animation. Show skip affordance throughout; allow ordinary keyboard/pointer/new-tab link behavior and never trap navigation.

## Required implementation / review
1. Inspect the animation PR/branch; don't assume current GitHub PR number.
2. Import owner-provided video clips and matched stills into `public/` with descriptive names, or use optimized web-friendly variants. Do not use private ChatGPT sandbox URLs in code.
3. Wire the homepage Ballet card image to the **awakening start frame**, and Ballet article hero to the **landing final frame**. Do not alter Tango/Opera.
4. Verify correct matching and no limb clipping on desktop/mobile before building the transition.
5. Build a character-led transition proof; show a desktop and mobile screen recording and still screenshots of start, emergence, pirouette, **stage change at leap-to-landing**, landing on destination, and final freeze.
6. Run lint, TypeScript, build, reduced motion, keyboard navigation, browser back, interrupted navigation, missing-asset fallback, mobile network/perf checks.
7. Update the existing animation PR (or create one if none exists), explain whether the footage is truly foreground-separated vs merely scaled. Do not merge until owner approves.

**Potential source mismatch to resolve:** The first awakening frame and final landing still need not be visually identical. They must each exactly match their corresponding still artwork for entrance and ending. If the hero's original composition is different, the user's approved animation takes precedence.
