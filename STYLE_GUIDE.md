# Style guide

Subordinate to `spec/index.md`. Where the two disagree, the spec wins.

## Voice

- Authoritative, practical, calm. Evidence over assertion; name the trade-off rather than hiding it.
- No hype. Banned words: revolutionary, game-changing, cutting-edge, seamless, disruptive, transformative (used loosely — "digital transformation" as a named field of practice is fine).
- Second person ("you") when giving the reader guidance or asking them to do something. Third person when describing how practice works in general. First person only in the preface.

## Worldwide framing

- Name the specific jurisdiction or institution when a claim is jurisdiction-specific ("in the UK, the National Audit Office..." not "the government audits..."). Do not imply a claim is universal when it is one country's arrangement.
- Vary the exemplar jurisdictions and organization types used across topics — do not let one country or one income level dominate every example.
- Quote currency in its original currency and year, never silently converted; if converting for comparison, show both figures and the conversion date.

## Spelling

- `en-gb-oxendict`: see `spec/oxford-spelling.md`.
- `en-gb`: same vocabulary, `-ise` endings throughout (organise, recognise), otherwise same conventions (day month year dates, £ symbol, single quotes).
- `en-us`: American spelling (-ize as standard, not as an Oxford exception; color, center, labor, program for all senses), month/day/year dates, $ symbol, double quotes primary.
- `en-001`: American-adjacent vocabulary but CLDR "English (World)" conventions — day/month/year dates, Monday-first week, metric units throughout, US$ (not bare $) for currency.
- `cy-gb` / `cy-001`: standard Welsh orthography; see the translation note in `spec/index.md` §4a.

## Acronyms

Expand every acronym on first use *within each topic* — topics are read standalone, so re-expand even if a previous topic already used it.

## Numbers

- Words for one through nine in running prose; numerals from 10 up, and always for units, percentages, and money.
- Em dash (spaced, — ) for a parenthetical break; en dash for a range (2019–2023).

## Formatting

- Markdown only. One `#` (H1) per file. Blank line between blocks. No trailing whitespace, no hard-wrapped lines.
- 2–4 sentence paragraphs.
- Tables for comparisons, typologies, and the maturity model.
- Cross-references always carry topic number and title: "(see Topic 3.4 — Accountability, Transparency, and Legitimacy)."

## Length

~3,000–3,500 words of substantive prose per topic (all sections combined), reached by going deeper on the topic's own scope, never by padding or restating another topic's material.

## Section-by-section notes

- **Thesis sentence** — one sentence, bold, states the topic's central claim, not its topic ("Public value is created in the gap between what citizens would authorize and what an organization is capable of delivering" — not "This topic covers public value").
- **Why this matters** — grounds the topic in a real tension a reader faces this year, not a textbook justification.
- **Core concepts** — the vocabulary a reader needs before the rest of the topic makes sense; define, do not just name.
- **Best practices** — each item actionable, not descriptive: "Publish the outcomes framework before the budget round, not after" rather than "outcomes frameworks are important."
- **Discussion questions** — written for a team to actually use in a room; the briefing gives enough context that the question doesn't need the topic open to discuss.
- **Worked example** — fictional, one scenario, followed through from problem to decision; label it clearly as illustrative.
- **Sector lenses** — each lens states what's genuinely different about applying this topic's concepts in that context, not a repeat of the topic with the sector's name swapped in.
- **Failure modes** — named patterns, each with what causes it and what it costs, not a generic list of risks.
- **Maturity model** — see `spec/maturity-model.md`; rows are sub-dimensions of this topic's topic specifically.
- **Checklist** — action items a reader could literally tick off, ordered roughly by sequence of use.
- **Key sources / References** — see `spec/index.md` §6.

## Self-check before calling a topic done

- [ ] Reads standalone — a reader who has not read any other topic can follow it.
- [ ] Every claim is either general knowledge, attributed to a named source, or explicitly framed as the author's synthesis.
- [ ] No named real institution appears in the worked example.
- [ ] Every cross-reference resolves to a real topic with the right title.
- [ ] Matches `spec/index.md` §8 definition of done in full.
