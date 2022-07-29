<script lang="ts">
  import { t } from '$lib/translations';
  const tPrefix = 'brands.wacker.'

  import Row from "$lib/components/Row.svelte";
  import Column from "$lib/components/Column.svelte";
  import Article from '$lib/components/Article.svelte';
  import CloudinaryImage from '$lib/components/CloudinaryImage.svelte';

  $: sections = [
    [
      { image: "gp.jpg", applications_count: 2, },
      { image: "sn.jpg", applications_count: 2, tds: "TDS_SN.pdf", },
      { image: "gp-n.jpg", applications_count: 1, tds: "GPN.pdf", },
    ],
    [
      { image: "ws.jpg", applications_count: 2, tds: "TDS_WS.pdf", },
      { image: "wn.jpg", applications_count: 4, tds: "TDS WN TRANS.pdf", },
    ],
    [
      { image: "hs.jpg", applications_count: 4, tds: "TDS HS.pdf", },
    ],
  ]
</script>

<Article title={ $t(tPrefix + 'page.title') } desc={ $t(tPrefix + 'page.description') }>
  <p class="text-base mb-3">{ $t(tPrefix + 'content') }</p>
  <br/>
  {#each sections as section, i}
    <h1 class="text-3xl text-primary">{ $t(tPrefix + `section.${i}.title`) }</h1>
    <p class="text-lg mb-3">{ $t(tPrefix + `section.${i}.subtitle`) }</p>
    {#each section as sub, ii}
      <Row>
        <Column cols={ 12 } md={ 10 } class="order-2 md:order-1">
          <h2 class="text-2xl">{ $t(tPrefix + `section.${i}.subsection.${ii}.title`) }</h2>
          <p class="text-base">
            { $t(tPrefix + `section.${i}.subsection.${ii}.content`) }
            <br/>
            { $t(tPrefix + 'applications') }:
            <br/>
          </p>
          <ul>
            {#each Array(sub.applications_count) as _, iii}
              <li>{ $t(tPrefix + `section.${i}.subsection.${ii}.applications.${iii}`) }</li>
            {/each}
          </ul>
          {#if sub.tds}
            <a href={ '/pdfs/tds/wacker/' + sub.tds } target="_blank" rel="noopener noreferrer external" class="button mt-1 inline-block">Download TDS</a>
          {/if}
        </Column>
        <Column cols={ 12 } md={ 2 } class="order-1 md:order-2 flex align-center">
          <CloudinaryImage class="mx-auto max-h-64" crop="fill" src={ `brands/wacker/${sub.image}` } alt={ `wacker-${i}-${ii}` } widths="300px md:270px" lazy />
        </Column>
      </Row>
      <hr class="my-3">
    {/each}
  {/each}
  <br />
  <br />
  <p class="text-base">
    <a href="/pdfs/Wacker.pdf" target="_blank" rel="noopener noreferrer external" class="visible">Download Catalog</a>
  </p>
</Article>