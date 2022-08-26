<script lang="ts">
  import { v } from '$lib/variables';
  import { page } from '$app/stores';
  import { MetaTags } from 'svelte-meta-tags';
  import { t } from '$lib/translations';

  import Container from "$lib/components/Container.svelte";

  const links = [
    { href: "/projects/ngurah", text: "Bandara Ngurah Rai - Bali" },
    { href: "/projects/waterplace", text: "Water Place - Surabaya" },
    { href: "/projects/satrio", text: "Satrio Tower - Jakarta" },
    { href: "/projects/juanda", text: "Bandara Juanda T2 - Surabaya" },
    { href: "/projects/aston", text: "Aston Inn - Surabaya" },
    { href: "/projects/vihara", text: "Vihara - Surabaya" },
    { href: "/projects/ais", text: "Australian Independent School - Jakarta" },
    { href: "/projects/sheikhzayed", text: "Masjid Sheikh Zayed - Solo" },
  ]
</script>

<MetaTags
  title={ $t('projects.page.title') }
  titleTemplate={ "%s | " + v.webName }
  description={ $t('projects.page.description') }
  canonical={ v.webLink + $page.url.pathname }
/>

<Container class="my-2">
  <h1 class="text-3xl mb-6 text-primary">{ $t('projects.page.title') }</h1>
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