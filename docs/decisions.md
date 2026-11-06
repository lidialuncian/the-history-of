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

### 2026-11-06 — Centered symmetrical homepage hero
- Status: approved
- Context: The editorial entrance needs a specific layout direction.
- Decision: Use a centered, symmetrical composition for the homepage hero, with the headline as the sole dominant focal point, generous negative space, and a restrained text-led discovery action. No dominant photography in the opening hero.
- Why: Evokes the opening page of a museum catalog and creates contrast with immersive content further down.
- Consequences: Build a responsive centered layout with accessible typography and navigation. Exact copy, fonts, size tokens, and ornamentation remain proposals until approved.

### 2026-11-06 — Homepage collection replaces full-height subject showcase
- Status: approved
- Context: A fullscreen feature for every subject would create excessive scrolling as the catalog grows.
- Decision: After the editorial entrance, introduce a browsable exhibition/collection area with individual cards. Use a hybrid structured editorial gallery: mostly consistent cards with occasional featured exhibits.
- Why: Makes multiple subjects visible quickly while preserving museum-like curation and room for visual expression.
- Consequences: The collection is not a sequence of fullscreen subject sections. The immersive subject-specific experience begins on each subject's own page. Exact column counts, filter behavior, card measurements, and featured-card scheduling remain proposals.

### 2026-11-06 — Editorial exhibit card specification
- Status: approved
- Context: The homepage uses a scalable hybrid exhibition gallery; cards need a consistent, curiosity-driven information density.
- Decision: Standard cards present an image, small category/exhibit label, editorial serif subject title, and one intriguing sentence. The entire card is a semantic link, without nested navigation buttons or hover-only content. Featured cards reuse this anatomy but may span two columns with wider imagery; they are never fullscreen. Cards use restrained styling without opaque panels, heavy borders, or shadows.
- Why: Balances the atmosphere of a curated exhibition with clear, fast scanning and good accessibility.
- Consequences: Implement shared card variants with clear hover, focus, touch and reduced-motion behavior. Precise measurements, breakpoint values, font selections, category controls, media assets and initial published-card availability remain provisional.
