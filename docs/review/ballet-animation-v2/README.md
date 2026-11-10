# Ballet Animation V2 — video integration prototype

Status: visual prototype; not ready to merge. Branch: `feat/ballet-entrance-animation`.

## Preview

Run `npm run dev`, open the printed local URL (currently http://localhost:3000), scroll to the collection and select Ballet. Direct `/ballet` visits never replay the entrance. The older `/ballet/entrance-preview` pose study is retained separately.

- [Desktop recording](desktop-sequence.webm)
- [Mobile recording](mobile-sequence.webm)
- Desktop: [start](desktop-start.png), [awakening](desktop-awakening.png), [pirouette](desktop-turn.png), [leap](desktop-leap.png), [stage reveal](desktop-handoff.png), [landing](desktop-landing.png), [freeze](desktop-freeze.png).
- Mobile: [start](mobile-start.png), [awakening](mobile-awakening.png), [pirouette](mobile-turn.png), [leap](mobile-leap.png), [stage reveal](mobile-handoff.png), [landing](mobile-landing.png), [freeze](mobile-freeze.png).
- Final artwork at [320](hero-320.png), [375](hero-375.png), [768](hero-768.png), [1440](hero-1440.png) CSS pixels.

## Assets and latest owner correction

The owner replaced `public/animations/ballet/start-frame.png` and `end-frame.png` during implementation. Both updated sources are 1254 × 1254. `approved-start.webp` and `approved-final.webp` are lossless conversions of those exact updated PNGs; no new artwork was generated. They replace the homepage Ballet image, playback poster and Ballet hero respectively. Earlier locally extracted still variants are not used.

Playback uses the supplied `painting-comes-alive-1080.mp4`: 1080 square, 24fps, 20.9167 seconds, H.264, about 6.6 MiB, with MP4 metadata already before the media payload for progressive playback. The larger owner-supplied `painting-comes-alive.mp4` remains untouched locally and is not downloaded by the website. The four individual clips and the handoff archives named in the task were not present locally.

The latest stills match the corresponding pose/stage compositions but are not pixel-identical to the decoded 1080 video: they have a different source resolution and detail. A canvas comparison after resizing the supplied stills to 1080 measured mean absolute channel differences around 10.6/255 at the beginning and 8.6/255 at the end (including alpha). Therefore this prototype does **not** certify an exact frame match after the owner's artwork replacement. Keep the owner's updated artwork; export approved stills directly from the final playback encode or re-author the encode boundaries to those stills for exact continuity.

## Implementation

A Ballet-specific client provider persists the same video across navigation. The original semantic card link remains usable with keyboard, modifier keys, JavaScript disabled and ordinary browser navigation. Other subjects and the article structure are preserved.

Playback starts fitted inside the existing card artwork dimensions. At **14.42 seconds**, requestVideoFrameCallback (timeupdate fallback) pauses playback just before first landing contact, which occurs around 14.5 seconds. The prefetched `/ballet` route commits, the same video aligns to the destination hero, and playback resumes. The destination owns the visible landing, return to pose and freeze. No moving-dancer crossfade is used. A brief airborne hold is possible while the destination commits.

The hero retains its tall rounded arch. Its square artwork is inset to preserve hands, feet and extended leg; an AI-generated empty stage extension fills the remaining crown. The playback overlay uses the same arch clipping. The owner explicitly authorized background generation while preserving dancer scale. The generated plate contains no dancer; it is behind the unchanged video/still, with a narrow edge feather outside the figure. The same inset dimensions are used during playback and freeze.

Video is mounted/requested only after intentional activation. The route is prefetched and the final still prepared then. There is no video download on ordinary homepage arrival. Reduced motion, Save-Data and reported 2g connections use normal immediate navigation. Skip and Escape remain available throughout. Wheel/touch scrolling or resizing finishes the animation, retaining user control. Asset errors, playback rejection or 3.5 seconds without playback progress fall back to navigation. Back cancels without pushing a new history entry. No scroll lock or focus trap is introduced; completion focuses the article main without scrolling it away.

## Technical and creative limitations — review before approval

- **True character emergence is not implemented.** This is an interim video-to-page proof. The source is flattened dancer-plus-stage footage, and the whole video rectangle relocates into the destination. There is no foreground segmentation, static clean plate or independent dancer crossing the artwork boundary. Relocation can read as a position/scale jump, rather than a leap between independently composited stages.
- The source contains the same theatrical backdrop throughout. The surrounding Ballet page is revealed before contact, but a distinct new video stage is not composited behind the dancer.
- The full natural 20.9-second choreography is retained and skippable. Shortening it to 4–7 seconds without speeding up human movement needs approved edited source moments with credible matching boundaries. It is too long for a final entrance.
- The updated stills are owner-approved source artwork, not exact decoded frames of the available 1080 encode; small texture/detail changes remain at playback boundaries.
- The square-stage inset preserves limbs. An owner-authorized generated clean stage plate fills the arch; slight architectural seams can remain at the transition between the original square frame and the generated surround. It does not alter or regenerate the dancer.
- No mask has been manufactured from the flattened video. A production emergence needs a temporally consistent alpha dancer render/matte plus a clean stage plate (or a new source render with those layers). Source footage itself approaches the square frame edge during the leap; compositing cannot recover missing pixels.
- Chrome desktop/device emulation was tested. Physical iOS/Safari, full screen-reader review and real low-end-device decode measurements remain outstanding.

## Validation

Passed: ESLint, TypeScript, `git diff --check`, and production `npm run build -- --webpack` (all routes prerender). Standard `npm run build` was attempted; Turbopack fails with an environment internal-port `Operation not permitted` error, including after an escalated retry. No Next.js configuration or dependency was changed to conceal that failure.

Browser checks: complete desktop and mobile sequences, keyboard Enter activation and Escape skip, final focus, missing-video error fallback, Back cancellation, interruption, reduced-motion direct navigation, JavaScript-disabled navigation, and responsive widths 320/375/768/1440 without horizontal overflow. Dedicated checks verify no MP4 request before activation and timeout fallback when video delivery is stalled. Screenshots and recordings are the review evidence; they show the interim limitations rather than claiming completed emergence.

## Generated stage extension

Built-in imagegen was used after the owner authorized additional background. Saved project asset: `public/animations/ballet/stage-extension-v2.webp`. Reference: updated `end-frame.png`. The generated output was inspected to verify no person/limb remained; the original still/video remains a separate unchanged foreground rectangle, rather than using a generated ballerina. Prompt: [stage-extension-prompt.txt](stage-extension-prompt.txt). No image-generation API key, new dependency or external image URL is required at runtime.

## Homepage start-image background extension

The owner also requested the same treatment for the homepage start artwork. Built-in imagegen created a wide, empty stage plate from `start-frame.png`, saved as `public/animations/ballet/homepage-stage-extension-v2.webp`. The approved start image remains a separate square foreground at the exact original video scale. Only the narrow outer background edges are feathered; the dancer is not regenerated or stretched. A Ballet-only frame wrapper in `ExhibitCard.tsx` and styles in `globals.css` align the square still with the existing measured playback square. Homepage card dimensions and other exhibits retain their design. The existing generated-artwork attribution applies to this surround too.

[Generation prompt](homepage-stage-extension-prompt.txt). Screenshots: [320](homepage-background-320.png), [375](homepage-background-375.png), [768](homepage-background-768.png), [1440](homepage-background-1440.png), [playback](homepage-background-playing.png). Generated architecture is an approximate continuation; small seams can remain where it meets the approved frame.

Homepage extension validation: Chrome at 320/375/768/1440 CSS pixels showed no horizontal overflow. At 1440, the still square and playback square had identical x/y/width/height (all differences zero). Playback and Escape skip passed. ESLint, TypeScript, diff whitespace check and the webpack production build passed after the wrapper change. The earlier full-sequence recordings predate this homepage surround; the dedicated homepage screenshots above show the latest start treatment.
