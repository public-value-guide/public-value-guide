<script lang="ts">
  import SearchGate from '#lib/SearchGate.svelte';
  import { page } from '$app/state';
  import { goto } from '$app/navigation';
  import {
    SkipLink,
    GrailLayout,
    GrailLayoutTopHeader,
    GrailLayoutCenterMain,
    GrailLayoutBottomFooter
  } from '@lilydesignsystem/svelte-headless';
  import PickerBar, { DEFAULT_THEMES } from '@lilydesignsystem/svelte-picker-bar';
  import { SOURCE_REPO, SKILLS_REPO, LOCALES, LOCALE_SLUGS, DEFAULT_LOCALE } from '#lib/book.js';
  import { ui } from '#lib/i18n.js';

  /**
   * `DEFAULT_THEMES`, minus the institution-specific themes (NHS
   * England/Scotland/Wales, UK GOV.UK GDS, US USWDS) that
   * `scripts/sync-themes.sh` excludes when it copies
   * `@lilydesignsystem/themes` into `static/assets/themes/` — this book is
   * not any of those institutions. Every excluded slug starts with
   * `united-kingdom-` or `united-states-`, matching that script's own
   * prefix filter, so the two stay in sync without a duplicated name list.
   * Without this, the picker would offer a theme with no stylesheet behind
   * it to load.
   */
  const GENERIC_THEMES = DEFAULT_THEMES.filter(
    (slug) => !slug.startsWith('united-kingdom-') && !slug.startsWith('united-states-')
  );

  let { children } = $props();

  const LOCALE_LABELS: Record<string, string> = Object.fromEntries(
    LOCALES.map((locale) => [locale.slug, locale.label])
  );

  // The locale of the page currently showing, when there is one — set on
  // every `/<slug>/...` route, absent on locale-neutral pages
  // (home, glossary, index). The header chrome (nav, picker, footer) reads
  // this locale's own strings; locale-neutral pages fall back to English,
  // `ui()`'s default when passed `undefined`.
    const currentLocale = $derived(page.params.locale);
  // On locale-neutral pages (home, glossary, index) the URL names no locale, so
  // the picker shows the reader's saved or detected one. The chrome must follow
  // that same locale, or the picker would say German over English navigation.
  // The picker reports it through `onChange`, which fires on mount as well as on
  // a real choice. Locale pages ignore it: the URL always wins there.
  let pickerLocale = $state<string | undefined>();
  const chromeLocale = $derived(currentLocale ?? pickerLocale);
  const t = $derived(ui(chromeLocale));

  /**
   * Where switching to `newLocale` should go from the page showing now.
   *
   * A topic page jumps to the *same topic* in the new locale via the
   * cross-locale slug map (most topics share a slug across locales, but a
   * Welsh topic directory does not). Anywhere else lands on the new
   * locale's contents page, since locale-neutral pages (home, glossary,
   * index) have no per-locale equivalent to jump to.
   */
  function targetPathForLocale(newLocale: string): string {
    const topicMatch = page.url.pathname.match(/^\/[^/]+\/topics\/([^/]+)\/?$/);
    if (topicMatch && page.data?.ref) {
      const key: string = page.data.ref.number || `front:${page.data.ref.slug}`;
      const mapped = page.data.localeSlugMap?.[key]?.[newLocale];
      if (mapped) return `/${newLocale}/topics/${mapped}/`;
    }
    return `/${newLocale}/contents/`;
  }

  /**
   * The locale picker fires `onChange` once on mount (to apply the initial
   * `lang`/`dir`) as well as on a genuine user selection — the two are
   * indistinguishable from here, see the Lily locale-picker source. Treat the
   * very first call as that mount-time initialisation, never navigation; only
   * calls after that come from the reader actually choosing a language.
   */
  let readyToNavigate = false;

  function handleLocaleChange(newLocale: string): void {
    pickerLocale = newLocale;
    if (!readyToNavigate) {
      readyToNavigate = true;
      return;
    }
    // Already showing this locale, so there is nowhere to go.
    if (newLocale === currentLocale) return;
    const target = targetPathForLocale(newLocale);
    if (target !== page.url.pathname) goto(target);
  }

  // "Contents" follows whichever locale is currently showing, falling back
  // to the house-style default on locale-neutral pages.
  const siteLinks = $derived([
    { href: `/${currentLocale ?? pickerLocale ?? DEFAULT_LOCALE}/contents/`, label: t.nav.contents },
    { href: '/glossary/', label: t.nav.glossary },
    { href: '/index/', label: t.nav.index }
  ]);

  // Read at share time (inside each href, not as a static prop), so it
  // reflects whatever page is showing even after a client-side
  // navigation the layout itself doesn't re-run for.
  function pageTitle(): string {
    return typeof document !== 'undefined' ? document.title : '';
  }

  const shareTargets = $derived([
    {
      id: 'email',
      label: t.share.emailLink,
      href: (url: string) =>
        `mailto:?subject=${encodeURIComponent(pageTitle())}&body=${encodeURIComponent(url)}`,
      newTab: false
    },
    {
      id: 'linkedin',
      label: t.share.shareOnLinkedIn,
      href: (url: string) =>
        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    },
    {
      id: 'reddit',
      label: t.share.shareOnReddit,
      href: (url: string) =>
        `https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(pageTitle())}`
    },
    {
      id: 'bluesky',
      label: t.share.shareOnBluesky,
      href: (url: string) =>
        `https://bsky.app/intent/compose?text=${encodeURIComponent(`${pageTitle()} ${url}`)}`
    },
    {
      id: 'mastodon',
      label: t.share.shareOnMastodon,
      href: (url: string) =>
        `https://mastodonshare.com/?text=${encodeURIComponent(pageTitle())}&url=${encodeURIComponent(url)}`
    }
  ]);

  /**
   * The link picker's list: the site's own pages (navigated in-app) and the
   * project's places elsewhere (new tab). Labels are in the reader's locale;
   * GitHub, Codeberg, GitLab and Lily are names, not words.
   */
  const projectLinks = $derived([
    {
      label: t.nav.contents,
      href: `/${currentLocale ?? pickerLocale ?? DEFAULT_LOCALE}/contents/`,
      current: page.url.pathname.endsWith('/contents/')
    },
    { label: t.nav.glossary, href: '/glossary/', current: page.url.pathname === '/glossary/' },
    { label: t.nav.index, href: '/index/', current: page.url.pathname === '/index/' },
    { label: t.links.llms, href: '/llms.txt', newTab: true },
    { label: `${t.nav.source} — GitHub`, href: SOURCE_REPO, newTab: true },
    { label: `${t.nav.source} — Codeberg`, href: 'https://codeberg.org/public-value-guide/public-value-guide', newTab: true },
    { label: `${t.nav.source} — GitLab`, href: 'https://gitlab.com/public-value-guide/public-value-guide', newTab: true },
    { label: t.links.skills, href: SKILLS_REPO, newTab: true },
    { label: t.links.issues, href: `${SOURCE_REPO}/issues`, newTab: true },
    { label: 'Lily Design System', href: 'https://github.com/LilyDesignSystem', newTab: true }
  ]);

  /** Keep the header search in-app: `/?query` is the site's own search route. */
  function searchNavigate(href: string) {
    goto(href);
  }
