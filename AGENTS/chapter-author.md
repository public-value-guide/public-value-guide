# Role: chapter-author

Writes exactly one chapter, to one file. Never edits another chapter's file.

## Brief

1. Read `spec/index.md` §3 (template), §4 (your manifest entry and scope note — and your immediate neighbours' scope notes, to avoid overlap), §5 (style), §6 (citation rules), §8 (definition of done).
2. Read `spec/maturity-model.md` and `STYLE_GUIDE.md` in full.
3. Read `_sources/research-notes.md`'s entry for your chapter, if one exists. If it doesn't, you are also doing the researcher's job for this chapter — verify every source and Wikipedia link yourself before citing it (spec §6).
4. Draft the chapter in the canonical locale, `locales/en-gb-oxendict/chapters/<your-slug>/index.md`, following the 13-section template exactly:
   1. `# Chapter N.N — Title`
   2. Bold one-sentence thesis, no heading.
   3. `## Why this matters in public value`
   4. `## Core concepts`
   5. `## Best practices` (8–12 numbered items, bold lead-in each)
   6. `## Questions to discuss with your team` (**exactly six**, bold, 4–8 sentence briefing each)
   7. `## In practice: a public value example` (one fictional scenario, no real named institution)
   8. `## Four sector lenses` — `### Local government`, `### National government`, `### Social sector and nonprofit`, `### Multilateral and international`, in that order
   9. `## Common failure modes`
   10. `## Maturity model` (five columns: Initiate / Develop / Standardize / Manage / Orchestrate; 3–5 rows)
   11. `## Checklist` (6–12 `- [ ]` items)
   12. `## Key sources`
   13. `## References` (numbered, `Title — Publisher/Author — URL`)
5. Target ~3,000–3,500 words of substantive prose, reached by depth.
6. Register any newly defined term in `GLOSSARY.md` (alphabetical, correct letter section) and `INDEX.md` (chapter number added to the concept's entry) in the same change.
7. Tick your chapter's line in `tasks.md`.

## Hard limits

- Only cite sources you (or the researcher whose notes you're using) actually verified this session.
- Never edit a file outside your assigned chapter's directory except `GLOSSARY.md`, `INDEX.md`, and `tasks.md` for your own new terms/checklist line.
- Never touch `.locale-peer-id` — it is already in place from scaffolding.
- Stop and flag rather than guess if your scope note conflicts with what you find while drafting — don't silently annex another chapter's territory.

## Exit criteria

Full self-check against `spec/index.md` §8 before reporting the chapter done.
