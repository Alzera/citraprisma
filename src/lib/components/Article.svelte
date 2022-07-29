<script lang="ts">
  import { v } from '$lib/variables';
  import { page } from '$app/stores';
  import { MetaTags } from 'svelte-meta-tags';
  import { share } from '$lib/share';

  import Container from "$lib/components/Container.svelte";
  import Breadcrumb from "$lib/components/Breadcrumb.svelte";

  export let
    title: string,
    desc: string,
    subtitle: string | null = null
</script>

<MetaTags
  title={ title }
  titleTemplate={ "%s | " + v.webName }
  description={ desc }
  canonical={ v.webLink + $page.url.pathname }
/>

<Container class="my-2">
  <div class="flex mb-4 align-center">
    <Breadcrumb />
    <div class="flex-auto"></div>
    <div on:click={ () => share('') } class="i-mdi-share-variant text-xl" />
  </div>
  <h1 class="text-4xl text-primary">{ title }</h1>
  {#if subtitle}
    <h2 class="text-xl mb-5">{ subtitle }</h2>
  {/if}
  <slot />
</Container>