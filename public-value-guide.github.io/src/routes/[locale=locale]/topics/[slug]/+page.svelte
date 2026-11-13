<script lang="ts">
  import {
    ArticleLayout,
    BreadcrumbNav,
    BreadcrumbList,
    BreadcrumbListItem,
    PaginationNav,
    PaginationList,
    PaginationListItem,
    ContentsNav,
    ContentsLink
  } from '@lilydesignsystem/svelte-headless';
  import { partsFor, SITE_URL } from '#lib/book.js';
  import { ui } from '#lib/i18n.js';

  let { data } = $props();

  const t = $derived(ui(data.locale));
  const part = $derived(partsFor(data.locale).find((candidate) => candidate.number === data.ref.part));

  /** `Topic 1.1 — Introduction to Public Value`, or just the title for front matter. */
  const fullTitle = $derived(
    data.ref.number ? `${t.topic.topicEyebrow(data.ref.number)} — ${data.ref.title}` : data.ref.title
  );

  /** Only top-level sections go in the on-page contents; `###` would crowd it. */
  const sections = $derived(data.doc.headings.filter((heading) => heading.depth === 2));

  const label = (ref: { number: string; title: string }) =>
    ref.number ? `${ref.number} ${ref.title}` : ref.title;
</script>

<svelte:head>
  <title>{fullTitle} — {t.siteTitle}</title>
  <meta name="description" content={data.doc.lead || data.ref.title} />
  <link
    rel="canonical"
    href="{SITE_URL}/{data.locale}/topics/{data.ref.slug}/"
  />
</svelte:head>

<ArticleLayout class="page page-topic">
  <BreadcrumbNav label="Breadcrumb" class="page-breadcrumb">
    <BreadcrumbList>
      <BreadcrumbListItem><a href="/">{t.breadcrumb.home}</a></BreadcrumbListItem>
      <BreadcrumbListItem
        ><a href="/{data.locale}/contents/">{t.breadcrumb.contents}</a></BreadcrumbListItem
      >
      {#if part}
        <BreadcrumbListItem>{t.contents.part(part.number)} — {part.title}</BreadcrumbListItem>
      {/if}
      <BreadcrumbListItem current>
        {data.ref.number ? t.topic.topicEyebrow(data.ref.number) : data.ref.title}
      </BreadcrumbListItem>
    </BreadcrumbList>
  </BreadcrumbNav>

  <header class="page-header">
    {#if data.ref.number}
      <p class="page-eyebrow">{t.topic.topicEyebrow(data.ref.number)}</p>
    {/if}
    <h1>{data.ref.title}</h1>
    {#if data.doc.lead}
      <p class="page-lead">{data.doc.lead}</p>
    {/if}
  </header>

  {#if sections.length > 1}
    <ContentsNav label={t.topic.onThisPage} class="page-toc">
      <h2 class="page-toc-heading">{t.topic.onThisPage}</h2>
      {#each sections as section (section.id)}
        <ContentsLink class="page-toc-item">
          <a href="#{section.id}">{section.text}</a>
        </ContentsLink>
      {/each}
    </ContentsNav>
  {/if}

  <div class="prose">
    <!-- Rendered at build time from the book's own markdown; not user input. -->
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html data.doc.html}
  </div>

  <PaginationNav label={t.topic.paginationLabel} class="page-pagination">
    <PaginationList>
      <PaginationListItem class="page-pagination-previous">
        {#if data.previous}
          <a href="/{data.locale}/topics/{data.previous.slug}/" rel="prev">
            <span class="page-pagination-direction">{t.topic.previous}</span>
            <span class="page-pagination-label">{label(data.previous)}</span>
          </a>
        {/if}
      </PaginationListItem>
      <PaginationListItem class="page-pagination-next">
        {#if data.next}
          <a href="/{data.locale}/topics/{data.next.slug}/" rel="next">
            <span class="page-pagination-direction">{t.topic.next}</span>
            <span class="page-pagination-label">{label(data.next)}</span>
          </a>
        {/if}
      </PaginationListItem>
    </PaginationList>
  </PaginationNav>
</ArticleLayout>
