# public-value-guide.github.io

The public website for the [Public Value Guide](https://github.com/public-value-guide/public-value-guide) at <https://public-value-guide.github.io>.

The book itself — 33 topics plus a preface, a glossary, and an index — lives in the source repository, written across twenty-eight locales (`en-gb-oxendict`, `en-gb`, `en-us`, `en-001`, `cy-gb`, `cy-001`, `es-001`, `fr-001`, `de-de`, `zh-cn`, `ar-001`, `hi-in`, `ja-jp`, `ru-ru`, `ru-001`, `ko-kr`, `zh-001`, `hi-001`, `ja-001`, `ko-001`, `id-001`, `bn-001`, `sv-se`, `sv-001`, `nl-nl`, `nl-001`, `is-is`, `is-001` — see `spec/index.md` §4a upstream). This repository turns that markdown into a reading site. Only locales with synced topic content appear on the live site; see `src/lib/book.ts`'s `LOCALES`.

## What's here

A SvelteKit project using `@sveltejs/adapter-static` that prerenders every page to plain HTML, styled with the [Lily Design System™](https://github.com/LilyDesignSystem), and deployed by GitHub Actions.

```
public-value-guide.github.io/
├── src/
│   ├── app.html                  Document shell; loads the Lily theme and site CSS
│   ├── content/                  Vendored copy of the book's markdown
│   │   ├── locales/
│   │   │   └── en-gb-oxendict/topics/<NN-NN-slug>/index.md   the preface and 33 topics
│   │   ├── GLOSSARY.md           Not localized upstream — one shared copy
│   │   └── INDEX.md              Not localized upstream — one shared copy
│   ├── lib/
│   │   ├── book.ts               Part manifest, locale list, shared types (client-safe)
│   │   ├── markdown.ts           Markdown to HTML, run at build time
│   │   ├── ReferencePage.svelte  Shared layout for the glossary and the index
│   │   └── server/book.ts        Server-only: loads and parses the content, per locale
│   └── routes/
│       ├── +layout.svelte        Grail layout: header (incl. the language picker), reading column, footer
│       ├── +layout.server.ts     Cross-locale topic slug map, for the language picker
│       ├── +page.svelte          Home (locale-neutral; links into the default locale)
│       ├── [locale=locale]/
│       │   ├── +page.server.ts   Locale landing page (hero) with a link to contents
│       │   ├── contents/         Full table of contents, in this locale
│       │   └── topics/[slug]/  One prerendered page per topic, in this locale
│       ├── glossary/             Locale-neutral: the glossary is not localized upstream
│       ├── index/                Locale-neutral: the index is not localized upstream
│       └── sitemap.xml/
├── static/
│   ├── .nojekyll                 Stop GitHub Pages running Jekyll over the build
│   ├── robots.txt
│   └── assets/
│       ├── style.css             The site stylesheet, layered over the Lily theme
│       ├── favicon.svg
│       └── themes/               Lily default theme stylesheets the reader can switch between
├── scripts/sync-content.sh       Re-copy the book's markdown from the source repo
├── .github/workflows/deploy.yml  CI: build and deploy on push to main
├── svelte.config.js
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## Develop

```sh
pnpm install
pnpm dev          # http://localhost:5173
pnpm build        # produces build/ for deploy
pnpm preview      # production-mode preview
pnpm check        # type-check
```

## How the book gets here

The markdown is **vendored** — `src/content/` holds a copy, so this repository builds and previews on its own without a checkout of the book beside it. The copy goes stale when the book changes; refresh it with:

```sh
pnpm sync                                   # assumes the repos are siblings
./scripts/sync-content.sh /path/to/the/book  # or point at it explicitly
```

then review and commit the result. The script deletes `src/content/locales/` before copying, so a locale or a topic removed upstream is removed here too, and it skips any locale that has no non-empty topic content yet — the book repository scaffolds every locale's directories up front (per its own locale-peer-id convention) well before a translation pass fills them in.

Topics are discovered from their directory names, which carry the ordering (`03-07-public-procurement-and-commissioning/`), and the topic number and title are read from each `index.md`'s `#` heading. Adding a topic upstream and re-running the sync is therefore most of the job — the one thing kept by hand is the five-part grouping and its taglines, and the locale list, both in `src/lib/book.ts`. The topic files do not record which part they belong to, and a newly-synced-but-still-partial locale should not silently appear in the site's navigation, so a locale is only added to `LOCALES` once its 34 topic files are all present — see the reminder `sync-content.sh` prints at the end of its run.

**Locales.** The book is written once, in `en-gb-oxendict` (its canonical, source-of-truth locale — see `spec/index.md` §4a upstream), and localized into `en-gb`, `en-us`, and `en-001` (English variants) and `cy-gb`/`cy-001` (Welsh) as those passes complete. A topic's slug is not always the same across locales — a Welsh topic directory is named in Welsh — which is why topics are looked up per locale (`$lib/server/book.ts`'s functions all take a `locale` argument) rather than by a single slug shared across every locale, and why the header's language picker jumps to the equivalent topic via `+layout.server.ts`'s cross-locale slug map (keyed by topic number, not slug) rather than by editing the URL in place. The glossary and the index are not localized upstream, so they stay at unprefixed URLs (`/glossary/`, `/index/`) shared by every locale.

## Design

The site uses the Lily Design System's Svelte packages from npm, under the `@lilydesignsystem/` org — nothing vendored except theme CSS (below):

- **[`@lilydesignsystem/svelte-headless`](https://www.npmjs.com/package/@lilydesignsystem/svelte-headless)**: `GrailLayout` and its header, main, and footer regions for the page frame, `ArticleLayout`, `ContentsNav`, `BreadcrumbNav`, `PaginationNav`, `SectionHeading`, `Card`, `Badge`, and `SkipLink`. They ship no CSS — every rule comes from the active theme plus `static/assets/style.css`.
- **[`@lilydesignsystem/svelte-picker-bar`](https://www.npmjs.com/package/@lilydesignsystem/svelte-picker-bar)**: `PickerBar` in the header, composing `ThemePicker`, `LocalePicker`, `TextSizePicker`, and `SharePicker` (each its own `@lilydesignsystem/svelte-*-picker` package, installed transitively). All three stateful pickers persist to `localStorage`; the theme picker also honours `prefers-color-scheme`, and the share picker offers copy-link plus email, LinkedIn, Reddit, Bluesky, and Mastodon. The locale picker offers whichever of the book's locales are synced and actually navigates: `+layout.svelte` maps its `onChange` to the equivalent page in the new locale (the same topic via the cross-locale slug map, or that locale's contents page otherwise). `LocalePicker` itself fires `onChange` once on mount as well as on a real user choice — indistinguishable from inside the callback — so the layout treats the first call as inert initialisation and only navigates on the ones after it.

Readers can switch between Lily's default reference themes only — no application-specific theme (a national health service or government digital service's own visual identity, as some other Lily-based sites vendor) is included here. There is no published theme package, so `static/assets/themes/` stays a vendored copy of `lilydesignsystem/lily-design-system`'s `themes/` directory, filtered to the generic set — refresh it by re-copying (and re-filtering) when it drifts. Each theme file is standalone: it declares its tokens and inlines the component CSS, so switching is a single stylesheet swap.

Content rendering happens entirely at build time. `src/lib/server/book.ts` is server-only, so the prose never enters a client bundle; each page ships its own HTML and a shared JavaScript bundle for the pickers.

## Deploy

GitHub Actions builds and deploys on every push to `main`, via `.github/workflows/deploy.yml`. The repository's **Settings → Pages → Source** must be set to **GitHub Actions**.

## Licence

The site code is available under the same terms as the [Public Value Guide](https://github.com/public-value-guide/public-value-guide). Lily Design System components are used under their own licence; Lily™ and Lily Design System™ are trademarks.
