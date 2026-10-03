# Public Value Guide — specification

This is the governing specification for the *Public Value Guide*. Where any file in this repository disagrees with this document, this document wins: fix the file, or change this document deliberately and bring every affected artifact into line in the same change (see §7).

## 1. Product definition

- **Working title:** Public Value Guide
- **Subtitle:** A practical handbook of best practices for creating public value in government and the social sector.
- **Format:** Markdown chapters, one directory per chapter under `locales/<locale>/chapters/`, stitched together by `README.md`, `GLOSSARY.md`, and `INDEX.md`.
- **Premise:** public value theory — the discipline built on Mark Moore's strategic triangle of legitimacy and support, value creation, and operational capacity — gives public managers and social-sector leaders a language for justifying what they do that is neither pure market efficiency nor pure democratic mandate, but a third thing: value that citizens, as a collective, would authorize spending collective resources to produce.
- **Centre of gravity:** the book is worldwide in scope. National governments, regional and local government, social enterprises, nonprofits and NGOs, and multilateral/international bodies are all first-class citizens; named institutions (the UK Civil Service, the US federal government, the EU, the UN, national and local social-sector bodies) appear as exemplars of patterns, not as defaults. The book does not assume any one country's constitutional or administrative arrangement.
- **Audience:** the people who lead public and social-sector organizations — permanent secretaries and agency heads, elected and appointed local-government leaders, nonprofit and social-enterprise executive directors, programme and policy directors, and the digital, finance, and operations leaders who serve them. Its premise: in the public and social sectors, public value theory provides the frameworks for strategy, legitimacy, accountability, and impact — not merely cost control.

## 2. Repository layout

| Path | Role |
|---|---|
| `README.md` | Table of contents; entry point; links to the canonical locale. |
| `AGENTS.md` | Operating instructions for AI agents working in this repository. |
| `AGENTS/` | Role cards: researcher, chapter-author, reviewer, reference-editor. |
| `spec/index.md` | This file — the authoritative specification. |
| `spec/oxford-spelling.md` | The Oxford spelling contract for English content. |
| `spec/maturity-model.md` | The shared five-level maturity model used by every chapter. |
| `STYLE_GUIDE.md` | The prose and formatting contract (subordinate to this spec). |
| `GLOSSARY.md` | A–Z definitions of key terms, each pointing to its home chapter. |
| `INDEX.md` | Concepts and frameworks by chapter number. |
| `plan.md` | The phased build plan. |
| `tasks.md` | The live checklist, updated in the same change as the work it tracks. |
| `_sources/research-notes.md` | Distilled research grounding the chapters; verify sources before citing. |
| `locales/<locale>/chapters/<NN-NN-slug>/index.md` | One chapter, one file, one locale. |
| `locales/<locale>/chapters/<NN-NN-slug>/.locale-peer-id` | Tracks this chapter across every locale's translation (see §4a). |
| `bin/` | Locale tooling vendored from `sixarm/locale-help`: `locale-peer-id`, `grep-locale-peer-id`, `slug-case`, `markdown-read-to-headline`. |
| `skills/` | Claude Code skills: one reader-facing, one maintainer-facing. |

## 3. Chapter template

Every chapter has exactly these sections, in this order, with these exact headings:

1. `# Chapter N.N — Title`
2. A bold one-sentence thesis (no heading above it).
3. `## Why this matters in public value`
4. `## Core concepts`
5. `## Best practices` — numbered list, each item a bold lead-in followed by 2–4 sentences (8–12 items).
6. `## Questions to discuss with your team` — **exactly six** questions, each bold, each followed by a 4–8 sentence briefing, appearing before the worked example.
7. `## In practice: a public value example` — one fictional worked scenario grounded in a named type of organization (not a real named institution, to avoid implying an endorsement or a factual claim about a real body).
8. `## Four sector lenses` — exactly these four subsections, in this order:
   - `### Local government`
   - `### National government`
   - `### Social sector and nonprofit`
   - `### Multilateral and international`
9. `## Common failure modes`
10. `## Maturity model` — a table with the five columns **Initiate / Develop / Standardize / Manage / Orchestrate** (see `spec/maturity-model.md`), 3–5 rows.
11. `## Checklist` — 6–12 `- [ ]` items.
12. `## Key sources`
13. `## References` — a numbered list combining Wikipedia articles and authoritative sources, format `Title — Publisher/Author — URL`.

