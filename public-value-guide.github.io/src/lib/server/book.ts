// Server-only access to the book's markdown.
//
// Living under `#lib/server/` means SvelteKit refuses to bundle this into
// client code, which matters here: the vendored content is several megabytes of
// prose. The site is fully prerendered, so this module runs at build time and
// each page ships only its own rendered HTML.

import { parse, type Document, type Heading } from '#lib/markdown.js';
import { PARTS, LOCALE_SLUGS, type TopicRef } from '#lib/book.js';

/**
 * Raw markdown for every topic, keyed by module path, e.g.
 * `../../content/locales/en-gb-oxendict/topics/01-01-introduction-to-public-value/index.md`.
 * Each locale is its own directory upstream (`locales/<slug>/topics/`), and
 * each topic within it is its own directory holding one `index.md` — the
 * `locale-peer-id` convention (see spec/index.md §4a upstream) — vendored here
 * the same way. See `scripts/sync-content.sh`.
 */
const topicFiles = import.meta.glob('../../content/locales/*/topics/*/index.md', {
  query: '?raw',
  import: 'default',
  eager: true
}) as Record<string, string>;

const glossaryFile = import.meta.glob('../../content/GLOSSARY.md', {
  query: '?raw',
  import: 'default',
  eager: true
}) as Record<string, string>;

const indexFile = import.meta.glob('../../content/INDEX.md', {
  query: '?raw',
  import: 'default',
  eager: true
}) as Record<string, string>;

/** A topic: its table-of-contents entry plus its markdown source. */
type Topic = TopicRef & { markdown: string };

/**
 * Turn a content topic-directory name into a URL slug.
 *
 * Directories are named `NN-NN-kebab-title`, where the leading numbers order
 * the book on disk. URLs keep the topic number (readers cite topics by
 * number) but drop the zero padding: `01-01-introduction-to-public-value`
 * becomes `1-1-introduction-to-public-value`. Front matter has no topic
 * number, so `00-01-preface` becomes just `preface`.
 *
 * The kebab-title itself can differ by locale (a Welsh topic directory is
 * named in Welsh), which is exactly why topics are looked up per locale
 * rather than by a single slug shared across every locale.
 */
function slugFor(stem: string): string {
  const numbered = stem.match(/^(\d+)-(\d+)-(.+)$/);
  if (numbered) {
    const [, part, topic, rest] = numbered;
    // Front matter directories are numbered `00-01-preface` for ordering
    // only — part `00` is not a real part — and read better without digits.
    if (Number(part) === 0) return rest;
    return `${Number(part)}-${Number(topic)}-${rest}`;
  }
  return stem;
}

/**
 * Split a document title into its number and its title.
 *
 * The number comes from the directory name (`01-01-…` → `1.1`; part `00` is
 * front matter and has none), so it works in every language. The title is the
 * heading with its localized prefix removed: English topic files open with
 * `# Topic 1.1 — Introduction to Public Value`, German with `# Thema 1.1 — …`,
 * Japanese with `# トピック1.1 — …`; the preface opens with a bare heading.
 */
function splitTitle(heading: string, stem: string): { number: string; title: string } {
  const numbered = stem.match(/^(\d+)-(\d+)-/);
  if (!numbered || Number(numbered[1]) === 0) return { number: '', title: heading.trim() };
  const number = `${Number(numbered[1])}.${Number(numbered[2])}`;
  const title = heading.replace(/^[^—–]*?\d[\d.]*[^—–]*[—–-]\s*/, '').trim();
  return { number, title };
}

/** Parse `../../content/locales/<slug>/topics/<topic-dir>/index.md` into its parts. */
function parseTopicPath(path: string): { locale: string; stem: string } {
  const match = path.match(/\/locales\/([^/]+)\/topics\/([^/]+)\/index\.md$/);
  if (!match) throw new Error(`Unrecognized topic content path: ${path}`);
  return { locale: match[1], stem: match[2] };
}

/**
 * Every topic, in reading order, grouped by locale. The content directory
 * names already sort into reading order within a locale, so sorting the glob
 * keys is enough.
 */
