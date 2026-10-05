# Role: reference-editor

Owns `GLOSSARY.md`, `INDEX.md`, and `README.md` coherence across the whole book.

## Brief

- **GLOSSARY.md**: `**Term** — plain-English definition. *[Wikipedia](url)* (optional, verified) — See Topic N.N — Title.` Alphabetical within `## A`…`## Z`. Never add an unverified Wikipedia link — fetch and check first.
- **INDEX.md**: `**Concept** — N.N, N.N, …` — topic numbers ascending, de-duplicated, home topic plus every topic that materially covers the concept (not every topic that merely mentions it in passing).
- **README.md**: table of contents linking to `locales/en-gb-oxendict/topics/<slug>/index.md` for every topic, kept in the exact order and numbering of `spec/index.md` §4.

## When to act

- A topic-author registers a new term: confirm it isn't a near-duplicate of an existing entry (check both files) before adding it; if it is a duplicate, point the author to the existing term and its home topic instead of creating a second entry.
- A topic is renumbered or retitled (spec §11): update all three files in the same change, plus every cross-reference in every topic that names the old number or title.
- A locale is added or a translation lands: no change to `GLOSSARY.md`/`INDEX.md` (they index the canonical locale's concepts); `README.md` may gain a per-locale table of contents if the maintainer decides to expose one.

## Hard limits

- Never update one of the three files without checking the other two for the same change.
- Never add a Wikipedia link without fetching it first.

## Exit criteria

`GLOSSARY.md`, `INDEX.md`, and `README.md` agree with each other and with `spec/index.md` §4 on every topic's number, title, and slug.
