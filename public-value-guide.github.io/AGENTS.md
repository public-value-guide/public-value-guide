# AGENTS.md

Guidance for AI agents working on this repository. Read `README.md` first for the layout and the commands.

## Roles

Role cards in `AGENTS/`: [`content-syncer`](AGENTS/content-syncer.md) (sync the book, add locales), [`site-developer`](AGENTS/site-developer.md) (code, styling, build), [`site-reviewer`](AGENTS/site-reviewer.md) (audit the built site; read-only). A single agent may wear several hats but must meet each role's exit criteria.

## What this repository is, and is not

This is the **website** for the Public Value Guide. It is not the book.

The prose lives in <https://github.com/public-value-guide/public-value-guide>. `src/content/` is a vendored copy of it.

**Never edit `src/content/`.** An edit there is lost the next time anyone runs `pnpm sync`, and it silently forks the book from its source of truth. To fix a typo in a topic, fix it in the book repository — under `locales/<slug>/topics/<NN-NN-slug>/index.md`, not a file here — then run `pnpm sync` here.

**The book has twenty-eight locales** (`en-gb-oxendict`, `en-gb`, `en-us`, `en-001`, `cy-gb`, `cy-001`, `es-001`, `fr-001`, `de-de`, `zh-cn`, `ar-001`, `hi-in`, `ja-jp`, `ru-ru`, `ru-001`, `ko-kr`, `zh-001`, `hi-001`, `ja-001`, `ko-001`, `id-001`, `bn-001`, `sv-se`, `sv-001`, `nl-nl`, `nl-001`, `is-is`, `is-001`; see `spec/index.md` §4a upstream), but `$lib/book.ts`'s `LOCALES` only lists the ones with fully-synced topic content — check that list, not the upstream directory listing, for what the live site actually offers. A topic's slug is not guaranteed to match across locales, so topic lookups always take a `locale` argument — never assume one global slug space. The glossary and index are not localized upstream and stay at unprefixed URLs shared by every locale.

## Conventions

