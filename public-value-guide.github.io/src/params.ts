import { defineParams } from '@sveltejs/kit/params';
import { isLocale } from './lib/book.ts';

/** Only known locale slugs match `[locale=locale]`, so `/glossary/` etc. never collide. */
export const params = defineParams({
  locale: (param: string) => (isLocale(param) ? param : undefined)
});
