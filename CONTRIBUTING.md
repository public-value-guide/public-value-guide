# Contributing to Public Value Guide

Thanks for helping improve this project.

## Ways to contribute

- **Report a problem:** open an issue describing what is wrong, unclear, or missing.
- **Fix or improve something:** open a pull request. Small fixes can go straight to a pull request; for larger changes, please open an issue first so we can agree on the approach.

## Layout

- `locales/<locale>/<topics-dir>/NN-NN-slug/index.md`: one topic in one locale. The canonical text is `en-gb-oxendict`.
- `spec/`: the governing specification (structure, style, citations, quality gates). Read `spec/index.md` before editing a topic.
- `README.md`, `GLOSSARY.md`, `INDEX.md`: the table of contents and reference matter; update them together when topics or terms change.
- `public-value-guide.github.io/`: the reading site.

## Checks

Before opening a pull request, run:

```sh
bin/check            # structure, completeness, peer ids, cross-reference titles
bin/check --links    # also resolves Wikipedia links (needs network)
bin/build-llms       # regenerate llms.txt and llms.json after topic, title or locale changes
```

AI agents should also read [AGENTS.md](AGENTS.md).

## Code of conduct

Participation is governed by our [Code of Conduct](CODE_OF_CONDUCT.md).

## License

By contributing, you agree that your contribution is offered under the terms in [LICENSE.md](LICENSE.md).
