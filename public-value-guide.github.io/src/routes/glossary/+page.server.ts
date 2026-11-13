import { glossary } from '#lib/server/book.js';

export function load() {
  return { doc: glossary() };
}
