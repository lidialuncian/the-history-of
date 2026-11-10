# The History Of... — Project Roadmap

> Living project checklist. Tick tasks as they are completed: `- [ ]` → `- [x]`.
> **Current focus:** Phase 3 — Ballet historical research and content planning.
> The goal is to ship **one complete, compelling Ballet exhibition** before expanding to additional subjects.

## 1. Foundation and platform direction

- [x] Define the product concept: immersive, interactive histories of arts and other subjects.
- [x] Establish the central design principle: each topic has its own visual personality.
- [x] Choose the editorial entrance direction and symmetrical homepage hero.
- [x] Decide on a curated collection/gallery layout with consistent cards and featured exhibits.
- [x] Create the GitHub repository and initialize the Next.js + TypeScript frontend.
- [x] Establish the GitHub → Codex → PR review workflow.
- [ ] Replace the starter README with product overview, local setup, and contribution workflow.
- [ ] Record agreed design principles, accessibility expectations, and scope in permanent project documentation.

## 2. Homepage and first Ballet experience

- [x] Implement the initial homepage and exhibit/gallery cards.
- [x] Create the initial Ballet exhibition page and romantic visual direction, including arched hero.
- [x] Agree on the Living Exhibition concept: chapter-based narrative, timeline navigation, and optional discoveries.
- [x] Design the ballerina entrance sequence: awakening → pirouette → leap → land/freeze.
- [x] Produce and assemble approved dancer movement clips and matched start/end stills.
- [x] Implement and merge the first video-led Ballet entrance animation.
- [ ] Confirm mobile, keyboard, reduced-motion, skip, back/forward, and poor-network behavior after merge.
- [ ] Record current V1 animation limitations (changing backdrop, abrupt leap-to-page handoff, low native video detail) as a **later** improvement backlog.

## 3. Ballet research and source documentation — NEXT

- [ ] Agree the historical scope, research questions, intended audience, and chapter outline.
- [ ] Create `docs/content/ballet/ballet-research.md` for sourced facts, chronology, and uncertainties.
- [ ] Build a verified timeline spanning Renaissance court dance, French formalization, Romantic ballet, Imperial Russian ballet, modernism, and contemporary developments.
- [ ] Research key people, innovations, productions, cultural contexts, and important geographic locations.
- [ ] Collect reputable primary and secondary sources; record URLs, authors/institutions, dates, and what each source supports.
- [ ] Record disputed claims and distinguish evidence from anecdotes, legend, and interpretation.
- [ ] Inventory usable media (historical paintings, photographs, music, performances, maps) and record rights/attribution requirements.
- [ ] Review research for chronology gaps, geographical bias, and unsupported claims.

## 4. Ballet storytelling and exhibition specification

- [ ] Create `docs/content/ballet/ballet-story.md` with chapter titles, narrative arcs, and visitor-facing copy.
- [ ] Create `docs/content/ballet/ballet-experience.md` mapping each chapter to visuals and interactions.
- [ ] Define chapter navigation, timeline behavior, optional discoveries, and links among related people/works/topics.
- [ ] Plan distinctive content modules: portraits, quotations, maps, performances, music, comparisons, and curiosities.
- [ ] Write and fact-check **Chapter 1** completely as the editorial/interaction pilot.
- [ ] Review Chapter 1 pacing, reading comfort, historical accuracy, and mobile experience before scaling.

## 5. Content architecture and first implementation

- [ ] Define a reusable, typed content model for chapters, sources, people, events, media, and discovery modules.
- [ ] Choose an appropriately simple storage strategy for the first release (local structured content first unless editing requirements justify a CMS/database).
- [ ] Implement Chapter 1 with the actual researched material, media credits, and accessible interactive elements.
- [ ] Test chapter/timeline navigation and layout on mobile, tablet, and desktop.
- [ ] Refine reusable content modules based on the Chapter 1 prototype.

## 6. Complete the Ballet exhibition

- [ ] Research, write, and fact-check the remaining agreed chapters.
- [ ] Implement chapters in chronological/narrative order with appropriate images, locations, music, and optional discoveries.
- [ ] Connect chapters into one coherent journey with clear navigation and a satisfying ending.
- [ ] Perform a full editorial review: accuracy, citations, consistency, accessibility, and image/media licensing.
- [ ] Conduct a visitor walkthrough; revise confusing transitions, overlong sections, and missing context.

## 7. Polish, quality, and launch readiness

- [ ] Improve animation background continuity with a stable stage/compositing approach if technically feasible.
- [ ] Smooth the leap-to-Ballet-page reveal **during descent**, so the ballerina lands on the new stage.
- [ ] Evaluate AI video enhancement when available; preserve character identity and motion, and keep optimized web versions.
- [ ] Run responsive design, performance, accessibility, keyboard, screen reader, and reduced-motion testing across the site.
- [ ] Audit load performance (especially videos), SEO/metadata, image alt text, attribution, and fallback behavior.
- [ ] Decide hosting/domain, configure deployment, and test a staging release.
- [ ] Publish the Ballet exhibition after an editorial and technical acceptance review.

## 8. Extend The History Of... beyond Ballet

- [ ] Review what should be reusable versus deliberately subject-specific.
- [ ] Document the process for adding a new historical exhibition.
- [ ] Select the next subject (for example Opera or Tango) and define its distinct visual voice.
- [ ] Research and prototype the next exhibition using the proven content system.
- [ ] Expand collection discovery, cross-subject connections, and navigation as the library grows.
- [ ] Consider CMS/database, search, personalization, and other platform features **when actual needs justify them**.

---

## Working rules

- **Content before spectacle:** historical accuracy and a compelling story outrank decorative effects.
- **One exhibition first:** complete Ballet before building several unfinished topics.
- **Sources required:** don't invent quotes, dates, citations, archival provenance, or media rights.
- **Review before merge:** Codex works through feature branches/PRs for implementation tasks; the owner reviews.
- **Respect accessibility:** interactive content must have a usable non-animated alternative.
- **Keep milestones honest:** a documented plan is not the same as a tested, shipped feature.

## Immediate next action

Begin **Phase 3, task 1**: finalize Ballet's scope and proposed historical chapters, then build the sourced research document. Do not start coding Chapter 1 until its outline and facts have been reviewed.
