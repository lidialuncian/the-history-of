# Homepage — design specification

Status: Editorial entrance, collection model and editorial exhibit card anatomy approved. Full homepage implementation is not yet authorized.

## Product goal
An immersive history platform whose homepage acts as the entrance to a museum and a browsable collection of exhibits. Subject pages offer the fully immersive stories.

## Approved homepage design
- Calm, warm-ivory, typography-led Editorial Entrance with centered symmetrical headline, generous whitespace, restrained exploration link.
- No full-screen video or image in the first viewport.
- Scrolling reveals the exhibition collection, not a giant ballet feature.
- A structured hybrid editorial grid: mostly standard cards and occasional larger featured cards.
- Browsing must remain efficient as the number of subjects grows; immersive subject-specific themes appear after entering a subject page.

## Approved editorial exhibit card (2026-11-06)
A reusable card uses exactly this visible information hierarchy:
1. Editorial image, typically portrait 3:4 on standard cards.
2. Small category/exhibit label, e.g. DANCE / NO. 001.
3. Subject title in editorial display typography.
4. One intriguing sentence summarizing the story, ideally concise enough for roughly two lines.

The whole available exhibit card is one semantic link to its published subject page. Do not add a redundant nested button. Do not hide any essential text behind hover. The card has no opaque box background, heavy border, or large drop shadow; editorial spacing separates items. Imagery conveys subject personality; the surrounding UI remains consistent. A small arrow may reinforce navigation.

### Featured variant
Reuse the same content anatomy and link behavior. On wide screens, occasionally span two grid columns and use a wider crop (e.g. 16:9 or 3:2). Do not make featured cards fullscreen or create a separate editorial article section for each subject. Avoid arbitrary-height masonry.

### Interaction and accessibility
- Pointer hover may gently scale the image within its clipped frame (~1.03) and emphasize arrow/title.
- Keyboard focus must use a visible focus outline; Enter activates the link.
- Touch: one tap opens the card; no hover-dependent interaction.
- Respect prefers-reduced-motion by removing zoom/translation.
- Meaningful images use accessible alternatives; decorative art can use empty alt as appropriate when the linked text names the subject.
- Unpublished subjects must be visibly marked Coming soon and must not navigate to dead routes.

## Proposed implementation measurements (validate during browser testing)
- Standard image aspect ratio 3:4; featured 16:9 or 3:2.
- Desktop standard display title ~26–32px; featured ~34–44px.
- Teaser ~14–16px; featured ~15–17px.
- Very restrained 4px image corner radius; no card shadow.
- Responsive grid: wide desktop 3 columns (occasionally 2-column featured); tablet 2; standard mobile 2 compact; narrow/large text 1. Use content-aware breakpoints rather than rigid device assumptions.
- Grid gaps ~28–32px desktop, ~20–24px tablet, ~12–16px mobile.
- Show a small curated collection on homepage; eventually support Explore All with search/categories.
- Heading and navigation remain readable without animation or JavaScript effects.

## Content and visual tone
The first candidate subjects are Ballet, Tango and Opera; more subjects and categories may be added later. Choose lawful, credited images. Do not treat placeholder images, invented teaser copy, or exhibit numbering as final editorial content.

## Open homepage decisions
- Final font families, headline and supporting copy, navigation details and exact spacing.
- Initial published subject list and their route/coming-soon state.
- Hero-to-gallery reveal behavior and precise color tokens.
- Whether category filter chips ship in the MVP.
- Actual artwork/media sources and licenses.
- Full Explore page design.

## Acceptance checks for Codex once implementation is requested
- Scannable cards on mobile and desktop; featured card does not dominate the viewport.
- Responsive and resilient at 320px widths and enlarged text settings.
- Visible keyboard focus and semantic links; no nested interactive elements.
- No hover-only information or hidden links.
- Reduced-motion behavior works.
- No broken navigation to unfinished subject pages.
- Appropriate image loading and layout stability.
- Validate lint, type checks and build against the existing project's setup.
