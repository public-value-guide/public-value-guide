# Tasks

Live checklist. Update in the same change as the work it tracks.

## Phase 0 — Scaffolding

- [x] Repository layout, `spec/index.md`, `spec/maturity-model.md`, `spec/oxford-spelling.md`
- [x] `AGENTS.md` and `AGENTS/` role cards
- [x] `STYLE_GUIDE.md`
- [x] Locale directories + `.locale-peer-id` for all 34 topic units × 6 locales (scaffolded; nine more locales added later — see Phase 4)
- [x] `bin/` tooling vendored from `sixarm/locale-help`
- [x] `GLOSSARY.md` / `INDEX.md` skeletons
- [x] `README.md`
- [x] `CITATION.cff`
- [x] `_sources/research-notes.md` skeleton
- [x] `skills/` (reader-facing + maintainer-facing)

## Phase 1 — Canonical topics (`en-gb-oxendict`)

### Front matter

- [x] Preface — `00-01-preface`

### Part 1 — Foundations

- [x] 1.1 Introduction to Public Value
- [x] 1.2 The Strategic Triangle: Legitimacy, Value, and Capacity
- [x] 1.3 Market Failure and Government Failure
- [x] 1.4 Public Goods, Merit Goods, and Value Pluralism
- [x] 1.5 Stakeholders, Citizens, and Co-Production

### Part 2 — Evaluation and Evidence

- [x] 2.1 The Public Value Scorecard and Outcomes Frameworks
- [x] 2.2 Social Cost-Benefit and Cost-Effectiveness Analysis
- [x] 2.3 Social Return on Investment and Impact Measurement
- [x] 2.4 Public Sector Econometrics and Programme Evaluation
- [x] 2.5 Business Cases and Value for Money
- [x] 2.6 Evidence Synthesis and What Works

### Part 3 — Systems, Governance and Priorities

- [x] 3.1 Public Administration Systems and Models
- [x] 3.2 Public Policy and the Policy Cycle
- [x] 3.3 Public Finance and Budgeting
- [x] 3.4 Accountability, Transparency, and Legitimacy
- [x] 3.5 Equity, Fairness, and Distributive Justice
- [x] 3.6 Public Sector Workforce and Labour Markets
- [x] 3.7 Public Procurement and Commissioning
- [x] 3.8 Social Sector and Nonprofit Management
- [x] 3.9 Intergovernmental Relations and Federalism
- [x] 3.10 Regulation and Public Risk Management
- [x] 3.11 Quality, Safety, and Performance Management
- [x] 3.12 Crisis, Emergency, and Resilience Management

### Part 4 — Global and Societal Issues

- [x] 4.1 Behavioural Public Policy
- [x] 4.2 Trust in Government and Civic Engagement
- [x] 4.3 Climate, Sustainability, and Environmental Public Value
- [x] 4.4 Social Media, Misinformation, and Public Communication

### Part 5 — Digital, Software, and Technology

- [x] 5.1 Digital Government and Digital Transformation
- [x] 5.2 AI and Algorithmic Decision-Making in Government
- [x] 5.3 Public Sector Software Engineering and Platforms
- [x] 5.4 Public Sector Data, Interoperability, and Open Data
- [x] 5.5 Cybersecurity and Public Sector Technology Risk
- [x] 5.6 Innovation and Public Entrepreneurship

## Phase 2 — Reference matter

- [x] `GLOSSARY.md` reconciled against all canonical topics
- [x] `INDEX.md` reconciled against all canonical topics

## Phase 3 — Quality gates (canonical locale)

- [x] All 33 topics pass the structural gate (verified by automated sweep: section names/order, six discussion questions, four sector lenses in order, 8-12 best practices, 6-12 checklist items, five-column maturity table, headings match manifest)
- [x] All 33 topics pass the link gate (each topic-author fetched and verified every Wikipedia/institutional link live before inclusion; not independently re-audited by a separate reviewer pass)
- [x] All 33 topics pass the source gate (no invented citations per each author's self-report; not independently re-audited by a separate reviewer pass)
- [x] All 33 topics + preface pass the consistency gate (a scripted cross-reference title and bare-number sweep ran over every locale, including the canonical one; see Phase 5)

## Phase 4 — Localization

- [x] `en-gb` — all topics
- [x] `en-us` — all topics
- [x] `en-001` — all topics
- [x] `cy-gb` — all topics (flagged for professional review, spec §4a)
- [x] `cy-001` — all topics (flagged for professional review, spec §4a)
- [x] `ar-001`, `de-de`, `es-001`, `fr-001`, `hi-in`, `ja-jp`, `ru-ru`, `zh-cn` — all topics (34/34 files each; not yet independently reviewed)
- [x] `ko-kr` — all topics (34/34 files; AI-drafted, South Korean public-administration terminology, spec §4a)
- [x] Prefaces in all 15 locales state eleven of fifteen locales are AI-translated drafts

## Phase 5 — Release checks

- [ ] Every locale passes all four gates
  - [x] Structural gate scripted across all 14 locales (headings, item counts, Wikipedia link counts): 0 failures (now 15 locales including `ko-kr`)
  - [x] Link gate: all 318 distinct Wikipedia slugs resolve (one non-existent slug removed from Topic 1.5)
  - [x] Cross-reference titles match target headings in every locale
  - [x] Bare topic numbers fixed in all 14 locales (mentions already followed by a titled citation in the same sentence are left as is)
  - [ ] Korean (`ko-kr`) professional review (AI-drafted, 34/34 files)
  - [x] Welsh terminology aligned with TermCymru (status A/B; `cy-gb` and `cy-001` kept identical; 2026-10 pass)
  - [ ] Welsh (`cy-gb`, `cy-001`) professional review, including *pwnc* agreement after the chapter→topic rewording
- [x] `README.md`, `GLOSSARY.md`, `INDEX.md` agree with `spec/index.md` §4 (verified by script)
- [x] `bin/check` automates the gates for all 15 locales; GitHub Actions runs it on every push, with the Wikipedia link gate weekly
- [x] Machine-readable entry points: `CLAUDE.md`, `llms.txt`, `llms.json` (generated by `bin/build-llms`; regenerate after any topic, title, or locale change)
- [x] Reading site (`public-value-guide.github.io`) serves all 15 locales, a `hreflang` sitemap, and `/llms.txt` + `/llms.json`
- [ ] This file fully checked off (blocked only by the two professional reviews above)
