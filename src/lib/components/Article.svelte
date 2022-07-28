<script lang="ts">
  import { share } from '$lib/share';

  import Container from "$lib/components/Container.svelte";
  import Breadcrumb from "$lib/components/Breadcrumb.svelte";

  export let
    title: string,
    subtitle: string | null = null
</script>

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