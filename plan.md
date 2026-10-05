# Build plan

## What we are building

The *Public Value Guide*: 5 parts, 33 topics, plus a preface, authored once in the canonical locale (`en-gb-oxendict`) and localized into five further locales (`en-gb`, `en-us`, `en-001`, `cy-gb`, `cy-001`). Governed by `spec/index.md`.

## Grounding sources

Public value theory itself (Mark Moore's *Creating Public Value* and *Recognizing Public Value*, John Benington's and Gerry Stoker's extensions, Stephen Osborne's New Public Governance, Barry Bozeman's public-value mapping, Alford & O'Flynn, Bryson/Crosby/Bloomberg's "Public Value Governance"), plus the standing bodies of practice named in `spec/index.md` §6 (OECD, World Bank, UN agencies, national audit offices, national open-government and policy portals). `_sources/research-notes.md` accumulates per-topic findings as topics are researched.

## Phases

**Phase 0 — Scaffolding** — repository layout, `spec/`, `AGENTS.md` and role cards, `STYLE_GUIDE.md`, locale directories with `.locale-peer-id` files for all 34 topic units across all 6 locales, `bin/` tooling vendored, `GLOSSARY.md`/`INDEX.md` skeletons, `README.md`, `CITATION.cff`. *(Done first, before any topic prose.)*

**Phase 1 — Canonical topics, part by part** — write all 33 topics plus the preface in `en-gb-oxendict`, one topic-author per topic, fanned out across distinct files, part by part (Part 1 before Part 2, etc., since later parts' scope notes assume earlier concepts like the strategic triangle and the public value scorecard).

**Phase 2 — Reference matter** — `GLOSSARY.md` and `INDEX.md` populated as topics land (each topic-author registers their own new terms; a reference-editor pass reconciles at the end of each part).

**Phase 3 — Quality gates on the canonical locale** — a reviewer runs the four gates (spec §10) against every canonical topic before localization begins on it.

**Phase 4 — Localization** — `en-gb`, `en-us`, `en-001` (adaptation: spelling, date/currency format, jurisdiction-neutral phrasing checks) then `cy-gb`, `cy-001` (full translation, flagged for professional Welsh-language review per spec §4a).

**Phase 5 — Release checks** — every locale passes all four gates; `README.md`, `GLOSSARY.md`, `INDEX.md` agree with `spec/index.md` §4; `tasks.md` fully checked off.

## Working method

- One writer per file; fan agents out across distinct topics, never the same file concurrently.
- Finish a part's canonical topics and pass its quality gate before starting that part's localization.
- After any parallel fan-out, verify what actually reached disk before re-running anything.

## Risks and mitigations

- **Welsh translation quality** — mitigated by the explicit caveat in `spec/index.md` §4a; treat `cy-gb`/`cy-001` as a first draft pending professional review, not a finished translation.
- **33-topic scope overlap** — mitigated by the scope notes in `spec/index.md` §4, written before any topic prose.
- **Citation drift** (a source cited in one locale but not verified for that locale's claims) — mitigated by requiring the source gate to run per locale, not only once on the canonical text.
