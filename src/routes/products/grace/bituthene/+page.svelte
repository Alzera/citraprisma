<script lang="ts">
  import { t } from '$lib/translations';
  const tp = 'products.grace.bituthene.'
  import { mq } from '$lib/mediaquery';

  import Article from '$lib/components/Article.svelte';
  import CloudinaryImage from '$lib/components/CloudinaryImage.svelte';
</script>

<CloudinaryImage src="products/grace/bituthene/img18.jpg" alt="Banner" 
  widths="600px md:1024px" 
  crop="fill" 
  lazy={ false }
  preload={ true }
  height={ 400 }
  style={ $mq.mobile ? 'height:250px' : 'height:400px' }
  class="w-vw-center object-cover h-52 md:h-88" />
<Article title={ $t(tp + 'page.title') }>
  <br/>
  <h2 class="text-3xl text-primary mb-1">{ $t(tp + 'title') }</h2>
  <h2 class="text-xl text-primary mb-1">{ $t(tp + 'subtitle') }</h2>
  <p>{ $t(tp + 'content1') }</p>
  <p class="mb-3">{ $t(tp + 'content2') }</p>

  <h3 class="text-xl text-primary mb-1">{ $t(tp + 'benefits.title') }</h3>
  <table class="default-table mb-3">
    {#each Array(8) as _, li}
      <tr>
        <th>{ $t(tp + 'benefits.titles.' + li) }</th>
        <td>{ $t(tp + 'benefits.contents.' + li) }</td>
      </tr>
    {/each}
  </table>

  <h3 class="text-xl text-primary mb-1">{ $t(tp + 'products.title') }</h3>
  <p>{ $t(tp + 'products.content') }</p>
  <table class="default-table">
    {#each Array(8) as _, li}
      <tr>
        <th>{ $t(tp + 'products.products.' + li) }</th>
        <td>{ $t(tp + 'products.description.' + li) }</td>
        <td>{ $t(tp + 'products.application.' + li) }</td>
      </tr>
    {/each}
  </table>
  <hr class="my-3">
  
  <br />
  <br />
  <p>
    <a href="/pdfs/GCP Bituthene Brochure_2016.pdf" download target="_blank" rel="noopener noreferrer external" class="visible">
      <CloudinaryImage src="icon_download_catalog.jpg" alt="Download Catalog" widths="200px" />
    </a>
  </p>
</Article>