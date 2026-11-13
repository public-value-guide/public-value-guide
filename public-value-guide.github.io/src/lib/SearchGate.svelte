<script lang="ts">
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import { targetFromSearch, search, type IndexEntry, type SearchResult } from '#lib/search.js';
	import { DEFAULT_LOCALE } from '#lib/book.js';
	import type { UiStrings } from '#lib/i18n.js';
	import type { Snippet } from 'svelte';

	/** `locale` picks the search index and `strings` the wording; both follow the reader's locale. */
	let {
		children,
		locale,
		strings
	}: { children?: Snippet; locale: string; strings: UiStrings['results'] } = $props();

	let target = $state('');
	let input = $state('');
	let results = $state<SearchResult[] | null>(null);
	let failed = $state(false);
	const indexes = new Map<string, Promise<IndexEntry[]>>();

	const onHome = $derived(page.url.pathname === '/');

	/** One index per locale, fetched once; a locale with no index falls back to the default locale's. */
	function indexFor(code: string): Promise<IndexEntry[]> {
		let loading = indexes.get(code);
		if (!loading) {
			loading = fetch(`/search-index/${code}.json`)
				.then((r) => {
					if (!r.ok) throw new Error(String(r.status));
					return r.json() as Promise<IndexEntry[]>;
				})
				.catch((error) => {
					indexes.delete(code);
					if (code === DEFAULT_LOCALE) throw error;
					return indexFor(DEFAULT_LOCALE);
				});
			indexes.set(code, loading);
		}
		return loading;
	}

	// Client-only: the home page is prerendered, so the query is read here.
	$effect(() => {
		target = onHome ? targetFromSearch(page.url.search) : '';
		input = target;
	});

	$effect(() => {
		const q = target;
		const code = locale;
		if (!q) {
			results = null;
			return;
		}
		failed = false;
		indexFor(code).then(
			(index) => {
				if (q === target && code === locale) results = search(index, q);
			},
			() => {
				failed = true;
			}
		);
	});

	function submit(event: SubmitEvent) {
		event.preventDefault();
		const q = input.trim();
		goto(q ? `/?${encodeURIComponent(q).replace(/%20/g, '+')}` : '/');
	}
</script>

{#if onHome}
	<form class="site-search" role="search" onsubmit={submit}>
		<label for="site-search-input">{strings.button}</label>
		<input id="site-search-input" type="search" bind:value={input} autocomplete="off" />
		<button type="submit">{strings.button}</button>
	</form>
{/if}

{#if target}
	<section class="site-search-results" aria-live="polite" aria-label={strings.label}>
		<h1>{strings.heading(target)}</h1>
		{#if failed}
			<p>{strings.failed}</p>
		{:else if results === null}
			<p>{strings.searching}</p>
		{:else if results.length === 0}
			<p>{strings.none(target)} <a href={`/${locale}/contents/`}>{strings.browse}</a></p>
		{:else}
			<p>{strings.count(results.length, results.length === 50)}</p>
			<ol>
				{#each results as r (r.url)}
					<li>
						<a href={r.url}>{r.title}</a>
						<div class="site-search-url">{r.url}</div>
						<p>{@html r.snippet}</p>
					</li>
				{/each}
			</ol>
		{/if}
	</section>
{:else}
	{@render children?.()}
{/if}
