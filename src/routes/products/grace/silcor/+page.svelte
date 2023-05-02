<script lang="ts">
  import { t } from '$lib/translations';
  const tp = 'products.grace.silcor.'
  import { mq } from '$lib/mediaquery';

  import Row from "$lib/components/Row.svelte";
  import Column from "$lib/components/Column.svelte";
  import Article from '$lib/components/Article.svelte';
  import CloudinaryImage from '$lib/components/CloudinaryImage.svelte';
</script>

<CloudinaryImage src="products/grace/silcor/img1187.jpg" alt="Banner" 
  widths="600px md:1024px" 
  crop="fill" 
  lazy={ false }
  height={ 400 }
  style={ $mq.mobile ? 'height:250px' : 'height:400px' }
  class="w-vw-center object-cover h-52 md:h-88" />
<Article title={ $t(tp + 'page.title') }>
  <br/>
  <h2 class="text-3xl text-primary mb-1">{ $t(tp + 'title') }</h2>
  <h2 class="text-xl text-primary mb-1">{ $t(tp + 'subtitle') }</h2>
  <p class="mb-3">{ $t(tp + 'content') }</p>

  <h3 class="text-xl text-primary mb-1">{ $t(tp + 'benefits.title') }</h3>
  <table class="default-table mb-3">
    {#each Array(9) as _, li}
      <tr>
        <th>{ $t(tp + 'benefits.titles.' + li) }</th>
        <td>{ $t(tp + 'benefits.contents.' + li) }</td>
      </tr>
    {/each}
  </table>

  <h3 class="text-xl text-primary mb-1">{ $t(tp + 'applications.title') }</h3>
  <p>{ $t(tp + 'applications.content') }</p>
  <Row>
    <Column cols={ 12 } md={ 5 } class="!p-0 !md:p-1">
      <ul>
        {#each Array(7) as _, li}
          <li>{ $t(tp + `applications.lists.${li}`) }</li>
        {/each}
      </ul>
    </Column>
    <Column cols={ 12 } md={ 5 } class="!p-0 !md:p-1">
      <ul>
        {#each Array(7) as _, li}
          {@const i = li + 1}
          <li>{ $t(tp + `applications.lists.${i}`) }</li>
        {/each}
      </ul>
    </Column>
  </Row>
  <hr class="my-3">
  
  <br />
  <br />
  <p>
    <a href="/pdfs/Silcor Brochure_EN_Apr 2016.pdf" download target="_blank" rel="noopener noreferrer external" class="visible">
      <CloudinaryImage src="icon_download_catalog.jpg" alt="Download Catalog" widths="200px" />
    </a>
  </p>
</Article>