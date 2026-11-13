import { conceptIndex } from '#lib/server/book.js';

export function load() {
  return { doc: conceptIndex() };
}