No section may be renamed, reordered, merged, or omitted. This template is identical for every chapter regardless of part.

## 4. Chapter manifest

Numbering is `Part.Chapter`. Filenames are the chapter's directory name: zero-padded `PP-CC-slug` (e.g. `03-08-social-sector-and-nonprofit-management`). New chapters are appended within their part so existing numbers never move (see §11 for the renumbering procedure when a reorganization is unavoidable).

**Front matter**

- Preface — `00-01-preface`

**Part 1 — Foundations** — *why public value is different from market value or democratic mandate alone, and the models that explain it*

| # | Chapter | Scope note |
|---|---|---|
| 1.1 | Introduction to Public Value | Defines public value; Mark Moore's strategic triangle at a high level (legitimacy and support, value proposition, operational capacity); why this book treats public and social-sector organizations as a first-class subject rather than an appendix to market economics. Does not go deep on any one leg of the triangle — that is 1.2. |
| 1.2 | The Strategic Triangle: Legitimacy, Value, and Capacity | The full working model: legitimacy and support (authorizing environment), the public value proposition, operational capacity. How the three legs interact and where they conflict. Home chapter for "authorizing environment" and "value proposition." |
| 1.3 | Market Failure and Government Failure | Why markets under-provide some goods (public goods, externalities, information asymmetry) and why collective provision is not automatically better (rent-seeking, capture, X-inefficiency, bureaucratic failure). Home chapter for both failure modes side by side. |
| 1.4 | Public Goods, Merit Goods, and Value Pluralism | The taxonomy of goods (public, private, club, common-pool, merit, demerit) and why public value is plural, not a single scalar — incommensurable values (liberty, equity, efficiency, security) that cannot always be traded off on one scale. |
| 1.5 | Stakeholders, Citizens, and Co-Production | Who counts as a stakeholder in public value creation; citizens as co-producers, not only consumers or voters; participatory and deliberative mechanisms. Home chapter for "co-production." |

**Part 2 — Evaluation and Evidence** — *the analyst's toolkit: valuing outcomes, building the case, testing claims*

| # | Chapter | Scope note |
|---|---|---|
| 2.1 | The Public Value Scorecard and Outcomes Frameworks | Moore's Public Value Scorecard, logic models, outcomes-based frameworks (e.g. results-based accountability). Home chapter for scorecard mechanics; other chapters reference it rather than re-explain it. |
| 2.2 | Social Cost-Benefit and Cost-Effectiveness Analysis | Formal CBA/CEA applied to public programmes: shadow pricing, discount rates, distributional weighting. Distinct from 2.3, which is about non-monetized social outcomes. |
| 2.3 | Social Return on Investment and Impact Measurement | SROI methodology, theory of change, impact measurement in the social sector — where outcomes resist monetization or where monetization itself is contested. |
| 2.4 | Public Sector Econometrics and Programme Evaluation | Causal inference for public programmes: randomized evaluations, difference-in-differences, regression discontinuity, natural experiments. Technical companion to 2.2–2.3. |
| 2.5 | Business Cases and Value for Money | How a public business case is built and approved (the "five case model" pattern and its relatives); value-for-money audit; where this differs from a private-sector investment case. |
| 2.6 | Evidence Synthesis and What Works | Systematic review and "what works" centres/clearinghouses in public policy; how to weigh competing evidence in a live decision. |

**Part 3 — Systems, Governance and Priorities** — *how public and social-sector organizations are structured, funded, and held accountable*

