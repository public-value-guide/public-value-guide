import { error } from '@sveltejs/kit';
import { isLocale, LOCALE_SLUGS } from '#lib/book.js';
import { toc } from '#lib/server/book.js';

/** One contents page per locale — topic titles and slugs both vary by locale. */
export function entries() {
  return LOCALE_SLUGS.map((locale) => ({ locale }));
}

export function load({ params }) {
  if (!isLocale(params.locale)) error(404, `No locale named "${params.locale}"`);
  return { locale: params.locale, toc: toc(params.locale) };
}
