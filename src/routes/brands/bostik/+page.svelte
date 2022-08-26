<script lang="ts">
  import { t } from '$lib/translations';
  const tp = 'brands.bostik.'

  import Row from "$lib/components/Row.svelte";
  import Column from "$lib/components/Column.svelte";
  import Article from '$lib/components/Article.svelte';
  import CloudinaryImage from '$lib/components/CloudinaryImage.svelte';

  $: sections = [
    [
      { img: "img46.jpg", tds: "BOSTIK Boscoprime 1 Rev1.pdf", },
      { img: "img48.jpg", tds: "BOSTIK Boscoseal PUXRev 1.pdf", },
      { img: "img50.jpg", tds: "BOSTIK BoscoSeal Top HT Rev1.pdf", },
    ], 
    [
      { img: "img64.jpg", tds: "Boscoseal AC _new_.pdf", useApplication: true, },
      { img: "img66.jpg", tds: "Boscolastic _new_REV02.pdf", useApplication: true, },
      { img: "img68.jpg", tds: "Boscoseal Slurry _new_REV02.pdf", useApplication: true, },
      { img: "img73.jpg", tds: "Boscoseal Torch On.pdf", useApplication: true, },
      { img: "img77.png", tds: "", useApplication: true, },
    ],
    [
      { img: "img82.jpg", tds: "seal_n_flex___1_0815.pdf", useApplication: true, },
      { img: "img86.jpg", tds: "", useApplication: true, count: 3, },
      { img: "img88.jpg", tds: "", useApplication: true, },
      { img: "img95.png", tds: "bostik_fireban_one__0416.pdf", useApplication: true, },
      { img: "img101.jpg", tds: "Boscosil 616.pdf", useApplication: true, },
      { img: "img103.jpg", tds: "Boscosil 313.pdf", useApplication: true, },
      { img: "img110.jpg", tds: "", useApplication: true, count: 2, },
    ],
    [
      { img: "img122.jpg", tds: "no_more_nails__0615.pdf", useApplication: true, count: 5, },
      { img: "img126.jpg", tds: "bostik_expanda_foam_0615.pdf", },
      { img: "img128.jpg", tds: "", },
    ],
  ]
</script>

<Article title={ $t(tp + 'page.title') } desc={ $t(tp + 'page.description') }>
  <p class="text-base mb-3">{ $t(tp + 'content') }</p>
  <br/>
  {#each sections as item, i}
    {@const section = i + 1}
    <h1 class="text-3xl text-primary mb-1">{ $t(tp + `section${section}.title`) }</h1>
    {#each item as sub, subi}
      {@const tMidfix = `section${section}.subsection${subi+1}.` }
      <Row>
        <Column cols={ 12 } class="order-1">
          <h2 class="text-2xl">{ $t(tp + tMidfix + 'title') }</h2>
          <h3 class="text-lg">{ $t(tp + tMidfix + 'subtitle') }</h3>
        </Column>
        <Column cols={ 12 } md={ 8 } class="order-3 md:order-2 text-base">
          <p class="text-base mb-3">{ $t(tp + tMidfix + 'content') }</p>
          {#if sub.useApplication}
            <p class="text-base mb-3">
              <i>{ $t(tp + 'application_title') }</i>
              {#if sub.count}
                <span>
                  <ul>
                    {#each Array(sub.count) as _, lii}
                      <li>{ $t(tp + tMidfix + `application.${lii}`) }</li>
                    {/each}
                  </ul>
                </span>
              {:else}
                <span>{ $t(tp + tMidfix + `application`) }</span>
              {/if}
            </p>
          {/if}
          <a href={ '/pdfs/tds/bostik/' + sub.tds } download target="_blank" rel="noopener noreferrer external" class="button">Download TDS</a>
        </Column>
        <Column cols={ 12 } md={ 4 } class="order-2 md:order-3">
          <CloudinaryImage class="mx-auto h-52 object-contain" src={ `brands/bostik/${sub.img}` } alt={ sub.img } widths="300px md:270px" />
        </Column>
      </Row>
      {#if i !== sections[i].length - 1}
        <hr class="my-3">
      {/if}
    {/each}
  {/each}
  <br />
  <br />
  <p class="text-base">
    <a href="/pdfs/Bostik Catalogue 2021-LR.pdf" download target="_blank" rel="noopener noreferrer external" class="visible">Download Catalog</a>
  </p>
</Article>