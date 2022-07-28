<script lang="ts">
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

<Container class="my-2">
  <h1 class="text-3xl mb-6 text-primary">{ $t('projects.index.page.title') }</h1>
  {#each links as item, i}
    <a sveltekit:prefetch href={ item.href }>
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