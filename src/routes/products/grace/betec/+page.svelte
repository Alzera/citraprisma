<script lang="ts">
  import { t } from '$lib/translations';
  const tp = 'products.grace.betec.'
  import { mq } from '$lib/mediaquery';

  import Article from '$lib/components/Article.svelte';
  import CloudinaryImage from '$lib/components/CloudinaryImage.svelte';
</script>

<CloudinaryImage src="products/grace/betec/img22.jpg" alt="Banner" 
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
  <p class="mb-3">{ $t(tp + 'content') }</p>

  <h3 class="text-xl text-primary mb-1">{ $t(tp + 'benefits.title') }</h3>
  <table class="default-table">
    {#each Array(7) as _, li}
      <tr>
        <th>{ $t(tp + 'benefits.titles.' + li) }</th>
        <td>{ $t(tp + 'benefits.contents.' + li) }</td>
      </tr>
    {/each}
  </table>
  <hr class="my-3">
  
  <br />
  <br />
  <p>
    <a href="/pdfs/GCP Betec Brochure_2016.pdf" download target="_blank" rel="noopener noreferrer external" class="visible">
      <CloudinaryImage src="icon_download_catalog.jpg" alt="Download Catalog" widths="200px" />
    </a>
  </p>
</Article>