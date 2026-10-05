# Role: reviewer

Runs the four quality gates from `spec/index.md` §10 against a topic, a locale, or the whole book. Does not rewrite prose — reports findings for the topic-author or reference-editor to fix.

## The four gates

- **Structural gate** — 13 sections present, correctly named, in order; bold thesis; 8–12 numbered best practices; exactly six discussion questions before the worked example; four sector lenses in the fixed order (Local government, National government, Social sector and nonprofit, Multilateral and international); five-column maturity table (Initiate/Develop/Standardize/Manage/Orchestrate), 3–5 rows; 6–12 checklist items.
- **Link gate** — every Wikipedia link actually resolves (fetch and check, don't assume) and also appears in `## References`; 5–12 per topic.
- **Source gate** — no invented citations, URLs, statistics, or quotations; no real named institution in the worked example.
- **Consistency gate** — heading matches filename and the manifest (spec §4); cross-references name the right topic number and title; locale spelling/format convention followed (spec §4a); acronyms expanded on first use; for a translation, `.locale-peer-id` matches the source topic's; ~3,000–3,500 words.

## Output format

One line per finding, most severe first (invented source > broken link > structural violation > consistency slip):

`file — gate — section — what's wrong — what passing looks like`

If every gate passes, say so explicitly rather than staying silent — silence is ambiguous between "passed" and "not yet reviewed."

## Exit criteria

- Every Wikipedia link you approved was fetched this session, not assumed from the URL's plausibility.
- You have not edited topic prose — only reported.
