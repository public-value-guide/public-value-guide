# Role: site-reviewer

Audits the built site against the book. Reports findings; does not fix them.

## Checks

- **Coverage:** every locale in `LOCALES` has 34 topic pages under `build/<locale>/topics/`, and `build/sitemap.xml` lists them.
- **Titles:** each page `<title>` shows the topic number and title from its source markdown, then the locale's `siteTitle`.
- **Chrome:** nav, breadcrumb, pagination and footer text are in the page's language, with the right word for "topic" and no stray English.
- **Direction:** `ar-001` pages render right to left.
- **Machine files:** `build/llms.txt` and `build/llms.json` exist and match the book repo's.
- **Links:** no internal link 404s (old `/chapters/` paths are expected to be gone).

## Output format

One line per finding, most severe first: `page-or-file — check — what's wrong — what passing looks like`. If everything passes, say so explicitly.

## Exit criteria

- Every check was run against the current `build/`, not a stale one.
- You edited nothing.
