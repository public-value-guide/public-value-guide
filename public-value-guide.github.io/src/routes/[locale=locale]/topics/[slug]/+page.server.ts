import { error } from '@sveltejs/kit';
import { isLocale } from '#lib/book.js';
import { topic, localeTopicEntries } from '#lib/server/book.js';

/**
 * Prerender one page per (locale, topic) pair; adapter-static needs the
 * full list up front. A single `entries()` at this leaf route can return
 * every dynamic param in the path — both `locale` and `slug` — see
 * https://svelte.dev/docs/kit/page-options#entries.
 */
export function entries() {
  return localeTopicEntries();
}

export function load({ params }) {
  if (!isLocale(params.locale)) error(404, `No locale named "${params.locale}"`);
  const found = topic(params.locale, params.slug);
  if (!found) {
    error(404, `No topic named "${params.slug}" in locale "${params.locale}"`);
  }
  return { ...found, locale: params.locale };
}
