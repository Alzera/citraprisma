<script lang="ts">
  import { t } from '$lib/translations';

  import Row from "$lib/components/Row.svelte";
  import Column from "$lib/components/Column.svelte";
  import Container from "$lib/components/Container.svelte";
  import CloudinaryImage from '$lib/components/CloudinaryImage.svelte';
  import Meta from '$lib/components/Meta.svelte';

  const links = [
    { image: "logo_knauf.jpg", href: "/products/knauf", text: "KNAUF\nGypsumboard, rangka, casting, compound" },
    { image: "logo_yoshino.jpg", href: "/products/yoshino", text: "YOSHINO\nGypsumboard, compound" },
    { image: "logo_jayaboard.jpg", href: "#", text: "JAYABOARD\nGypsumboard, rangka, casting, compound" },
    { image: "logo_bostik.jpg", href: "/products/bostik", text: "BOSTIK\nWaterproofing, mortar, sealant" },
    { image: "logo_grace.jpg", href: "/products/grace", text: "GRACE\nWaterproofing dan injeksi" },
    { image: "logo_kcc.jpg", href: "#", text: "KCC\nCat, floor coating" },
    { image: "logo_rockwool.png", href: "/products/rockwool", text: "ROCKWOOL\nSave n' Silent™ Pro" },
    { image: "logo_conwood.jpg", href: "/products/conwood", text: "CONWOOD\nLisplang dan Dekoratif" },
    // { image: "logo_pioneer.jpg", href: "#", text: "PIONEER\nEpoxy dan Adhesive" },
    { image: "logo_wacker.jpg", href: "/products/wacker", text: "WACKER\nSilicone Sealants" },
    { image: "logo_royalboard.jpg", href: "/products/royalboard", text: "ROYALBOARD\nSilicate board for various applications" },
    { image: "logo_kalsi.jpg", href: "/products/kalsi", text: "KALSI\nAsbestos free board" },
    { image: "logo_onduline.jpg", href: "/products/onduline", text: "ONDULINE\nLightweight roofing system" },
    { image: "logo_troldtekt.jpg", href: "/products/troldtekt", text: "TROLDTEKT\nAccoustic System" },
    { image: "logo_blesscon.jpg", href: "/products/blesscon", text: "BLESSCON\nLightweight brick friendly environment" },
    { image: "logo_adcos.jpg", href: "/products/adcos", text: "ADCOS\nWeatherseal Silicone Sealant" },
  ]
</script>

<Meta title={ $t('products.page.title') } />

<Container class="my-2">
  <h1 class="text-3xl mb-6 text-primary">{ $t('products.title') }</h1>
  <Row class="products-row">
    {#each links as item}
    <Column cols={ 12 } md={ 6 }>
      <a href={ item.href } class="flex items-center h-full">
        <CloudinaryImage src={ `products/${item.image}` } alt={ item.image } widths="30vw md:100px" class="object-contain mr-3 px-2 py-1 border border-slate-100 h-12 w-24" />
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
  :global(.products-row > div) {
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
    :global(.products-row > div) {
      padding: .75rem 0 !important;
      border-right: none !important;
    }
  }
</style>