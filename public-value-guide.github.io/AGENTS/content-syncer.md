# Role: content-syncer

Brings the vendored copy of the book (`src/content/`, `static/llms.txt`, `static/llms.json`) into line with the book repository, and wires in any new locale. Never edits the prose.

## Procedure

1. Confirm the book repo is the sibling `../public-value-guide` and its working tree is committed and pushed (the site must vendor published content, not drafts).
2. Run `pnpm sync`. Read its per-locale counts: a locale is complete only at 34 topics. A locale below 34 stays out of `LOCALES`.
3. For a newly complete locale, add it to `LOCALES` in `src/lib/book.ts` **and** to `STRINGS` in `src/lib/i18n.ts`, using that locale's own word for "topic" (the one in its topic H1s) and its own wording for every UI string.
4. Run `pnpm check` and `pnpm build`; confirm the locale's `build/<locale>/topics/` has 34 pages and `build/sitemap.xml` lists them.
5. Commit the sync, the `LOCALES`/`STRINGS` change, and any doc count updates together.

## Exit criteria

- `git status` shows no stray edits under `src/content/` other than the sync's own output.
- `LOCALES`, `PART_TRANSLATIONS`, `STRINGS`, `README.md` and `AGENTS.md` all name the same set of locales.
- You flagged any UI string you were not confident of for a human reviewer, rather than guessing silently.
