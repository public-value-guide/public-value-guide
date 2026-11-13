<script lang="ts">
  import { ArticleLayout } from '@lilydesignsystem/svelte-headless';
  import { SITE_URL } from '#lib/book.js';
  import { ui } from '#lib/i18n.js';
  import { HERO, ENDONYMS } from '#lib/hero.js';

  let { data } = $props();

  const t = $derived(ui(data.locale));
  const hero = $derived(HERO[data.locale] ?? HERO['en-001']);
</script>

<svelte:head>
  <title>{t.siteTitle}</title>
  <meta name="description" content={hero.tagline} />
  <link rel="canonical" href="{SITE_URL}/{data.locale}/" />
</svelte:head>

<ArticleLayout class="page">
  <header class="page-header page-hero">
    <h1>{t.siteTitle}</h1>
    <p class="page-hero-subheadline">{hero.tagline}</p>
    <p class="page-lead">{hero.intro}</p>
    <p class="page-hero-contents"><a href="/{data.locale}/contents/">{t.nav.contents}</a></p>
    <p class="page-hero-translations">
      {hero.translations}{#each Object.entries(ENDONYMS).filter(([c]) => c.endsWith('-001')).sort(([a], [b]) => (a < b ? -1 : 1)) as [code, name], i (code)}{i ? ', ' : ''}<a
          href="/{code}/"
          aria-current={code === data.locale ? 'page' : undefined}>{name}</a
        >{/each}
    </p>
  </header>
</ArticleLayout>