- **"Topic", not "chapter".** The book renamed chapters to topics; routes are `/<locale>/topics/<slug>/`, the sync script reads `locales/<locale>/topics/`, and each locale's UI strings use that locale's word for topic (Topic, Pwnc, Tema, Thème, Thema, 主题, الموضوع, विषय, トピック, Тема, 주제). Old `/chapters/` URLs no longer exist.
- **`static/llms.txt` and `static/llms.json` are synced, not edited.** They are generated upstream by `bin/build-llms` and copied by `pnpm sync`.
- **The sitemap is generated at build time** by `src/routes/sitemap.xml/+server.ts`: every locale's contents and topic pages, with `hreflang` alternates linking each topic (and the preface) to its counterpart in every locale, plus `x-default`. A new locale needs no sitemap change.
- **Adding a locale:** add it to `LOCALES` and `PART_TRANSLATIONS` (part titles and taglines) in `src/lib/book.ts` *and* to `STRINGS` in `src/lib/i18n.ts` (use the locale's own word for topic), then run `pnpm sync`.

- **Prerendered, always.** `src/routes/+layout.ts` sets `prerender = true`. Every route must be prerenderable: no runtime server code, no request-time data. A new dynamic route needs an `entries()` export so adapter-static knows what to emit.
- **Content stays server-side.** Anything that reads `src/content/` belongs in `src/lib/server/`, which SvelteKit refuses to bundle into client code. The content is several megabytes; a stray client-side import would ship all of it to every reader.
- **Lily components come from npm, under `@lilydesignsystem/`.** `@lilydesignsystem/svelte-headless` supplies the layout/nav/content components (`GrailLayout`, `ArticleLayout`, `ContentsNav`, `BreadcrumbNav`, `PaginationNav`, `SectionHeading`, `Card`, `Badge`, `SkipLink`, …), and `@lilydesignsystem/svelte-picker-bar` supplies the header's `PickerBar` (which itself depends on the four `@lilydesignsystem/svelte-*-picker` packages). To use a new headless component, import it by name from `@lilydesignsystem/svelte-headless` — don't vendor a copy. **Theme CSS comes from `@lilydesignsystem/themes` the same way** — `static/assets/themes/*.css` is not committed; `scripts/sync-themes.sh` regenerates it from that package's `dist/` on every `pnpm install` (via `postinstall`), **filtered to the generic default set only** — no application-specific theme (an NHS, UK Government Digital Service, or US Web Design System theme, for instance) belongs in this repository. `+layout.svelte` filters `PickerBar`'s `themes` prop with the same `united-kingdom-`/`united-states-` prefix check the script uses, so the picker never offers a theme with no stylesheet behind it. If the directory looks stale or missing, run `pnpm install` again rather than hand-editing it.
- **Lily components are headless.** They carry class names and no styles. Put styling in `static/assets/style.css`, never in a component `<style>` block, so that all of the site's appearance is in one file and every theme keeps working.
- **The theme wins by default.** The active Lily theme states nearly everything inside `:where()`, which has zero specificity, so a plain class selector in `style.css` overrides it. If a rule seems not to apply, check whether the theme is styling a *parent* — `.section-heading`, for instance, is sized and bolded on the container, so `em` units on its children compound off that.
- **Sizes scale from `--text-base`,** which the `TextSizePicker` drives via `data-text-size` on `<html>`. Use `em` or that variable; a hard-coded `px` font size ignores the reader's choice.

## Before committing

```sh
pnpm check    # svelte-check: must report 0 errors
pnpm build    # must complete; watch for prerender warnings
```

Then check the built site rather than trusting the build log. Serve `build/` as a plain static directory — that is what GitHub Pages does, and `vite preview` can disagree with it:

```sh
cd build && python3 -m http.server 4190
```

Verify at 1440px and at 390px that no page scrolls horizontally, that the theme and text-size pickers work, and that the console is clean.

## Things that have bitten before

- **Wide tables.** Topics compare four or five columns of paradigms, sector lenses, and maturity levels. Tables are wrapped in a scrolling `.prose-scroll` region by the markdown renderer; do not remove the wrapper to "fix" a table's appearance.
- **Bare URLs.** The references section of every topic ends in autolinked URLs with no spaces to break at. `.prose a { overflow-wrap: anywhere }` is what keeps them from setting the page width on a phone.
- **Front matter has no topic number.** `slugFor` and the templates both special-case it. A layout that assumes every entry has a number will break on the preface.
- **`LocalePicker`'s `onChange` fires once on mount**, not only on a real user choice, and the two calls are indistinguishable from inside the callback (see the Lily component's own source). `+layout.svelte` guards this with a `readyToNavigate` flag that absorbs the first call; removing that guard makes every page load silently redirect to whatever locale was last stored or detected.
- **The URL wins over the saved locale, and locale-neutral pages follow the picker.** On `/<locale>/…` pages the picker is given the URL's locale and overrides (and re-saves) the stored one. On home, glossary and index there is no URL locale, so the picker shows the saved or detected one and `+layout.svelte` records it from `onChange` into `pickerLocale`, so the header chrome and the Contents link use that same locale. Don't derive chrome strings from `currentLocale` alone.
- **Emphasis next to CJK text needs `fixCjkEmphasis`.** CommonMark won't close `**…)**である` (punctuation before, a letter after), so Japanese, Chinese and Korean pages showed literal asterisks. `src/lib/markdown.ts` rewrites asterisk-free `**x**` and `*x*` to HTML before `marked` runs, skipping code. After changing it, grep the built HTML for `>[^<]*\*\*` — only the glossary's code sample should match.
- **Keep `@lilydesignsystem/themes` in step with the picker packages.** The theme CSS styles each picker's button, panel and tooltip by class name. When `svelte-picker-bar` gained a search picker (0.2.0), themes 0.1.0/0.2.0 had no `.search-picker*` rules: the button rendered 33×26 beside 40×40 siblings and its tooltip was unstyled. Themes 0.3.1 added them. After any picker-bar upgrade, check `grep -c search-picker static/assets/themes/light.css` is non-zero, and note `pnpm add` may not rerun `postinstall` — run `./scripts/sync-themes.sh` yourself. pnpm may also hold back a release under a day old; pin it (`pnpm add @lilydesignsystem/themes@x.y.z`).
- **`/` redirects by language.** `src/routes/+page.svelte` sends a reader to a locale's contents page: their saved picker choice if there is one, else the first of `navigator.languages` that `localeForLanguageTag` (`src/lib/book.ts`) matches (exact slug first, so `cy_GB` → `cy-gb`; then the language's international `-001` locale, so `en-AU` → `/en-001/` (there are no two-letter alias routes: `/en/` does not exist); then the first locale in that language, so `de-AT` → `de-de`), else the default locale. `/?<query>` is search and is never redirected. When testing, use a fresh browser context per case — the picker saves the locale you land in, and that saved choice wins next time.
- **Search is per locale.** `scripts/build-search-index.mjs` writes `build/search-index/<locale>.json`; `SearchGate` loads the index for `chromeLocale` and shows `results` strings from `src/lib/i18n.ts`. A new locale needs its `results` strings in `i18n.ts` alongside the other UI text. See `spec/search/index.md`.
- **On a phone the search field opens over the picker row, not below the header.** At `max-width: 40rem`, `static/assets/style.css` makes `.site-controls` a full-width positioning context and the `.search-picker-panel` an absolutely positioned full-width box over it. Hung below the header, the 278px popup straddled the header's bottom edge and covered the start of the content. The theme positions panels with anchor positioning inside `:where()` (zero specificity), so plain class selectors win. When checking popups, screenshot the **whole viewport** in mobile emulation (`isMobile`, `deviceScaleFactor: 2`); a clipped screenshot painted the panel in the wrong place and sent us chasing a bug that wasn't there.
- **The header's home-icon menu is the Lily link picker.** `projectLinks` in `src/routes/+layout.svelte` lists the site's own pages (in-app) and the project's places elsewhere (new tab): contents, glossary, index, `llms.txt`, the GitHub, Codeberg and GitLab repositories, the skills folder, the issue tracker and Lily. Labels come from `nav` and `links` in `src/lib/i18n.ts`; repository names are not translated. To add a link, add it to that list and any new label to all 15 locales.
- **A locale synced but not yet added to `LOCALES`.** `sync-content.sh` copies whatever topic content exists upstream, including a locale that is only partway through translation. That content sits in `src/content/` unused until someone deliberately adds the locale to `src/lib/book.ts`'s `LOCALES` — don't add it there until `pnpm sync`'s own topic count for that locale reaches 34.
