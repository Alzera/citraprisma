<script lang="ts">
  import { v } from '$lib/variables';
  import { page } from '$app/stores';

  export let
    title: string,
    desc: string
</script>

<svelte:head>
  <title>{ `${title} | ${v.webName}`}</title>
  <meta content={ desc } name="description">
  <link href={ v.webLink + $page.url.pathname } rel="canonical">
</svelte:head>