<script lang="ts">
  import { t } from '$lib/translations';
  const tp = 'products.yoshino.'

  import Row from "$lib/components/Row.svelte";
  import Column from "$lib/components/Column.svelte";
  import Article from '$lib/components/Article.svelte';
  import CloudinaryImage from '$lib/components/CloudinaryImage.svelte';

  const sections = [
    "board_reguler.jpg",
    "board_super_ringan.jpg",
    "board_moisture_resistance.jpg",
    "board_fire_resistance.jpg",
    "board_fire_resistance_z.jpg",
  ]
</script>

<Article title={ $t(tp + 'page.title') }>
  <p class="mb-3">{ $t(tp + 'content1') }</p>
  <p class="mb-3">{ $t(tp + 'content2') }</p>
  <br/>
  {#each sections as item, index}
    {@const i = index + 1}
    <Row>
      <Column cols={ 12 } md={ 8 } class="order-2 md:order-1">
        <h2 class="text-2xl">{ $t(tp + `section${i}.title`) }</h2>
        <h3 class="text-lg">{ $t(tp + `section${i}.content`) }</h3>
      </Column>
      <Column cols={ 12 } md={ 4 } class="order-1 md:order-2">
        <CloudinaryImage class="ml-auto mr-auto md:mr-0" crop="fill" src={ `products/yoshino/${item}` } alt={ `yoshino ${i}` } widths="300px md:270px" />
      </Column>
    </Row>
    <hr class="my-3">
  {/each}
  <br />
  <br />
  <p>
    <a href="/pdfs/Yoshino.pdf" download target="_blank" rel="noopener noreferrer external">
      <CloudinaryImage src="icon_download_catalog.jpg" alt="Download Catalog" widths="200px" />
    </a>
  </p>
</Article>