</script>

<SkipLink href="#main" label={t.skipToContent} />

<GrailLayout class="site">
  <GrailLayoutTopHeader class="site-header">
    <a class="site-brand" href="/">
      <span class="site-brand-icon" aria-hidden="true">⚖</span>
      <span class="site-brand-title">{t.siteTitle}</span>
    </a>

    <nav class="site-nav" aria-label="Site">
      {#each siteLinks as link (link.href)}
        <a href={link.href} aria-current={page.url.pathname === link.href ? 'page' : undefined}>
          {link.label}
        </a>
      {/each}
      <a href={SOURCE_REPO} rel="noopener">{t.nav.source}</a>
    </nav>

    <PickerBar
      class="site-controls"
      labels={{
        theme: t.picker.theme,
        locale: t.picker.locale,
        textSize: t.picker.textSize,
        share: t.picker.share,
        link: t.links.label,
        search: t.picker.search,
        searchInput: t.picker.searchInput,
        searchSubmit: t.picker.searchSubmit
      }}
      links={projectLinks}
      linkProps={{ navigate: searchNavigate }}
      searchProps={{ navigate: searchNavigate }}
      themesUrl="/assets/themes/"
      themes={GENERIC_THEMES}
      themeProps={{
        defaultValue: 'light',
        detectFromSystem: true,
        storageKey: 'public-value-guide-theme'
      }}
      locales={LOCALE_SLUGS}
      localeProps={{
        value: currentLocale,
        defaultValue: DEFAULT_LOCALE,
        storageKey: 'public-value-guide-locale',
        localeLabels: LOCALE_LABELS,
        onChange: handleLocaleChange
      }}
      textSizeProps={{ storageKey: 'public-value-guide-text-size' }}
      shareTargets={shareTargets}
      shareProps={{
        copyLabel: t.share.copyLink,
        copiedLabel: t.share.copied,
        copyFailedLabel: t.share.copyFailed
      }}
    />
  </GrailLayoutTopHeader>

  <GrailLayoutCenterMain class="site-main" id="main">
    <SearchGate {children} locale={chromeLocale ?? DEFAULT_LOCALE} strings={t.results} />
  </GrailLayoutCenterMain>

  <GrailLayoutBottomFooter class="site-footer">
    <p>
      <strong>{t.siteTitle}</strong> — {t.footer.tagline}
    </p>
    <p>
      {t.footer.sourceAndContributions} <a href={SOURCE_REPO} rel="noopener"
        >github.com/public-value-guide</a
      >. {t.footer.builtWith}
      <a href="https://github.com/LilyDesignSystem" rel="noopener">Lily Design System™</a>.
    </p>
    <p>
      {t.footer.ledBy}
      <a href="https://linkedin.com/in/joelparkerhenderson" rel="noopener">Joel Parker Henderson</a>.
    </p>
  </GrailLayoutBottomFooter>
</GrailLayout>
