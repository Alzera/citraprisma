<script lang="ts">
  import { t } from '$lib/translations';
  const tp = 'products.conwood.'

  import Row from "$lib/components/Row.svelte";
  import Column from "$lib/components/Column.svelte";
  import Article from '$lib/components/Article.svelte';
  import CloudinaryImage from '$lib/components/CloudinaryImage.svelte';
</script>

<Article title={ $t(tp + 'page.title') }>
  <p class="mb-3">{ $t(tp + 'content') }</p>
  <br/>
  {#each [3, 7, 3, 3] as sectionCount, index}
    {@const sectioni = index + 1}
    <h1 class="text-3xl text-primary mb-1">{ $t(tp + `section${sectioni}.title`) }</h1>
    {#each Array(sectionCount) as _, index2}
      {@const i = index2 + 1 }
      <Row>
        <Column cols={ 12 } md={ 8 } class="order-2 md:order-1">
          <h2 class="text-2xl">{ $t(tp + `section${sectioni}.subsection${i}.title`) }</h2>
          <h3 class="text-lg">{ $t(tp + `section${sectioni}.subsection${i}.content`) }</h3>
          <CloudinaryImage src={ `products/conwood/plank-${sectioni}-${i}.jpg` } alt={ `conwood-plank-${sectioni}-${i}.jpg` } height={ 200 } widths="200px" />
        </Column>
        <Column cols={ 12 } md={ 4 } class="order-1 md:order-2">
          <CloudinaryImage class="ml-auto mr-auto md:mr-0" crop="fill" src={ `products/conwood/sample-${sectioni}-${i}.jpg`} alt={ `conwood-sample-${sectioni}-${i}.jpg` } widths="300px md:270px" />
        </Column>
      </Row>
      <hr class="my-3">
    {/each}
  {/each}
  <br />
  <br />
  <p>
    <a href="/pdfs/Conwood.pdf" download target="_blank" rel="noopener noreferrer external">
      <CloudinaryImage src="icon_download_catalog.jpg" alt="Download Catalog" widths="200px" />
    </a>
  </p>
</Article>