<script lang="ts">
  // The glossary and the index are the same shape: a long A–Z document whose
  // `##` headings are single letters. Both get a sticky letter jump-bar so a
  // reader can reach "Q" without scrolling past everything before it.
  import {
    ArticleLayout,
    BreadcrumbNav,
    BreadcrumbList,
    BreadcrumbListItem,
    ContentsNav
  } from '@lilydesignsystem/svelte-headless';
  import type { Document, Heading } from '#lib/markdown.js';

  let {
    title,
    lead,
    doc
  }: {
    /** Page title, e.g. "Glossary". */
    title: string;
    /** One-line description for the page header and the meta description. */
    lead: string;
    /** The parsed document, with its `##` letter headings already split out. */
    doc: Document & { letters: Heading[] };
  } = $props();
</script>

<svelte:head>
  <title>{title} — Public Value Guide</title>
  <meta name="description" content={lead} />
</svelte:head>

<ArticleLayout class="page page-reference">
  <BreadcrumbNav label="Breadcrumb" class="page-breadcrumb">
    <BreadcrumbList>
      <BreadcrumbListItem><a href="/">Home</a></BreadcrumbListItem>
      <BreadcrumbListItem current>{title}</BreadcrumbListItem>
    </BreadcrumbList>
  </BreadcrumbNav>

  <header class="page-header">
    <h1>{title}</h1>
    <p class="page-lead">{lead}</p>
  </header>

  {#if doc.letters.length > 1}
    <ContentsNav label="Jump to letter" class="letter-nav">
      {#each doc.letters as letter (letter.id)}
        <a href="#{letter.id}">{letter.text}</a>
      {/each}
    </ContentsNav>
  {/if}

  <div class="prose">
    <!-- Rendered at build time from the book's own markdown; not user input. -->
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html doc.html}
  </div>
</ArticleLayout>
