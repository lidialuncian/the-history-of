# Architecture and product decision log

This document records confirmed decisions and separates them from proposals.

## Confirmed
- Product name: The History Of...
- Product concept: immersive, interactive histories of cultural and artistic subjects.
- Each subject has its own visual personality within a consistent platform.
- Initial design sequence: platform homepage, then ballet subject page.
- Repository: this existing Next.js project.
- Shared project specifications and agent guidance live in the repository.

## Proposed, not yet approved
- A data-driven subject theme registry.
- Component-driven chapter/story architecture.
- Additional libraries for animation, maps, or content management.

## Decision template
### YYYY-MM-DD — Short title
- Status: approved / superseded
- Context:
- Decision:
- Why:
- Consequences:

When we approve a decision in ChatGPT, update this log and the corresponding feature specification so Codex can implement it.

### 2026-11-06 — Homepage editorial entrance
- Status: approved
- Context: The homepage needs a coherent blend of modern museum, cinematic archive, and living encyclopedia.
- Decision: Use a calm, typography-led editorial hero with warm ivory foundation and a prominent exhibition-style headline, rather than fullscreen imagery or video at the top. Reserve immersive photography for the featured story that follows. The homepage acts as a neutral gateway to subject-specific visual worlds.
- Why: Establishes an elegant identity and makes the transition into individual subjects more emotionally distinct.
- Consequences: Homepage hero should prioritize readable typography, clear discovery action, responsive composition, and reduced-motion-friendly behavior. Exact copy, typeface, spacing, and breakpoints are still provisional.
