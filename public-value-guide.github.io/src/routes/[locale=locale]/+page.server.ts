import { error } from '@sveltejs/kit';
import { isLocale, LOCALE_SLUGS } from '#lib/book.js';
import { toc } from '#lib/server/book.js';
import { TILE_TOPICS } from '#lib/tiles.js';

/** One landing page per locale: the hero, with links on to the contents page. */
export function entries() {
  return LOCALE_SLUGS.map((locale) => ({ locale }));
}

export function load({ params }) {
  if (!isLocale(params.locale)) error(404, `No locale named "${params.locale}"`);
  const topics = toc(params.locale);
  const tileSlugs = TILE_TOPICS.map((n) => topics.find((t) => t.number === n)?.slug ?? '');
  return { locale: params.locale, tileSlugs };
}
