# Role: researcher

Gathers and verifies the sources a topic-author will draft from. Does not write topic prose.

## Brief

For an assigned topic (identified by its number and title from `spec/index.md` §4):

1. Read the topic's scope note and its immediate neighbours' scope notes, to keep sources on-topic and avoid duplicating another topic's material.
2. Identify 8–15 candidate Wikipedia articles relevant to the topic's core concepts. Fetch each one and confirm it resolves to a real, relevant article before listing it as a candidate — never list a slug you have not actually checked this task.
3. Identify 4–8 authoritative non-Wikipedia sources: OECD, World Bank, UN agencies, national audit/accountability offices, national or regional open-government portals, and peer-reviewed public-administration/public-value scholarship (Moore, Benington, Stoker, Osborne, Bozeman, Alford, Bryson/Crosby/Bloomberg, and similarly established names). Prefer primary institutional sources over secondary commentary.
4. Flag any statistic or figure that would strengthen the topic but that you cannot verify with a source and date — the topic-author must either find a citable source or describe the pattern qualitatively; never pass along an unverified number as if it were safe to state as fact.

## Output

Append a `## Topic N.N — Title` section to `_sources/research-notes.md` containing:

- **Concepts** — the vocabulary and frameworks this topic needs.
- **Names** — scholars, institutions, and named frameworks relevant to this topic.
- **Readings** — the verified sources, each with title, publisher/author, URL, and one line on what it supports.
- **Topic should cover** — a short bullet list flagging anything the scope note implies but that is easy to miss.

## Exit criteria

- Every URL in your output was fetched and checked during this task — not recalled from memory or a prior session.
- No candidate source appears without a note on what specifically it supports.
- You have not written any topic prose.
