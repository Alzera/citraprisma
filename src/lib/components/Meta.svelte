<script lang="ts">
  import { v } from '$lib/variables';
  import { page } from '$app/stores';

  export let
    title: string
</script>

<svelte:head>
  <title>{ `${title} | ${v.webName}`}</title>
  <link href={ v.webLink + $page.url.pathname } rel="canonical">
</svelte:head>