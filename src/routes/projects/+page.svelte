<script lang="ts">
  import { t } from '$lib/translations';

  import Row from "$lib/components/Row.svelte";
  import Column from "$lib/components/Column.svelte";
  import Container from "$lib/components/Container.svelte";
  import CloudinaryImage from '$lib/components/CloudinaryImage.svelte';
  import Meta from '$lib/components/Meta.svelte';

  const links = [
    { href: "/projects/ngurah", text: "Bandara Ngurah Rai - Bali", image: "projects/ngurah/preview.jpg" },
    { href: "/projects/waterplace", text: "Water Place - Surabaya", image: "projects/waterplace/preview.jpg" },
    { href: "/projects/satrio", text: "Satrio Tower - Jakarta", image: "projects/satrio/preview.jpg" },
    { href: "/projects/juanda", text: "Bandara Juanda T2 - Surabaya", image: "projects/juanda/preview.jpg" },
    { href: "/projects/aston", text: "Aston Inn - Surabaya", image: "projects/aston/Aston_5.png" },
    { href: "/projects/vihara", text: "Vihara - Surabaya", image: "projects/vihara/Referensi_Project_Vihara_2.jpg" },
    { href: "/projects/ais", text: "Australian Independent School - Jakarta", image: "projects/ais/preview.png" },
    { href: "/projects/sheikhzayed", text: "Masjid Sheikh Zayed - Solo", image: "projects/sheikhzayed/3.jpeg" },
  ]
</script>

<Meta title={ $t('projects.page.title') } />

<Container class="my-2">
  <h1 class="text-3xl mb-6 text-primary">{ $t('projects.page.title') }</h1>
  <Row class="projects">
    {#each links as item}
      <Column cols={ 12 } md={ 4 }>
        <a href={item.href == '#' ? '#' : item.href}>
          <CloudinaryImage src={ item.image } alt={ item.text } widths="90vw md:300px" />
          <span class="!text-2xl md:!text-base">{ item.text }</span>
        </a>
      </Column>
    {/each}
  </Row>
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