import { localeSlugMap } from '#lib/server/book.js';

/**
 * The cross-locale topic slug map, available to every page (including
 * locale-neutral ones) so the header's locale picker can jump to the
 * equivalent topic after a switch. Small — topic numbers and slugs only,
 * no prose — so it is cheap to carry on every page.
 */
export function load() {
  return { localeSlugMap: localeSlugMap() };
}
