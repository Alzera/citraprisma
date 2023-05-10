<script lang="ts">
  import { t } from '$lib/translations';
  const tp = 'products.grace.deneef.'
  import { mq } from '$lib/mediaquery';

  import Article from '$lib/components/Article.svelte';
  import CloudinaryImage from '$lib/components/CloudinaryImage.svelte';
</script>

<CloudinaryImage src="products/grace/deneef/img700.jpg" alt="Banner" 
  widths="600px md:1024px" 
  crop="fill" 
  lazy={ false }
  preload={ true }
  height={ 400 }
  style={ $mq.mobile ? 'height:250px' : 'height:400px' }
  class="w-vw-center object-cover h-52 md:h-88" />
<Article title={ $t(tp + 'page.title') } subtitle={ $t(tp + 'page.subtitle') }>
  <h3 class="text-2xl text-primary mb-1">{ $t(tp + 'product1.title') }</h3>
  <p class="mb-2">{ $t(tp + 'product1.content') }</p>
  <h3 class="text-xl text-primary mb-1">{ $t(tp + 'benefits') }</h3>
  <ul>
    {#each Array(9) as _, li}
      <li>{ $t(tp + `product1.benefits.${li}`) }</li>
    {/each}
  </ul>
  <hr class="my-3">

  <h3 class="text-2xl text-primary mb-1">{ $t(tp + 'product2.title') }</h3>
  <p class="mb-2">{ $t(tp + 'product2.content') }</p>
  <h3 class="text-xl text-primary mb-1">{ $t(tp + 'benefits') }</h3>
  <ul>
    {#each Array(8) as _, li}
      <li>{ $t(tp + `product2.benefits.${li}`) }</li>
    {/each}
  </ul>
  <hr class="my-3">
  
  <br />
  <br />
  <p>
    <a href="/pdfs/De Neef Leaks Stop Here (AP).pdf" download target="_blank" rel="noopener noreferrer external" class="visible">
      <CloudinaryImage src="icon_download_catalog.jpg" alt="Download Catalog" widths="200px" />
    </a>
  </p>
</Article>