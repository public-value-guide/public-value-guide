<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { DEFAULT_LOCALE, isLocale, localeForLanguageTag } from '#lib/book.js';

  /** Where the header locale picker remembers a reader's own choice. */
  const LOCALE_STORAGE_KEY = 'public-value-guide-locale';

  const fallback = `/${DEFAULT_LOCALE}/`;

  /**
   * The locale this reader should land in: a language they chose with the
   * picker before wins; otherwise the first of the browser's preferred
   * languages (`navigator.languages`, whose first entry is
   * `navigator.language`) that the book has a locale for; otherwise the
   * default locale.
   */
  function preferredLocale(): string {
    try {
      const saved = localStorage.getItem(LOCALE_STORAGE_KEY);
      if (saved && isLocale(saved)) return saved;
    } catch {
      // Storage can be blocked; fall through to the browser language.
    }
    const tags = navigator.languages?.length ? navigator.languages : [navigator.language];
    for (const tag of tags) {
      const locale = tag ? localeForLanguageTag(tag) : undefined;
      if (locale) return locale;
    }
    return DEFAULT_LOCALE;
  }

  // `/` has no content of its own: send the reader to their locale. A query
  // (`/?<target>`) is a site search handled by SearchGate in the layout, so it
  // must not be redirected away.
  onMount(() => {
    if (!location.search) goto(`/${preferredLocale()}/`, { replaceState: true });
  });
</script>

<svelte:head>
  <title>Public Value Guide</title>
  <noscript><meta http-equiv="refresh" content="0;url={fallback}" /></noscript>
</svelte:head>

<p><a href={fallback}>Continue to the Public Value Guide</a></p>
