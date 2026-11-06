# Homepage — implementation brief

Status: direction partially approved; not yet approved for full implementation.

## Goal
Introduce The History Of... as an immersive editorial destination and invite exploration of histories through distinctive subject worlds.

## Approved hero direction (2026-11-06)
- Editorial Entrance: warm ivory, elegant headline-first opening, minimal navigation, ample whitespace.
- No dominant fullscreen image/video in the initial viewport.
- Cinematic imagery begins in the featured story below the hero.
- The homepage stays visually neutral; subject pages provide their own themes.
- Respect accessibility and reduced motion.

## Current layout proposals (not final)
- Exhibition-like center-aligned hero, a short eyebrow, large serif headline, brief supporting line, and a discovery action.
- Desktop hero approximately 85–95svh with clear progression to the featured story; mobile content-aware height.
- Candidate headline: "Everything has a history." Candidate subtitle: "The stories behind what moves us, inspires us, and connects us."
- Subsequent sections: featured ballet story, browse subjects, follow the thread discovery. These still need refinement and approval.

## Desired experience
- Clear brand identity and an inviting first impression.
- Featured subject storytelling with striking imagery.
- Discoverable cards for subjects such as ballet, tango, and opera.
- Consistent navigation into subject pages.
- Responsive and accessible presentation.

## To decide before implementation
- Hero layout and copy.
- Navigation and information architecture.
- Subject-card interactions.
- Motion behavior and reduced-motion fallback.
- Exact visual tokens and image sources.
- Whether subject pages are launched or marked as coming soon.

## Acceptance criteria (to refine)
- Works on narrow mobile and desktop viewports.
- Navigation is keyboard accessible.
- Media has meaningful alt text and legitimate usage rights.
- No unnecessary motion for reduced-motion users.
- Page communicates the product concept without relying on animation.

## Approved composition (2026-11-06)
- Centered, symmetrical headline and content hierarchy.
- A quiet museum-catalog feeling with generous whitespace.
- Text-led exploration affordance; imagery deferred to the featured story.

## Responsive design proposals — pending approval
- Display serif candidate: Cormorant Garamond (400–500); UI sans candidate: DM Sans (400–600).
- Desktop display size around 96–120px; mobile around 48–64px, with fluid clamp values adjusted after browser testing.
- Desktop hero around 85–95svh; mobile content-aware min-height and padding, avoiding text overflow on short screens.
- Centered max-width container around 1100–1200px; headline max-width around 900px; supporting text around 440px.
- Top navigation, centered eyebrow, headline, short description, exploration link, and low-contrast bottom metadata.
- Maintain accessible focus states, reduced-motion compatibility, and semantic heading hierarchy.
