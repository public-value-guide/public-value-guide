---
name: public-value-guide-maintainer
description: Use when writing, reviewing, translating, or reorganizing chapters of the Public Value Guide repository itself — drafting a new chapter, running the structural/link/source/consistency quality gates, updating the glossary or index, localizing a chapter into another locale, or renumbering chapters. Trigger phrases include "write chapter," "review chapter," "add a chapter," "renumber," "localize," "translate this chapter," or a direct reference to spec/index.md or AGENTS.md.
---

# Public Value Guide — maintainer skill

You are maintaining the *Public Value Guide* repository itself.

## The one rule

`spec/index.md` is the source of truth. Read it (particularly §3 chapter template, §4 manifest, §6 citation rules, §8 definition of done) before writing, reviewing, or restructuring anything. Where a role card, this skill, or any other file disagrees with `spec/index.md`, the spec wins — flag the drift rather than propagating it.

## Orientation

| File | Role |
|---|---|
| `spec/index.md` | The governing specification. |
| `spec/maturity-model.md` | The shared five-level maturity scale. |
| `spec/oxford-spelling.md` | The canonical locale's spelling contract. |
| `STYLE_GUIDE.md` | Prose and formatting contract. |
| `AGENTS.md` + `AGENTS/*.md` | Full operating instructions and per-role briefs (researcher, chapter-author, reviewer, reference-editor). |
| `_sources/research-notes.md` | Verified research grounding, per chapter. |
| `tasks.md` | Live build checklist — update in the same change as the work. |

## Hard rules

1. Never invent sources, URLs, statistics, or quotations. Verify every Wikipedia link live before citing it (5–12 per chapter, each also in `## References`).
2. Follow the 13-section chapter template exactly: bold thesis; `## Why this matters in public value`; `## Core concepts`; `## Best practices` (8–12 items); `## Questions to discuss with your team` (**exactly six**); `## In practice: a public value example` (fictional, no real named institution); `## Four sector lenses` (Local government, National government, Social sector and nonprofit, Multilateral and international, in that order); `## Common failure modes`; `## Maturity model` (five columns, 3–5 rows); `## Checklist` (6–12 items); `## Key sources`; `## References`.
3. One writer per file. Fan out across distinct chapters only.
4. A change that adds/renames/renumbers a chapter or term updates `README.md`, `GLOSSARY.md`, and `INDEX.md` in the same change.
5. Cross-references carry chapter number and title, never a bare number.
6. Oxford spelling in `en-gb-oxendict`; other locales per `spec/index.md` §4a; acronyms expanded per chapter; ~3,000–3,500 words of substantive prose.
7. `.locale-peer-id` files are immutable once assigned — a translation reuses its source chapter's id exactly.

## Common tasks

- **Write a chapter** — follow `AGENTS/chapter-author.md` in full.
- **Review a chapter** — follow `AGENTS/reviewer.md`, running all four gates (structural, link, source, consistency); report findings, don't rewrite.
- **Localize a chapter** — follow the "Workflow for localizing a chapter" section of `AGENTS.md`: adapt (don't retranslate) for `en-gb`/`en-us`/`en-001`; fully translate, preserving the 13-section structure, for `cy-gb`/`cy-001`, flagging uncertain technical terms for human review.
- **Update glossary/index** — follow `AGENTS/reference-editor.md`; never update one of `GLOSSARY.md`/`INDEX.md`/`README.md` without checking the other two.
- **Renumber chapters** — follow `spec/index.md` §11 exactly; this repository is git-tracked, so commit before any bulk rename.

## Exit criteria for any change

Self-check against `spec/index.md` §8 (definition of done) before reporting a chapter or a localization complete.
