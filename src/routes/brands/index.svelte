<script lang="ts">
  import { v } from '$lib/variables';
  import { page } from '$app/stores';
  import { MetaTags } from 'svelte-meta-tags';
  import { t } from '$lib/translations';

  import Row from "$lib/components/Row.svelte";
  import Column from "$lib/components/Column.svelte";
  import Container from "$lib/components/Container.svelte";
  import CloudinaryImage from '$lib/components/CloudinaryImage.svelte';

  const links = [
    { image: "logo_knauf.jpg", href: "/brands/knauf", text: "KNAUF\ngypsumboard, rangka, casting, compound" },
    { image: "logo_yoshino.jpg", href: "/brands/yoshino", text: "YOSHINO\ngypsumboard, compound" },
    { image: "logo_jayaboard.jpg", href: "#", text: "JAYABOARD\ngypsumboard, rangka, casting, compound" },
    { image: "logo_bostik.jpg", href: "/brands/bostik", text: "BOSTIK\nwaterproofing, mortar, sealant" },
    { image: "logo_grace.jpg", href: "#", text: "GRACE\nwaterproofing dan injeksi" },
    { image: "logo_kcc.jpg", href: "#", text: "KCC\ncat, floor coating" },
    { image: "logo_rockwool.png", href: "/brands/rockwool", text: "ROCKWOOL\nSave n' Silent&trade; Pro" },
    { image: "logo_conwood.jpg", href: "/brands/conwood", text: "CONWOOD\nLisplang dan Dekoratif" },
    { image: "logo_pioneer.jpg", href: "#", text: "PIONEER\nEpoxy dan Adhesive" },
    { image: "logo_wacker.jpg", href: "/brands/wacker", text: "WACKER\nSilicone Sealants" },
    { image: "logo_onduline.jpg", href: "/brands/onducasa", text: "ONDUCASA\nLightweight roofing system" },
  ]
</script>

<MetaTags
  title={ $t('brands.index.page.title') }
  titleTemplate={ "%s | " + v.webName }
  description={ $t('brands.index.page.description') }
  canonical={ v.webLink + $page.url.pathname }
/>

<Container class="my-2">
  <h1 class="text-3xl mb-6 text-primary">{ $t('brands.index.title') }</h1>
  <Row class="brands-row">
    {#each links as item}
    <Column cols={ 12 } md={ 6 }>
      <a href={ item.href } class="flex items-center h-full">
        <CloudinaryImage src={ `brands/${item.image}` } alt={ item.image } widths="30vw md:100px" class="object-contain mr-3 px-2 py-1 border border-slate-100 h-12 w-24" />
        <h2 class="text-xl flex-auto my-1">{ item.text }</h2>
      </a>
    </Column>
    {/each}
  </Row>
</Container>

<style lang="scss">
  a {
    text-decoration: none;
    h2 {
      color: initial;
      white-space: pre-wrap;
    }
  }
  :global(.brands-row > div) {
    padding-top: .75rem;
    padding-bottom: .75rem;
    border-bottom: 1px solid #f2f2f2;
    &:nth-last-child(1), &:nth-last-child(2) {
      border-bottom: none;
    }
    &:nth-child(even){
      padding-left: 2rem;
    }
    &:nth-child(odd){
      padding-right: 2rem;
      border-right: 1px solid #f2f2f2;
    }
  }
  @media (max-width: 768px){
    :global(.brands-row > div) {
      padding: .75rem 0 !important;
      border-right: none !important;
    }
  }
</style>