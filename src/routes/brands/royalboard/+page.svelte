<script lang="ts">
  import { t } from '$lib/translations';
  const tp = 'brands.royalboard.'

  import Row from "$lib/components/Row.svelte";
  import Column from "$lib/components/Column.svelte";
  import Article from '$lib/components/Article.svelte';
  import CloudinaryImage from '$lib/components/CloudinaryImage.svelte';
</script>

<Article title={ $t(tp + 'page.title') } subtitle={ $t(tp + 'page.description') }>
  <p class="text-base mb-3">{ $t(tp + 'content1') }</p>
  <p class="text-base mb-3">{ $t(tp + 'content2') }</p>
  <hr class="my-3">
  <h1 class="text-3xl text-primary mb-1">RB Classic</h1>
  <Row>
    <Column cols={ 12 } md={ 8 } class="order-2 md:order-1">
      <p class="text-base">{ $t(tp + 'classic1') }</p>
      <p class="text-base">{ $t(tp + 'classic2') }</p>
      <p class="text-base">{ $t(tp + 'classic3') }</p>
    </Column>
    <Column cols={ 12 } md={ 4 } class="order-1 md:order-2">
      <CloudinaryImage class="ml-auto mr-auto md:mr-0" crop="fill" src="brands/royalboard/ClassicRB" alt="RB Classic" widths="300px md:270px" />
    </Column>
  </Row>
  <hr class="my-3">

  <h1 class="text-3xl text-primary mb-1">RB Fascia</h1>
  <Row>
    <Column cols={ 12 } md={ 8 } class="order-2 md:order-1">
      <p class="text-base">{ $t(tp + 'fascia') }</p>
    </Column>
    <Column cols={ 12 } md={ 4 } class="order-1 md:order-2">
      <CloudinaryImage class="ml-auto mr-auto md:mr-0" crop="fill" src="brands/royalboard/rb" alt="RB Fascia" widths="300px md:270px" />
    </Column>
  </Row>
  <br />
  <br />
  <p class="text-base">
    <a href="/pdfs/Royal Board.pdf" download target="_blank" rel="noopener noreferrer external" class="visible">Download Catalog</a>
  </p>
</Article>