| # | Chapter | Scope note |
|---|---|---|
| 3.1 | Public Administration Systems and Models | Traditional public administration, New Public Management, New Public Governance, digital-era governance — the big paradigms, compared. Home chapter for this typology; later chapters assume it. |
| 3.2 | Public Policy and the Policy Cycle | Agenda-setting, formulation, adoption, implementation, evaluation; policy instruments (regulation, spending, taxation, information). |
| 3.3 | Public Finance and Budgeting | Budget processes, fiscal rules, medium-term expenditure frameworks, tax and spend as instruments of value creation, not only accounting. |
| 3.4 | Accountability, Transparency, and Legitimacy | Vertical and horizontal accountability, freedom-of-information regimes, audit institutions, legitimacy as distinct from legality. |
| 3.5 | Equity, Fairness, and Distributive Justice | Rawlsian and capability-based framings of fairness applied to service allocation; horizontal vs vertical equity in public services. |
| 3.6 | Public Sector Workforce and Labour Markets | Civil service systems, public-sector pay and bargaining, professional public-service motivation, workforce planning. |
| 3.7 | Public Procurement and Commissioning | Procurement law and practice, competitive tendering, outcomes-based commissioning, grant-making to the social sector. |
| 3.8 | Social Sector and Nonprofit Management | Governance of nonprofits and NGOs, funding models (grants, contracts, earned income, philanthropy), the distinctive accountability structure of the social sector. |
| 3.9 | Intergovernmental Relations and Federalism | Multi-level governance: national/regional/local division of powers, fiscal federalism, devolution, subsidiarity. |
| 3.10 | Regulation and Public Risk Management | Regulatory design and enforcement; risk appetite and risk registers in public bodies; the precautionary principle and its limits. |
| 3.11 | Quality, Safety, and Performance Management | Performance indicators and their perverse incentives (Goodhart's law in the public sector), quality assurance regimes, inspection and ratings bodies. |
| 3.12 | Crisis, Emergency, and Resilience Management | Emergency planning, crisis leadership, business continuity, and resilience as a public value in itself. |

**Part 4 — Global and Societal Issues** — *public value beyond one institution: behaviour, trust, the planet, and the public conversation*

| # | Chapter | Scope note |
|---|---|---|
| 4.1 | Behavioural Public Policy | Nudge theory, behavioural insights units, choice architecture in public services — and its ethical limits. |
| 4.2 | Trust in Government and Civic Engagement | Measuring and building institutional trust; civic participation beyond voting; the relationship between trust and compliance. |
| 4.3 | Climate, Sustainability, and Environmental Public Value | Public value framings of climate adaptation and mitigation; intergenerational equity; natural capital in public decision-making. |
| 4.4 | Social Media, Misinformation, and Public Communication | Government and nonprofit communication in a fragmented media environment; misinformation and its effect on legitimacy. |

**Part 5 — Digital, Software, and Technology** — *the public value of technology: digital government, artificial intelligence, software, data, and cybersecurity*

| # | Chapter | Scope note |
|---|---|---|
| 5.1 | Digital Government and Digital Transformation | Digital-era governance in practice: service design, digital-first delivery, the "government as a platform" pattern. |
| 5.2 | AI and Algorithmic Decision-Making in Government | Automated and algorithmic decision-making in public administration; explainability, bias, and due process. |
| 5.3 | Public Sector Software Engineering and Platforms | How public bodies build and buy software: shared platforms, legacy modernization, open-source-by-default policies. |
| 5.4 | Public Sector Data, Interoperability, and Open Data | Data governance, interoperability standards, open data as a public value in itself, and its tension with privacy. |
| 5.5 | Cybersecurity and Public Sector Technology Risk | Cyber risk to public institutions as a public value and national-resilience issue, not only a technical one. |
| 5.6 | Innovation and Public Entrepreneurship | Public-sector innovation labs, public entrepreneurship, and the diffusion of innovation across jurisdictions. |

**Reference matter:** `GLOSSARY.md`, `INDEX.md` (plus `STYLE_GUIDE.md` as a contributor document, not reader-facing).

**Total: 5 parts, 33 chapters, plus a preface.**

## 4a. Locales and the locale peer id system

The book is authored once, in the canonical locale, and translated into the other locales listed below. Locale directory and content conventions follow `sixarm/locale-help`:

| Locale | What it is |
|---|---|
| `en-gb-oxendict` | **Canonical / source locale.** English (Great Britain), Oxford spelling. All new chapters are drafted here first. |
| `en-gb` | English (Great Britain), non-Oxford (`-ise` spellings). |
| `en-us` | English (United States). |
| `en-001` | English (World) — the CLDR "English (World)" variant: DD/MM/YYYY dates, Monday-first week, metric units, US$ instead of bare `$`. Used as the default fallback rather than `en-us`. |
| `cy-gb` | Cymraeg (Wales, United Kingdom). |
| `cy-001` | Cymraeg (World) — standard/international Welsh, used where no UK-specific reference is intended. |
| `es-001` | Español (World) — international/neutral Spanish, avoiding country-specific vocabulary or forms of address, for a readership spanning Spain and Latin America. |
| `zh-cn` | 中文（中国大陆，简体）— Chinese (Mainland China), Simplified script, using Mainland public-administration terminology conventions. |
| `ar-001` | العربية (العالم) — Arabic (World), Modern Standard Arabic, avoiding country-specific vocabulary or forms of address, for a readership spanning the Arabic-speaking world. Right-to-left script. |
| `hi-in` | हिन्दी (भारत) — Hindi (India), using Indian public-administration terminology conventions and Devanagari script. |
| `fr-001` | Français (monde) — international/neutral French, avoiding country-specific vocabulary or forms of address, for a readership spanning France, Belgium, Switzerland, Quebec, and Francophone Africa. |
| `de-de` | Deutsch (Deutschland) — German (Germany), using Federal German (Bund/Länder) public-administration terminology conventions. |
| `ja-jp` | 日本語（日本）— Japanese (Japan), using Japanese public-administration terminology conventions. |
| `ru-ru` | Русский (Россия) — Russian (Russia), using Russian public-administration terminology conventions and Cyrillic script. |

Every chapter directory, in every locale, contains a file named `.locale-peer-id` holding a 32-character lowercase hexadecimal string followed by a newline. The same string appears in every locale's translation of the same logical chapter, generated once with `bin/locale-peer-id` and never regenerated. `locales/<locale>/chapters/.locale-peer-id` similarly carries one shared id for the "chapters" collection itself, identical across all fourteen locales. Use `bin/grep-locale-peer-id <id>` to find every locale's copy of a given chapter.

Content directory names are translated per locale in slug form (lowercase, hyphen-separated, translated title) — see `bin/slug-case`. English locales share one slug (English does not change enough across these four variants to need separate slugs); the two Welsh locales use a Welsh slug; `es-001` and `fr-001` use ASCII-folded (accent-stripped) Spanish and French slugs respectively, and `de-de` uses the standard German ASCII transliteration (ä→ae, ö→oe, ü→ue, ß→ss) rather than bare diacritic-stripping, since that is the conventional German rendering rather than an arbitrary substitution — matching the ASCII-safe convention already used for `zh-cn`'s pinyin slugs and for `ar-001` and `hi-in`'s romanized (transliterated) slugs, since the site/tooling expects ASCII-safe directory names regardless of whether the source script is Latin-based. `ja-jp` follows the same ASCII-safe pattern, using Hepburn romanization without macrons (e.g. `kōkyō` → `kokyo`) for the same reason `zh-cn` drops pinyin tone marks in its slugs. `ru-ru` likewise uses a simplified ASCII transliteration of Cyrillic (ж→zh, х→kh, ц→ts, ч→ch, ш→sh, щ→shch, ю→yu, я→ya, ы→y, й→y, э→e; soft and hard signs dropped).

Welsh translation caveat: chapter content and directory slugs in `cy-001` and `cy-gb` are AI-drafted. Public-facing or funded use should have them reviewed by a professional Welsh-language editor, particularly for the technical public-administration vocabulary (Welsh Government's own terminology resources are the first port of call for house-style terms).

Spanish translation caveat: chapter content and directory slugs in `es-001` are AI-drafted, using neutral/international Spanish vocabulary and grammar (e.g. "ustedes" rather than "vosotros", avoiding Spain- or Latin-America-specific idiom) rather than any single national variant. Public-facing or funded use should have them reviewed by a professional Spanish-language editor familiar with public-administration terminology across the Spanish-speaking world.

Chinese translation caveat: chapter content and directory slugs in `zh-cn` are AI-drafted, in Simplified Chinese using Mainland public-administration terminology conventions. Public-facing or funded use should have them reviewed by a professional Chinese-language editor familiar with public-administration terminology in the relevant jurisdiction, particularly for terms with no single settled Mainland rendering.

Arabic translation caveat: chapter content and directory slugs in `ar-001` are AI-drafted, in Modern Standard Arabic using neutral, pan-regional vocabulary rather than any single national dialect or administrative tradition. Public-facing or funded use should have them reviewed by a professional Arabic-language editor familiar with public-administration terminology across the Arabic-speaking world, particularly for terms that carry different connotations between the Gulf, the Levant, Egypt, and the Maghreb.

Hindi translation caveat: chapter content and directory slugs in `hi-in` are AI-drafted, in Hindi using Indian public-administration terminology conventions. Public-facing or funded use should have them reviewed by a professional Hindi-language editor familiar with public-administration terminology in India, particularly for technical terms that are more commonly left in English or rendered with a Sanskritized coinage in official Indian usage.

French translation caveat: chapter content and directory slugs in `fr-001` are AI-drafted, using neutral/international French vocabulary and grammar (formal "vous", avoiding France-, Belgium-, Switzerland-, Quebec-, or West-Africa-specific idiom) rather than any single national variant. Public-facing or funded use should have them reviewed by a professional French-language editor familiar with public-administration terminology across the Francophone world.

German translation caveat: chapter content and directory slugs in `de-de` are AI-drafted, in German using Federal German (Bund/Länder) public-administration terminology conventions. Public-facing or funded use should have them reviewed by a professional German-language editor familiar with public-administration terminology in Germany, particularly for terms that differ from Austrian or Swiss German usage.

Japanese translation caveat: chapter content and directory slugs in `ja-jp` are AI-drafted, in Japanese using Japanese public-administration terminology conventions. Public-facing or funded use should have them reviewed by a professional Japanese-language editor familiar with public-administration terminology in Japan, particularly for terms that are conventionally kept as English loanwords (katakana) versus rendered with a native or Sino-Japanese (kango) coinage in official Japanese usage.

Russian translation caveat: chapter content and directory slugs in `ru-ru` are AI-drafted, in Russian using Russian public-administration terminology conventions ("общественная ценность" for public value; formal "вы" register). Public-facing or funded use should have them reviewed by a professional Russian-language editor familiar with public-administration terminology in Russia, particularly for terms that are conventionally left in English or have competing Russian renderings (for example "value for money", "co-production", and "merit goods").

## 5. Voice, style and formatting

Full contract in `STYLE_GUIDE.md`. Key points:

- Authoritative, practical, calm voice; second person for guidance to the reader, third person for describing practice.
- Acronyms expanded on first use *per chapter* (chapters are read standalone).
- Oxford spelling in `en-gb-oxendict` (see `spec/oxford-spelling.md`); adapted per the locale table in §4a for the others.
- 2–4 sentence paragraphs; tables for comparisons and typologies.
- ~3,000–3,500 words of substantive prose per chapter, reached by depth, not padding.
- Cross-references always carry number *and* title: "(see Chapter 3.4 — Accountability, Transparency, and Legitimacy)" — never a bare number.

## 6. Grounding and citation rules (non-negotiable)

1. Never invent sources: no fabricated citations, URLs, statistics, or quotations. If a figure cannot be verified, describe the pattern qualitatively.
2. Verify every Wikipedia link resolves to a real article before linking it. 5–12 Wikipedia links per chapter, each also listed in `## References`.
3. Favoured bodies of knowledge: OECD, World Bank, UN and its agencies, national audit and accountability offices (e.g. National Audit Office, Government Accountability Office), national and regional government open-data and policy portals, established public-administration and public-value scholarship (Moore, Benington, Stoker, Osborne, Bozeman, Alford, Bryson/Crosby/Bloomberg), and peer-reviewed public-administration journals.
4. The fictional worked example in §3 item 7 must be clearly fictional (a generic organization type, no real name) — never presented as a factual account of a real institution's internal decision-making.

## 7. Cross-artifact consistency rules

A change that adds, renames, renumbers, or removes a chapter or a defined term updates, in the same change: `README.md`'s table of contents, this manifest (§4), `GLOSSARY.md`, `INDEX.md`, and every inbound/outbound cross-reference it affects.

## 8. Definition of done (per chapter)

- [ ] Filename and heading match the manifest (§4) exactly.
- [ ] All 13 template sections present, in order, correctly named.
- [ ] Bold one-sentence thesis present.
- [ ] Best practices numbered, 8–12 items, bold lead-in per item.
- [ ] Exactly six discussion questions, each with a 4–8 sentence briefing, appearing before the worked example.
- [ ] Four sector lenses present, in the fixed order (Local government, National government, Social sector and nonprofit, Multilateral and international).
- [ ] Maturity model table has all five columns (Initiate / Develop / Standardize / Manage / Orchestrate), 3–5 rows.
- [ ] Checklist has 6–12 `- [ ]` items.
- [ ] 5–12 Wikipedia links, each verified live and each also present in `## References`.
- [ ] No invented facts, sources, or quotations.
- [ ] Locale's spelling and formatting convention followed throughout (see §4a, §5).
- [ ] Acronyms expanded on first use in this chapter.
- [ ] ~3,000–3,500 words of substantive prose.
- [ ] `GLOSSARY.md` and `INDEX.md` updated for any new defined terms.
- [ ] `.locale-peer-id` present and, for a translation, identical to the source chapter's.

## 9. How to author or regenerate a chapter

1. Read this spec (§3–§6) and the chapter's scope note (§4) plus its immediate neighbours, to avoid overlap.
2. Read `_sources/research-notes.md` for the topic; verify sources and Wikipedia slugs live before citing them.
3. Draft to the template in the canonical locale (`en-gb-oxendict`) first.
4. Reach the target length by depth (more concepts, sharper examples), never by padding.
5. Self-check against §8, then register new terms in `GLOSSARY.md` and `INDEX.md` and tick the item in `tasks.md`.
6. Only after the canonical chapter is done, localize into the other thirteen locales (adapt for `en-gb`, `en-us`, `en-001`; translate for `cy-gb`, `cy-001`, `es-001`, `zh-cn`, `ar-001`, `hi-in`, `fr-001`, `de-de`, `ja-jp`, `ru-ru`), preserving the `.locale-peer-id`.

One writer per file. Fan agents out across distinct chapters only; never let two agents edit the same file concurrently. Before writing a new chapter, confirm you have the final manifest — renumbering mid-flight is expensive (§11).

## 10. Review and quality gates

- **Structural gate** — template sections present, named, and ordered correctly; six questions; four lenses in order; five-column maturity table; 6–12 checklist items.
- **Link gate** — every Wikipedia link resolves and appears in `## References`; 5–12 per chapter.
- **Source gate** — no invented citations, URLs, statistics, or quotations.
- **Consistency gate** — heading matches filename and manifest; cross-references name the right chapter; locale spelling convention followed; acronyms expanded; `.locale-peer-id` matches its peers.

Report findings as `file — gate — section — what's wrong — what passing looks like`, most severe first (invented source > broken link > structural violation > consistency slip).

## 11. Structural change and renumbering procedure

1. Decide the final manifest before touching any file.
2. This repository is git-tracked from the start; commit before any bulk rename so the change is reversible.
3. Build one lookup table (old slug → new slug) and apply it in a single pass, to avoid partial-match bugs.
4. Rename in two phases (old name → temporary name → final name) to avoid collisions when numbers shift.
5. Remap every affected file in every locale (the `.locale-peer-id` files travel with their chapter directory unchanged), rebuild `README.md` and this manifest, and re-run the consistency gate.

## 12. Reference-matter conventions

- `GLOSSARY.md`: `**Term** — plain-English definition. *[Wikipedia](url)* (optional) — See Chapter N.N — Title.` Alphabetical within `## A`…`## Z` sections.
- `INDEX.md`: `**Concept** — N.N, N.N, …` — chapter numbers ascending, de-duplicated, home chapter plus every chapter that materially covers the concept.

## 13. Book-level anti-patterns

- Inventing sources or citing a Wikipedia article never actually checked.
- Template drift (a chapter that silently varies section names, count of questions, or lens order from every other chapter).
- Bare-number cross-references.
- Two chapters silently covering the same concept as if it were each one's home (see scope notes, §4).
- A renumber left half-done: some files moved, cross-references or reference matter not yet updated.
- A locale translation that diverges structurally from its source chapter (missing a section, different question count) — translations preserve structure exactly; only language changes.

## 14. Versioning and change control

Structural changes are single, self-contained commits touching every artifact named in §7 together. This spec is the source of truth if the repository and the manifest ever disagree.

## 15. Non-goals and scope boundaries

- Not a constitutional law textbook or a jurisdiction-specific compliance manual.
- Not an econometrics or statistics textbook (2.4 covers the public-value-specific application, not the general theory).
- Not vendor or product documentation for any named platform or tool.
- Not a legal or regulatory authority — describes patterns, not binding rules for any one jurisdiction.
- Worldwide but not encyclopaedic: does not attempt to document every country's public administration system.
