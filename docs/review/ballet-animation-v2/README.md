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

The hero retains its tall rounded arch. Its square artwork is inset to preserve hands, feet and extended leg; a stage-toned solid underlay fills the remaining crown. The playback overlay uses the same arch clipping. This underlay is deliberately simple and visibly different from the former fully extended illustration.

Video is mounted/requested only after intentional activation. The route is prefetched and the final still prepared then. There is no video download on ordinary homepage arrival. Reduced motion, Save-Data and reported 2g connections use normal immediate navigation. Skip and Escape remain available throughout. Wheel/touch scrolling or resizing finishes the animation, retaining user control. Asset errors, playback rejection or 3.5 seconds without playback progress fall back to navigation. Back cancels without pushing a new history entry. No scroll lock or focus trap is introduced; completion focuses the article main without scrolling it away.

## Technical and creative limitations — review before approval

- **True character emergence is not implemented.** This is an interim video-to-page proof. The source is flattened dancer-plus-stage footage, and the whole video rectangle relocates into the destination. There is no foreground segmentation, static clean plate or independent dancer crossing the artwork boundary. Relocation can read as a position/scale jump, rather than a leap between independently composited stages.
- The source contains the same theatrical backdrop throughout. The surrounding Ballet page is revealed before contact, but a distinct new video stage is not composited behind the dancer.
- The full natural 20.9-second choreography is retained and skippable. Shortening it to 4–7 seconds without speeding up human movement needs approved edited source moments with credible matching boundaries. It is too long for a final entrance.
- The updated stills are owner-approved source artwork, not exact decoded frames of the available 1080 encode; small texture/detail changes remain at playback boundaries.
- The square-stage inset preserves limbs but leaves a visible solid crown inside the arch. A clean extension from the same stage would improve the final artwork without inventing another dancer.
- No mask has been manufactured from the flattened video. A production emergence needs a temporally consistent alpha dancer render/matte plus a clean stage plate (or a new source render with those layers). Source footage itself approaches the square frame edge during the leap; compositing cannot recover missing pixels.
- Chrome desktop/device emulation was tested. Physical iOS/Safari, full screen-reader review and real low-end-device decode measurements remain outstanding.

## Validation

Passed: ESLint, TypeScript, `git diff --check`, and production `npm run build -- --webpack` (all routes prerender). Standard `npm run build` was attempted; Turbopack fails with an environment internal-port `Operation not permitted` error, including after an escalated retry. No Next.js configuration or dependency was changed to conceal that failure.

Browser checks: complete desktop and mobile sequences, keyboard Enter activation and Escape skip, final focus, missing-video error fallback, Back cancellation, interruption, reduced-motion direct navigation, JavaScript-disabled navigation, and responsive widths 320/375/768/1440 without horizontal overflow. Dedicated checks verify no MP4 request before activation and timeout fallback when video delivery is stalled. Screenshots and recordings are the review evidence; they show the interim limitations rather than claiming completed emergence.
