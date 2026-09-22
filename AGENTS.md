# AGENTS.md — Operating instructions for AI agents

This repository is a book: the *Public Value Guide*, 33 Markdown chapters in 5 parts plus a preface, published in 6 locales. Agents do most of the authoring and checking. This file tells any agent how to work here safely.

## The one rule that governs everything

**`spec/index.md` is the source of truth.** Read it before doing anything. Where any file disagrees with the spec, the spec wins: fix the file, or change the spec deliberately and bring the artifacts into line. Do not improvise structure, style, or citation practice — it is all specified.

If you ever find a role card, a skill, or this file itself disagreeing with `spec/index.md`, trust the spec and flag the drift for correction — don't propagate the stale version.

## Orientation

| File | What it is |
|---|---|
| `spec/index.md` | The governing specification: manifest, chapter template, style, citation rules, quality gates, definition of done. |
| `spec/maturity-model.md` | The shared five-level maturity scale used by every chapter. |
| `spec/oxford-spelling.md` | The Oxford spelling contract for the canonical locale. |
| `plan.md` | The phased build plan. |
| `tasks.md` | The live checklist. Update it in the same change as the work it tracks. |
| `AGENTS/` | Role cards for the four agent roles used to build the book (see below). |
| `_sources/research-notes.md` | Distilled research grounding the chapters. Start here; verify sources directly before citing. |

## Hard rules (violations block "done")

1. **Never invent sources.** No fabricated citations, URLs, statistics, or quotations — ever. If you cannot verify a figure, describe the pattern qualitatively (spec §6).
2. **Verify every Wikipedia link** resolves to a real article before linking it. Never guess a slug. 5–12 links per chapter, each also listed in `## References`.
3. **Follow the 13-section chapter template** (spec §3) exactly — section names, order, and counts (exactly six discussion questions; sector lenses in the order Local government, National government, Social sector and nonprofit, Multilateral and international; 8–12 best-practice items; 6–12 checklist items; 5-level maturity table Initiate/Develop/Standardize/Manage/Orchestrate).
4. **One writer per file.** Never let two agents edit the same file concurrently. Fan out across *distinct* chapters only.
5. **Consistency updates travel together.** A change that adds or renames terms/chapters updates `README.md`, `GLOSSARY.md`, and `INDEX.md` in the same change (spec §7).
6. **Cross-references carry number *and* title** — "(see Chapter 3.4 — Accountability, Transparency, and Legitimacy)" — never a bare number.
7. **Locale spelling contract** followed per `spec/index.md` §4a and `STYLE_GUIDE.md`; expand acronyms on first use in each chapter; ~3,000–3,500 words of substantive prose per chapter — reached by depth, never filler.
8. **Chapter scope is assigned.** The manifest's scope notes (spec §4) give every contested concept exactly one home chapter. Cross-reference; don't re-teach.
9. **`.locale-peer-id` files are immutable once assigned.** A translation reuses its source chapter's id exactly; never generate a new one for an existing chapter.
10. **No real named institution in a worked example.** Fictional scenarios only (spec §6 item 4).

## Roles

Work is split into four roles; each has a card in `AGENTS/` with its full brief:

- [`AGENTS/researcher.md`](AGENTS/researcher.md) — gathers and verifies sources before drafting begins.
- [`AGENTS/chapter-author.md`](AGENTS/chapter-author.md) — writes one chapter to the template, from spec + manifest entry + research notes.
- [`AGENTS/reviewer.md`](AGENTS/reviewer.md) — runs the four quality gates (structural, link, source, consistency) against a chapter or the whole book.
- [`AGENTS/reference-editor.md`](AGENTS/reference-editor.md) — owns `GLOSSARY.md`, `INDEX.md`, and `README.md` coherence.

An orchestrating agent assigns roles; a single agent may wear several hats for a small change, but must still satisfy each role's exit criteria.

## Workflow for the common case (write one chapter)

1. Read `spec/index.md` §3–§6 and your chapter's manifest entry + scope note (§4).
2. Read `_sources/research-notes.md` for your topic; verify sources and Wikipedia slugs live.
3. Draft to the template in the canonical locale, `en-gb-oxendict`. Self-check against the definition of done (spec §8).
4. Register new terms in `GLOSSARY.md` and `INDEX.md`; tick your item in `tasks.md`.
5. Hand off to a reviewer running the spec §10 gates.
6. Only after the canonical chapter passes review, localize into the other five locales — the directory and `.locale-peer-id` already exist; write `index.md` in each.

## Workflow for localizing a chapter

1. Read the canonical `en-gb-oxendict` chapter in full.
2. For `en-gb`, `en-us`, `en-001`: adapt spelling, date/number/currency format, and any jurisdiction-specific example per `spec/index.md` §4a and `STYLE_GUIDE.md` — the content and structure stay identical; only convention and, where the worked example names a currency or date format, wording changes.
3. For `cy-gb`, `cy-001`: translate in full. Preserve the 13-section structure exactly — a translation that drops or merges a section fails the structural gate as badly as an original chapter would. Flag any Welsh technical term you are not confident of for a human reviewer rather than guessing silently.
4. The `.locale-peer-id` file already exists in the target directory from scaffolding — do not touch it; just write `index.md` next to it.

## Cautions

- This repository **is** git-tracked from the start — commit your work; do not treat it as unprotected.
- Renumbering chapters is the highest-risk operation in the repo. Follow spec §11 to the letter, and finish any renumber before writing new prose.
- After parallel fan-outs, verify what actually reached disk before re-running; re-run only what is genuinely missing.
