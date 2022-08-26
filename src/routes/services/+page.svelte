<script lang="ts">
  import { v } from '$lib/variables';
  import { page } from '$app/stores';
  import { MetaTags } from 'svelte-meta-tags';
  import { t } from '$lib/translations';

  import Container from "$lib/components/Container.svelte";

  const links = [
    { href:"/services/waterproofing", text: "Waterproofing, High Pressure Grouting, Epoxy Grouting" },
    { href:"/services/gypsum", text: "Gypsum, Ceiling Works, Partition & Light Steel Frames" },
    { href:"/services/metal", text: "Metal Ceiling Works & Aluminium Facade" },
    { href:"/services/sealants", text: "Sealants: Precast, Aluminium, ACP, Automotive" },
    { href:"/services/epoxy", text: "Epoxy & PU Flooring" },
    { href:"/services/decorative", text: "Decorative & Marine Paints" },
  ]
</script>

<MetaTags
  title={ $t('services.page.title') }
  titleTemplate={ "%s | " + v.webName }
  description={ $t('services.page.description') }
  canonical={ v.webLink + $page.url.pathname }
/>

<Container class="my-2">
  <h1 class="text-3xl mb-6 text-primary">{ $t('services.page.title') }</h1>
  {#each links as item, i}
    <a href={ item.href }>
      <h2 class="text-xl my-4">{ item.text }</h2>
      {#if i != links.length-1}
        <hr />
      {/if}
    </a>
  {/each}
</Container>

<style lang="scss">
  a {
    text-decoration: none;
    h2 {
      color: initial;
      white-space: pre-wrap;
    }
  }
</style>