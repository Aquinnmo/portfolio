# Agent Navigation

Use this file as the first stop for repo orientation.

## Current Site

- App type: React + TypeScript + Vite single-page portfolio.
- Main composition: `src/App.tsx`.
- Global tokens/base CSS: `src/index.css`.
- Main visual/layout CSS: split across `src/components/**/*.css` and `src/components/_shared/*.css`; `src/App.css` is reserved for the App shell/route-transition styles only.
- Components: `src/components/`.
- Public crawler/AI files: `public/robots.txt` and `public/llms.txt`.
- Vercel config: `vercel.json`.

## Documentation Map

- Docs index: `docs/README.md`.
- Current implementation/source of truth: `docs/redesign/source-of-truth.md`.
- Redesign plan/history: `docs/redesign/plan.md`.
- Visual system rules: `docs/redesign/visual-system.md`.
- Content extraction and resume-synced bullets: `docs/redesign/content-extraction.md`.
- Open questions/known unresolved decisions: `docs/redesign/open-questions.md`.
- Legacy site retrieval index: `legacy/LEGACY_SITE_INDEX.md`.

## Styling Conventions

Styles are split into co-located, plain CSS files. Do not reintroduce a single monolithic stylesheet.

- **Global reset and theme tokens**: `src/index.css` (resets, `:root` tokens, base typography, `prefers-reduced-motion`).
- **App shell / route-transition styles only**: `src/App.css` (`site-shell`, `route-transition-veil`, `route-content`).
- **Component-specific styles**: each React component imports a matching `.css` file next to its `.tsx`.
  - Examples: `src/components/HeroSection.tsx` imports `./HeroSection.css`; `src/components/foundry/FoundryHeroSection.tsx` imports `./FoundryHeroSection.css`.
- **Shared cross-component patterns**: `src/components/_shared/`.
  - `layout.css`: `.page-flow`, `.section-shell`, `.content-section`, `.section-heading-row`, `.content-section h2`.
  - `actions.css`: `.hero-action`, `.hero-action-primary`, `.hero-action-secondary`, `.action-icon`.
  - `footer.css`: `.site-footer`, `.footer-contact`, `.footer-links`, `.footer-link`, `.footer-link-primary`, `.footer-legal`.
- **Foundry-only shared patterns**: `src/components/foundry/_shared.css`.
  - `.foundry-section`, `.foundry-section-summary`, `.foundry-section-eyebrow`.
- **Import rule**: components must import their own CSS and any shared CSS they rely on. Page components (`PortfolioPage`, `FoundryPage`) import `_shared/layout.css`. Footer components import `_shared/footer.css`. Components using action links import `_shared/actions.css`.
- **No empty component CSS files**: if a component has no unique styles (e.g., `PortfolioPage`, `SiteFooter`, `FoundryFooter`), it imports only the shared file(s) it needs and does not create an empty `.css` file.

## Asset Conventions

- Single-colour SVG logos (black or white) must contrast the active theme.
  - Black SVGs: set `invertInDarkMode: true` in `src/components/skillData.ts` so they render white in night mode and black in day mode.
  - White SVGs: set `invertInLightMode: true` so they render black in day mode and white in night mode.
  - Apply the same `data-skill-invert-icon` / `data-skill-invert-icon-light` attributes and CSS filters to quick links and project stack icons when they use single-colour SVGs.

## Current Product Rules

- The site is finished as a one-page recruiter-facing portfolio.
- Theme: blizzard over a frozen lake.
- Dark mode is the default.
- No nav bar.
- No visible scrollbar chrome.
- No divider bars between major sections.
- No crack lines, shard motifs, etched ice lines, or repeating linear ice textures.
- Runtime code must not import or path directly into `legacy/`; copy approved legacy assets into `src/assets/portfolio/` first.

## Validation

Run this after code or config changes:

```bash
npm run lint
```

Do not run `npm run build`. Agents must never trigger production builds.

