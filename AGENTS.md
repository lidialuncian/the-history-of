<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## The History Of... project guidance

Build an immersive, accessible history storytelling platform. Before implementing product features, read:
- docs/vision.md
- docs/design-system.md
- docs/decisions.md
- The relevant specification in docs/features/

Draft feature briefs are not approved implementation tasks. Ask for approval or clarification before implementing them.

Keep the existing Next.js configuration and package manager. Prefer TypeScript, semantic accessible UI, reusable components, responsive layouts, and subject-specific theme configuration rather than duplicating pages. Respect reduced-motion preferences. Do not introduce dependencies or major architecture changes without discussing tradeoffs. Never commit secrets.

For each approved implementation: summarize changed files, tests run, and unresolved decisions. Suggest documentation updates when decisions change, and prefer feature branches and pull requests for substantial changes.
