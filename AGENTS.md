# AGENTS.md — Operating instructions for AI agents

This repository is a book: the *Public Value Guide*, 33 Markdown topics in 5 parts plus a preface, published in 15 locales (one canonical, 14 localized). Agents do most of the authoring and checking. This file tells any agent how to work here safely.

## The one rule that governs everything

**`spec/index.md` is the source of truth.** Read it before doing anything. Where any file disagrees with the spec, the spec wins: fix the file, or change the spec deliberately and bring the artifacts into line. Do not improvise structure, style, or citation practice — it is all specified.

If you ever find a role card, a skill, or this file itself disagreeing with `spec/index.md`, trust the spec and flag the drift for correction — don't propagate the stale version.

## Orientation

| File | What it is |
|---|---|
| `spec/index.md` | The governing specification: manifest, topic template, style, citation rules, quality gates, definition of done. |
| `spec/maturity-model.md` | The shared five-level maturity scale used by every topic. |
| `spec/oxford-spelling.md` | The Oxford spelling contract for the canonical locale. |
| `plan.md` | The phased build plan. |
| `tasks.md` | The live checklist. Update it in the same change as the work it tracks. |
| `AGENTS/` | Role cards for the four agent roles used to build the book (see below). |
| `_sources/research-notes.md` | Distilled research grounding the topics. Start here; verify sources directly before citing. |

## Hard rules (violations block "done")

1. **Never invent sources.** No fabricated citations, URLs, statistics, or quotations — ever. If you cannot verify a figure, describe the pattern qualitatively (spec §6).
2. **Verify every Wikipedia link** resolves to a real article before linking it. Never guess a slug. 5–12 links per topic, each also listed in `## References`.
3. **Follow the 13-section topic template** (spec §3) exactly — section names, order, and counts (exactly six discussion questions; sector lenses in the order Local government, National government, Social sector and nonprofit, Multilateral and international; 8–12 best-practice items; 6–12 checklist items; 5-level maturity table Initiate/Develop/Standardize/Manage/Orchestrate).
4. **One writer per file.** Never let two agents edit the same file concurrently. Fan out across *distinct* topics only.
5. **Consistency updates travel together.** A change that adds or renames terms/topics updates `README.md`, `GLOSSARY.md`, and `INDEX.md` in the same change (spec §7).
6. **Cross-references carry number *and* title** — "(see Topic 3.4 — Accountability, Transparency, and Legitimacy)" — never a bare number.
7. **Locale spelling contract** followed per `spec/index.md` §4a and `STYLE_GUIDE.md`; expand acronyms on first use in each topic; ~3,000–3,500 words of substantive prose per topic — reached by depth, never filler.
8. **Topic scope is assigned.** The manifest's scope notes (spec §4) give every contested concept exactly one home topic. Cross-reference; don't re-teach.
9. **`.locale-peer-id` files are immutable once assigned.** A translation reuses its source topic's id exactly; never generate a new one for an existing topic.
10. **No real named institution in a worked example.** Fictional scenarios only (spec §6 item 4).

## Roles

Work is split into four roles; each has a card in `AGENTS/` with its full brief:

- [`AGENTS/researcher.md`](AGENTS/researcher.md) — gathers and verifies sources before drafting begins.
- [`AGENTS/topic-author.md`](AGENTS/topic-author.md) — writes one topic to the template, from spec + manifest entry + research notes.
- [`AGENTS/reviewer.md`](AGENTS/reviewer.md) — runs the four quality gates (structural, link, source, consistency) against a topic or the whole book.
- [`AGENTS/reference-editor.md`](AGENTS/reference-editor.md) — owns `GLOSSARY.md`, `INDEX.md`, and `README.md` coherence.

An orchestrating agent assigns roles; a single agent may wear several hats for a small change, but must still satisfy each role's exit criteria.

## Workflow for the common case (write one topic)

1. Read `spec/index.md` §3–§6 and your topic's manifest entry + scope note (§4).
2. Read `_sources/research-notes.md` for your topic; verify sources and Wikipedia slugs live.
3. Draft to the template in the canonical locale, `en-gb-oxendict`. Self-check against the definition of done (spec §8).
4. Register new terms in `GLOSSARY.md` and `INDEX.md`; tick your item in `tasks.md`.
5. Hand off to a reviewer running the spec §10 gates.
6. Only after the canonical topic passes review, localize into the other fourteen locales (list in `spec/index.md` §4a) — the directory and `.locale-peer-id` already exist; write `index.md` in each.

## Workflow for localizing a topic

1. Read the canonical `en-gb-oxendict` topic in full.
2. For `en-gb`, `en-us`, `en-001`: adapt spelling, date/number/currency format, and any jurisdiction-specific example per `spec/index.md` §4a and `STYLE_GUIDE.md` — the content and structure stay identical; only convention and, where the worked example names a currency or date format, wording changes.
3. For `cy-gb`, `cy-001`: translate in full. Preserve the 13-section structure exactly — a translation that drops or merges a section fails the structural gate as badly as an original topic would. Flag any Welsh technical term you are not confident of for a human reviewer rather than guessing silently.
4. The `.locale-peer-id` file already exists in the target directory from scaffolding — do not touch it; just write `index.md` next to it.

## Cautions

- After any topic, title, or locale change, run `bin/build-llms` and commit the regenerated `llms.txt` / `llms.json`.
- Work serially; do not use subagents or fan-outs here.
- This repository **is** git-tracked from the start — commit your work; do not treat it as unprotected.
- Renumbering topics is the highest-risk operation in the repo. Follow spec §11 to the letter, and finish any renumber before writing new prose.
- After parallel fan-outs, verify what actually reached disk before re-running; re-run only what is genuinely missing.