Docs-only changes do not require a production build unless links, public files, or deployment behavior changed.

<!-- BEGIN BEADS INTEGRATION v:1 profile:minimal hash:970c3bf2 -->
## Beads Issue Tracker

This project uses **bd (beads)** for issue tracking. Run `bd prime` to see full workflow context and commands.

### Quick Reference

```bash
bd ready              # Find available work
bd show <id>          # View issue details
bd update <id> --claim  # Claim work
bd close <id>         # Complete work
```

### Rules

- Use `bd` for ALL task tracking — do NOT use TodoWrite, TaskCreate, or markdown TODO lists
- Run `bd prime` for detailed command reference and session close protocol
- Use `bd remember` for persistent knowledge — do NOT use MEMORY.md files

**Architecture in one line:** issues live in a local Dolt DB; sync uses `refs/dolt/data` on your git remote; `.beads/issues.jsonl` is a passive export. See https://github.com/gastownhall/beads/blob/main/docs/SYNC_CONCEPTS.md for details and anti-patterns.

## Agent Context Profiles

The managed Beads block is task-tracking guidance, not permission to override repository, user, or orchestrator instructions.

- **Conservative (default)**: Use `bd` for task tracking. Do not run git commits, git pushes, or Dolt remote sync unless explicitly asked. At handoff, report changed files, validation, and suggested next commands.
- **Minimal**: Keep tool instruction files as pointers to `bd prime`; use the same conservative git policy unless active instructions say otherwise.
- **Team-maintainer**: Only when the repository explicitly opts in, agents may close beads, run quality gates, commit, and push as part of session close. A current "do not commit" or "do not push" instruction still wins.

## Session Completion

This protocol applies when ending a Beads implementation workflow. It is subordinate to explicit user, repository, and orchestrator instructions.

1. **File issues for remaining work** - Create beads for anything that needs follow-up
2. **Run quality gates** (if code changed) - Tests, linters, builds
3. **Update issue status** - Close finished work, update in-progress items
4. **Handle git/sync by active profile**:
   ```bash
   # Conservative/minimal/default: report status and proposed commands; wait for approval.
   git status

   # Team-maintainer opt-in only, unless current instructions forbid it:
   git pull --rebase
   bd dolt push
   git push
   git status
   ```
5. **Hand off** - Summarize changes, validation, issue status, and any blocked sync/commit/push step

**Critical rules:**
- Explicit user or orchestrator instructions override this Beads block.
- Do not commit or push without clear authority from the active profile or the current user request.
- If a required sync or push is blocked, stop and report the exact command and error.
<!-- END BEADS INTEGRATION -->

<!-- BEGIN BEADS CODEX SETUP: generated by bd setup codex -->
## Beads Issue Tracker

Use Beads (`bd`) for durable task tracking in repositories that include it. Use the `beads` skill at `.agents/skills/beads/SKILL.md` (project install) or `~/.agents/skills/beads/SKILL.md` (global install) for Beads workflow guidance, then use the `bd` CLI for issue operations.

### Quick Reference

```bash
bd ready                # Find available work
bd show <id>            # View issue details
bd update <id> --claim  # Claim work
bd close <id>           # Complete work
bd prime                # Refresh Beads context
```

### Rules

- Use `bd` for all task tracking; do not create markdown TODO lists.
- Run `bd prime` when Beads context is missing or stale. Codex 0.129.0+ can load Beads context automatically through native hooks; use `/hooks` to inspect or toggle them.
- Keep persistent project memory in Beads via `bd remember`; do not create ad hoc memory files.

**Architecture in one line:** issues live in a local Dolt DB; sync uses `refs/dolt/data` on your git remote; `.beads/issues.jsonl` is a passive export. See https://github.com/gastownhall/beads/blob/main/docs/SYNC_CONCEPTS.md for details and anti-patterns.
<!-- END BEADS CODEX SETUP -->
