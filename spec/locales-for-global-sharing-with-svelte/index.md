# Locales for major projects with SvelteKit

Translate content into multiple locales.

How this site supports multiple locales end to end: content, web
routing, UI chrome, and bugs.

Read locales via file `locales.tsv`.

## .locale-peer.id file

`.locale-peer-id` file is a byte-identical 32-character hexadecimal lowercase
number then newline, across every locale's version of "the same" topic,
regardless of slug.

`.locale-peer-id` id is how the project resolves "this page, in locale X".

## Guidance

- en-us: consistent American spelling; fix any stray en-gb forms (organisation→organization, licence→license, programme→program, cancelled→canceled, analogue→analog).

- en-gb: the -ize/-ise family (optimise, realise, organise, prioritise, utilise, etc.), -or/-our (colour, behaviour, favour, labour, neighbours), -er/-re (centre, theatre for the metaphorical sense), -ense/-ce (defence, licence), doubled-L forms (modelled, labelled, cancelled, enrol/enrolment), analogue, programme, and math→maths.

- en-gb-oxendict: use en-gb then revert just the -ise family back to Oxford -ize spelling (optimize, realise→realize, organise→organize, etc.), while correctly keeping -yse forms (analyse/analysable) unchanged, since Oxford style never uses -yze, and keeping all other British forms (colour, centre, defence, licence, programme, maths, modelled) intact.

## Guard against corruption

Keep proper nouns unconverted. Example: "Hospital Readmissions Reduction Program" (a real United States federal program name).

## Verify

For each locale subdirectory:

- File exists: `index.md`
- Symlink exists: `README.md`
- Locale peer id tracking file exists: `.locale-peer-id`

Then:

- Fix any broken internal links
- Fix any residual wrong-dialect spellings
- Update `./spec/locale/index.md`

## Content structure (book side)

Each locale is `locales/<code>/` in the book repo, containing:

- `locales/<code>/topics/<slug>/index.md` + `.locale-peer-id` — one per topic.
  `README.md` is a symlink to `index.md`.
- `locales/<code>/index.md` + `.locale-peer-id` + `README.md` symlink — the
  locale's own translated README (site home/contents page source). Every
  locale gets this file scaffolded (matching the topic-file pattern) even
  before it has a translation; it starts empty.

## Slugs

Slugs are per-locale, not shared.** Translated locales rename topic directories
to native-script/accented slugs.

Example: `es-001` `año-de-vida-ajustado-por-calidad`, `ur-001` `صحت-ایڈجسٹڈ-متوقع-زندگی`.

Nothing in the site assumes slugs match across locales.

## Locale picker (labels + ordering)

- Labels live in `locales.js`'s `LOCALE_LABELS`, one entry per code, in that
  language (e.g. `'fr-001': 'Français (Monde)'`). Falls back to the raw code
  via `localeLabel()` if a code has no label yet.
- Header `PickerBar` order comes from `content.js`'s `locales()` (sorted by
  code) — the `-001` suffix happens to sort before any letter-starting
  regional suffix, so variants already come first there.
- Home page's locale list (`+page.server.js`) sorts explicitly: default
  locale first, then grouped by language name (label text before the `(`),
  with the `-001`/World variant sorted before its regional siblings within
  each group, then alphabetically by label. This does NOT fall out of
  alphabetical-by-label sort on its own (e.g. "España" < "Mundo") — it needs
  the explicit `-001` check.

## Bug fixes (regression watch-list)

### Bug: ASCII-only `\w` regexes broke every non-Latin/non-accented slug

Bug: matched topic slugs with `[\w.-]+` (ASCII word chars only). Any locale with
an accented or native-script slug (Spanish, French, Russian, Chinese, Arabic,
Welsh, Hindi, Bengali, Portuguese, Indonesian, Urdu) silently failed peer-id
resolution and cross-topic links.

Fix by widening the slug capture group to `[^/]+`.

### Bug: Every locale's home/contents page showed canonical English content

