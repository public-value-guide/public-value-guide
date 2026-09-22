# Style guide

Subordinate to `spec/index.md`. Where the two disagree, the spec wins.

## Voice

- Authoritative, practical, calm. Evidence over assertion; name the trade-off rather than hiding it.
- No hype. Banned words: revolutionary, game-changing, cutting-edge, seamless, disruptive, transformative (used loosely — "digital transformation" as a named field of practice is fine).
- Second person ("you") when giving the reader guidance or asking them to do something. Third person when describing how practice works in general. First person only in the preface.

## Worldwide framing

- Name the specific jurisdiction or institution when a claim is jurisdiction-specific ("in the UK, the National Audit Office..." not "the government audits..."). Do not imply a claim is universal when it is one country's arrangement.
- Vary the exemplar jurisdictions and organization types used across chapters — do not let one country or one income level dominate every example.
- Quote currency in its original currency and year, never silently converted; if converting for comparison, show both figures and the conversion date.

## Spelling

- `en-gb-oxendict`: see `spec/oxford-spelling.md`.
- `en-gb`: same vocabulary, `-ise` endings throughout (organise, recognise), otherwise same conventions (day month year dates, £ symbol, single quotes).
- `en-us`: American spelling (-ize as standard, not as an Oxford exception; color, center, labor, program for all senses), month/day/year dates, $ symbol, double quotes primary.
- `en-001`: American-adjacent vocabulary but CLDR "English (World)" conventions — day/month/year dates, Monday-first week, metric units throughout, US$ (not bare $) for currency.
- `cy-gb` / `cy-001`: standard Welsh orthography; see the translation note in `spec/index.md` §4a.

## Acronyms

Expand every acronym on first use *within each chapter* — chapters are read standalone, so re-expand even if a previous chapter already used it.

## Numbers

- Words for one through nine in running prose; numerals from 10 up, and always for units, percentages, and money.
- Em dash (spaced, — ) for a parenthetical break; en dash for a range (2019–2023).

## Formatting

- Markdown only. One `#` (H1) per file. Blank line between blocks. No trailing whitespace, no hard-wrapped lines.
- 2–4 sentence paragraphs.
- Tables for comparisons, typologies, and the maturity model.
- Cross-references always carry chapter number and title: "(see Chapter 3.4 — Accountability, Transparency, and Legitimacy)."

## Length

~3,000–3,500 words of substantive prose per chapter (all sections combined), reached by going deeper on the chapter's own scope, never by padding or restating another chapter's material.

## Section-by-section notes

- **Thesis sentence** — one sentence, bold, states the chapter's central claim, not its topic ("Public value is created in the gap between what citizens would authorize and what an organization is capable of delivering" — not "This chapter covers public value").
- **Why this matters** — grounds the chapter in a real tension a reader faces this year, not a textbook justification.
- **Core concepts** — the vocabulary a reader needs before the rest of the chapter makes sense; define, do not just name.
- **Best practices** — each item actionable, not descriptive: "Publish the outcomes framework before the budget round, not after" rather than "outcomes frameworks are important."
- **Discussion questions** — written for a team to actually use in a room; the briefing gives enough context that the question doesn't need the chapter open to discuss.
- **Worked example** — fictional, one scenario, followed through from problem to decision; label it clearly as illustrative.
- **Sector lenses** — each lens states what's genuinely different about applying this chapter's concepts in that context, not a repeat of the chapter with the sector's name swapped in.
- **Failure modes** — named patterns, each with what causes it and what it costs, not a generic list of risks.
- **Maturity model** — see `spec/maturity-model.md`; rows are sub-dimensions of this chapter's topic specifically.
- **Checklist** — action items a reader could literally tick off, ordered roughly by sequence of use.
- **Key sources / References** — see `spec/index.md` §6.

## Self-check before calling a chapter done

- [ ] Reads standalone — a reader who has not read any other chapter can follow it.
- [ ] Every claim is either general knowledge, attributed to a named source, or explicitly framed as the author's synthesis.
- [ ] No named real institution appears in the worked example.
- [ ] Every cross-reference resolves to a real chapter with the right title.
- [ ] Matches `spec/index.md` §8 definition of done in full.