const topicsByLocale: Record<string, Topic[]> = {};
for (const [path, markdown] of Object.entries(topicFiles).sort(([a], [b]) =>
  a.localeCompare(b)
)) {
  const { locale, stem } = parseTopicPath(path);
  const heading = markdown.match(/^#\s+(.+)$/m)?.[1] ?? stem;
  const { number, title } = splitTitle(heading, stem);
  const entry: Topic = {
    slug: slugFor(stem),
    number,
    title,
    part: number ? Number(number.split('.')[0]) : 0,
    markdown
  };
  (topicsByLocale[locale] ??= []).push(entry);
}

/** Topics for one locale, or `[]` if the locale is unknown. */
function topicsFor(locale: string): Topic[] {
  return topicsByLocale[locale] ?? [];
}

/** Table-of-contents entries for one locale — metadata only, safe for the client. */
export function toc(locale: string): TopicRef[] {
  return topicsFor(locale).map(({ slug, number, title, part }) => ({
    slug,
    number,
    title,
    part
  }));
}

/** The parts, each with its topics, for rendering one locale's full contents. */
export function contents(locale: string): Array<{
  number: number;
  title: string;
  tagline: string;
  topics: TopicRef[];
}> {
  const topics = toc(locale);
  return PARTS.map((part) => ({
    ...part,
    topics: topics.filter((topic) => topic.part === part.number)
  }));
}

/** Front matter for one locale — topics with no part, such as the preface. */
export function frontMatter(locale: string): TopicRef[] {
  return toc(locale).filter((topic) => topic.part === 0);
}

/** A rendered topic plus its neighbours, or `null` if the locale or slug is unknown. */
export function topic(
  locale: string,
  slug: string
): {
  ref: TopicRef;
  doc: Document;
  previous: TopicRef | null;
  next: TopicRef | null;
} | null {
  const topics = topicsFor(locale);
  const at = topics.findIndex((candidate) => candidate.slug === slug);
  if (at === -1) return null;

  const { markdown, ...ref } = topics[at];
  const neighbour = (offset: number): TopicRef | null => {
    const found = topics[at + offset];
    if (!found) return null;
    const { markdown: _omit, ...rest } = found;
    return rest;
  };

  return { ref, doc: parse(markdown), previous: neighbour(-1), next: neighbour(1) };
}

/** `{ locale, slug }` for every topic in every locale, for prerender entry generation. */
export function localeTopicEntries(): Array<{ locale: string; slug: string }> {
  return LOCALE_SLUGS.flatMap((locale) => slugs(locale).map((slug) => ({ locale, slug })));
}

/** Every topic slug for one locale, for prerender entry generation. */
export function slugs(locale: string): string[] {
  return topicsFor(locale).map((topic) => topic.slug);
}

/**
 * Maps a topic identifier to its slug in each locale, so the locale picker
 * can jump to the equivalent topic after a switch instead of just the
 * target locale's contents page. Most topics share the same slug in every
 * English locale; a Welsh topic directory does not, which is exactly why
 * this is keyed by topic number rather than by slug.
 *
 * Front matter has no number, so it is keyed by its own slug instead — safe
 * here because front-matter directory names (and therefore slugs) are
 * identical across the English locales upstream.
 */
export function localeSlugMap(): Record<string, Record<string, string>> {
  const map: Record<string, Record<string, string>> = {};
  for (const [locale, topics] of Object.entries(topicsByLocale)) {
    for (const ch of topics) {
      const key = ch.number || `front:${ch.slug}`;
      (map[key] ??= {})[locale] = ch.slug;
    }
  }
  return map;
}

/**
 * Render a reference document (the glossary or the index).
 *
 * Both files carry relative links to `spec/index.md`, which exists in the
 * source repository but not on this site; repoint it at GitHub so the link
 * still resolves for readers who follow it.
 */
function reference(markdown: string): Document & { letters: Heading[] } {
  const repointed = markdown.replace(
    /\]\(spec\/index\.md\)/g,
    '](https://github.com/public-value-guide/public-value-guide/blob/main/spec/index.md)'
  );
  const doc = parse(repointed);
  return { ...doc, letters: doc.headings.filter((heading) => heading.depth === 2) };
}

/**
 * The A–Z glossary and the concept index are not localized upstream — one
 * shared copy, served at unprefixed URLs regardless of which locale a reader
 * arrived from.
 */
export function glossary() {
  return reference(Object.values(glossaryFile)[0]);
}

/** The concept index. */
export function conceptIndex() {
  return reference(Object.values(indexFile)[0]);
}