Bug: code and content always read a single top-level `/README.md` for title,
intro, "New here?" picks, part headings, and blurbs — only topic _links_ were
ever localized.

Fix: populate the previously-empty `locales/<code>/index.md` per locale.

## Bug: Link extraction was hardcoded to literal English phrase

Bug: link silently found nothing once the README was translated.

Fix: extract all links from the whole pre-`##` intro block instead of
regex-matching the English sentence.

### Bug: UI chrome was hardcoded English in the `.svelte` templates

Bug: nav labels, subtitles, page titles, intros, breadcrumbs, topic position,
pagination, picker/share labels.

Fix: add `i18n.js` and threading `ui(locale)` through every locale-scoped route
and `+layout.svelte`.

### Bug: header/footer brand wordmark stayed English

Bug: wordmark came only from the root (locale-agnostic) `+layout.server.js`,
which deliberately never picks a locale.

Fix: have `locales/[locale]/+layout.server.js` supply this locale's own title,
which overrides the root layout's canonical one via SvelteKit's merged
`page.data` on any route under `/locales/<locale>/` — the root picker and
`/about/` (no locale in the URL) correctly keep the canonical English title.

## Locale directory names

Every directory under `locales/` is named `<language>-<region>[-<variant>]`: a
lowercase two-letter language code, a hyphen, a region that is a lowercase
two-letter country code (`gb`) or a three-digit UN M.49 code (`001` is the
world), and optionally a registered variant (`oxendict`). A language-only
directory such as `locales/en/` is never created. `bin/check` enforces this.

## Routes on the reading site

- Every locale is served at `/<locale>/…` using its directory name:
  `/<locale>/contents/` and `/<locale>/topics/<slug>/`.
- `/<locale>/` alone redirects to `/<locale>/contents/`.
- The `-001` locales are also reachable at a two-letter alias (`/en/…` serves
  the same content as `/en-001/…`; likewise `es`, `fr`, `cy`, `ar`). The alias
  is a route only, never a directory. There is **no** forwarding in either
  direction between `/<language>-001/` and `/<language>/`: each URL stays
  where it is.
- Slugs differ per locale, so the picker maps a topic across locales by topic
  number (equivalently by `.locale-peer-id`), never by slug.

## Root route `/` chooses a locale from the browser language

`/` has no content. In the browser it redirects to `/<locale>/contents/` for
the first match of this order:

1. The locale the reader chose earlier with the picker (saved in the browser).
2. For each language in `navigator.languages` (first entry is
   `navigator.language`), in order: normalize case, treat `_` as `-` and drop
   a script subtag, then:
   1. an exact locale (`cy_GB` → `cy-gb`, `en-US` → `en-us`);
   2. otherwise the language's international `-001` locale (`en-AU` →
      `en-001`, `fr-CA` → `fr-001`; not the two-letter alias);
   3. otherwise the first locale in that language (`de-AT` → `de-de`).
3. Otherwise the canonical locale, `en-gb-oxendict`.

`/?<query>` is the site search and is never redirected. When testing, use a
fresh browser context per case, because landing on a locale saves it.

## Welsh

`cy-gb` and `cy-001` are kept byte-identical. Terminology follows the Welsh
Government's TermCymru term bank (status A, then B, where the entry's subject
area fits). See `spec/index.md` §4a for the list of aligned terms.

## Rendering notes for CJK locales

CommonMark does not close `**…)**である` (punctuation before the closing mark, a
letter after), so Japanese, Chinese and Korean pages showed literal asterisks.
The site rewrites asterisk-only `**strong**` and `*emphasis*` to HTML before
parsing, outside code. A new locale also needs its five part titles and
taglines added to the site's part translations, and its UI strings.

## Current locales

`locales.tsv` lists the fifteen locales (one canonical, fourteen localized).
Eleven of the fifteen — every locale except the four English ones — are
AI-translated drafts awaiting professional review; see `spec/index.md` §4a.
