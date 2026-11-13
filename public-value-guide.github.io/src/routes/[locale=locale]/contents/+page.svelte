<script lang="ts">
  import {
    ArticleLayout,
    SectionHeading,
    BreadcrumbNav,
    BreadcrumbList,
    BreadcrumbListItem
  } from '@lilydesignsystem/svelte-headless';
  import { LOCALES, partsFor, SITE_URL } from '#lib/book.js';
  import { ui } from '#lib/i18n.js';

  let { data } = $props();

  const t = $derived(ui(data.locale));
  const localeLabel = $derived(
    LOCALES.find((candidate) => candidate.slug === data.locale)?.label ?? data.locale
  );
  const frontMatter = $derived(data.toc.filter((topic) => topic.part === 0));
  const parts = $derived(
    partsFor(data.locale).map((part) => ({
      ...part,
      topics: data.toc.filter((topic) => topic.part === part.number)
    }))
  );
</script>

<svelte:head>
  <title>{t.contents.pageTitle} — {t.siteTitle}</title>
  <meta name="description" content={t.contents.lead} />
  <link rel="canonical" href="{SITE_URL}/{data.locale}/contents/" />
</svelte:head>

<ArticleLayout class="page">
  <BreadcrumbNav label="Breadcrumb" class="page-breadcrumb">
    <BreadcrumbList>
      <BreadcrumbListItem><a href="/">{t.breadcrumb.home}</a></BreadcrumbListItem>
      <BreadcrumbListItem current>{t.contents.pageTitle}</BreadcrumbListItem>
    </BreadcrumbList>
  </BreadcrumbNav>

  <header class="page-header">
    <h1>{t.contents.pageTitle}</h1>
    <p class="page-lead">{t.contents.lead}</p>
    <p class="page-eyebrow">{t.contents.readingIn(localeLabel)}</p>
  </header>

  {#if frontMatter.length}
    <section class="page-section">
      <SectionHeading heading={t.contents.frontMatter} />
      <ul class="contents-list">
        {#each frontMatter as topic (topic.slug)}
          <li><a href="/{data.locale}/topics/{topic.slug}/">{topic.title}</a></li>
        {/each}
      </ul>
    </section>
  {/if}

  <section class="page-section">
    <ul class="contents-list contents-parts">
      {#each parts as part (part.number)}
        <li>
          <p class="contents-part-heading">{t.contents.part(part.number)} {part.title}</p>
          <p class="contents-part-tagline">{part.tagline}</p>
          <ul class="contents-list">
            {#each part.topics as topic (topic.slug)}
              <li>
                <a href="/{data.locale}/topics/{topic.slug}/">
                  {topic.number} {topic.title}
                </a>
              </li>
            {/each}
          </ul>
        </li>
      {/each}
    </ul>
  </section>

  <section class="page-section">
    <SectionHeading heading={t.contents.reference} />
    <ul class="contents-list">
      <li><a href="/glossary/">{t.nav.glossary}</a></li>
      <li><a href="/index/">{t.nav.index}</a></li>
    </ul>
  </section>
</ArticleLayout>
