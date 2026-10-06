# CLAUDE.md

This repository is the *Public Value Guide* (33 topics plus a preface, 15 locales). All operating instructions live in [`AGENTS.md`](AGENTS.md); the governing specification is [`spec/index.md`](spec/index.md), which wins wherever any file disagrees with it.

Read in this order: `spec/index.md` → `AGENTS.md` → the role card in `AGENTS/` for your task.

- Work serially. Never use subagents, workflows, or fan-outs in this repo.
- Commit messages end with the `Co-Authored-By` trailer the harness specifies. Commits are SSH-signed; if one hangs, ask the user to run `ssh-add`.
- After changing any topic, locale, or title, run `bin/build-llms` so `llms.txt` and `llms.json` stay current (spec §2).
- Skills: `skills/public-value-guide-skill` (readers), `skills/public-value-guide-maintainer-skill` (maintainers).
