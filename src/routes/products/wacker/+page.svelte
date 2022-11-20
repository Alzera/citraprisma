<script lang="ts">
  import { t } from '$lib/translations';
  const tp = 'products.wacker.'

  import Row from "$lib/components/Row.svelte";
  import Column from "$lib/components/Column.svelte";
  import Article from '$lib/components/Article.svelte';
  import CloudinaryImage from '$lib/components/CloudinaryImage.svelte';

  $: sections = [
    { image: "gp.jpg", applications_count: 2, },
    { image: "gp-n.jpg", applications_count: 1, tds: "GPN.pdf", },
    { image: "pa.jpg", applications_count: 1, },
    { image: "sn.jpg", applications_count: 2, tds: "TDS_SN.pdf", },
    { image: "wn.jpg", applications_count: 4, tds: "TDS WN TRANS.pdf", },
    { image: "ws.jpg", applications_count: 2, tds: "TDS_WS.pdf", },
    { image: "hs.jpg", applications_count: 4, tds: "TDS HS.pdf", },
    { image: "sg79.jpg", applications_count: 1, },
  ]
</script>

<Article title={ $t(tp + 'page.title') }>
  <p class="text-base mb-3">{ $t(tp + 'content') }</p>
  <br/>
  {#each sections as section, i}
    <Row>
      <Column cols={ 12 } md={ 10 } class="order-2 md:order-1">
        <h2 class="text-2xl">{ $t(tp + `section.${i}.title`) }</h2>
        <p class="text-base">
          { $t(tp + `section.${i}.content`) }
          <br/>
          { $t(tp + 'applications') }:
          <br/>
        </p>
        <ul>
          {#each Array(section.applications_count) as _, iii}
            <li>{ $t(tp + `section.${i}.applications.${iii}`) }</li>
          {/each}
        </ul>
        {#if section.tds}
          <a href={ '/pdfs/tds/wacker/' + section.tds } download target="_blank" rel="noopener noreferrer external" class="button mt-1 inline-block">Download TDS</a>
        {/if}
      </Column>
      <Column cols={ 12 } md={ 2 } class="order-1 md:order-2 flex align-center">
        <CloudinaryImage class="mx-auto max-h-64 object-contain" src={ `products/wacker/${section.image}` } alt={ `wacker-${i}` } widths="300px md:270px" lazy />
      </Column>
    </Row>
    <hr class="my-6">
  {/each}
  <br />
  <br />
  <p class="text-base">
    <a href="/pdfs/Wacker.pdf" download target="_blank" rel="noopener noreferrer external" class="visible">Download Catalog</a>
  </p>
</Article>