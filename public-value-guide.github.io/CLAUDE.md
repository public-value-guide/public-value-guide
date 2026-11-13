# CLAUDE.md

This is the website for the Public Value Guide, not the book. All operating instructions live in [`AGENTS.md`](AGENTS.md); read it and `README.md` first.

- Never edit `src/content/` or `static/llms.*`; fix the book repository, then run `pnpm sync`.
- Before committing: `pnpm check` (0 errors) and `pnpm build`.
- Work serially. Never use subagents, workflows, or fan-outs.
- Commit messages end with the `Co-Authored-By` trailer the harness specifies.
