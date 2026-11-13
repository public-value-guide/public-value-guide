<script lang="ts">
  import ReferencePage from '#lib/ReferencePage.svelte';

  let { data } = $props();
</script>

<ReferencePage
  title="Index"
  lead="Where to find each concept and framework. Numbers are topic numbers, not pages."
  doc={data.doc}
/>
