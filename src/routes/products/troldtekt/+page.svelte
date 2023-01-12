<script lang="ts">
  import { share } from '$lib/share';
  import { t } from '$lib/translations';
  const tp = 'products.troldtekt.'

  import Row from "$lib/components/Row.svelte";
  import Meta from "$lib/components/Meta.svelte";
  import Column from "$lib/components/Column.svelte";
  import Container from '$lib/components/Container.svelte';
  import Breadcrumb from '$lib/components/Breadcrumb.svelte';
  import CloudinaryImage from '$lib/components/CloudinaryImage.svelte';

  $: title = $t(tp + 'page.title')
</script>

<Meta { title } />

<Container class="mt-2">
  <div class="flex mb-4 align-center">
    <Breadcrumb />
    <div class="flex-auto"></div>
    <div on:click={ () => share('') } class="i-mdi-share-variant text-xl" />
  </div>
  <h1 class="text-4xl text-primary">{ title }</h1>
</Container>
<Container class="p-6">
  <h2 class="text-4xl text-center mb-4">{ $t(tp + 'section1.title') }</h2>
  <p class="text-center">{ $t(tp + 'section1.subtitle1') }</p>
  <p class="text-center">{ $t(tp + 'section1.subtitle2') }</p>
</Container>
<Container fluid style="background: #f7f7f7">
  <Container class="p-6">
    <h2 class="text-4xl text-center mb-4">{ $t(tp + 'section2.title') }</h2>
    <ul class="text-base ml-12 md:ml-42">
      {#each Array(6) as _, i}
        <li>{ $t(tp + `section2.content.${i}`) }</li>
      {/each}
    </ul>
  </Container>
</Container>
<Container class="p-6">
  <h2 class="text-4xl mb-4">{ $t(tp + 'section3.title') }</h2>
  <p class="mb-6">{ $t(tp + 'section3.subtitle') }</p>
  {#each Array(3) as _, i}
    <Row class="mb-2">
      <Column cols={ 12 } md={ 6 }>
        <CloudinaryImage class="w-full" src={ `products/troldtekt/img${97 + i}.jpg` } alt={ `img${i}` } widths="300px md:270px" />
      </Column>
      <Column cols={ 12 } md={ 6 }>
        <h3 class="text-lg">{ $t(tp + `section3.content.${i}.title`) }</h3>
        <p>{ $t(tp + `section3.content.${i}.subtitle`) }</p>
      </Column>
    </Row>
  {/each}
</Container>
<Container fluid style="background: #f7f7f7">
  <Container class="p-6">
    <h2 class="text-4xl mb-4">{ $t(tp + 'section4.title') }</h2>
    <p class="mb-6">{ $t(tp + 'section4.subtitle') }</p>

    <Row class="mb-6">
      <Column cols={ 12 } md={ 3 }>
        <CloudinaryImage class="w-full" rotate={ 90 } src={ `products/troldtekt/img107.jpg` } alt="img107" widths="300px md:270px" />
        Extreme fine structure, 0.5 mm 
      </Column>
      <Column cols={ 12 } md={ 3 }>
        <CloudinaryImage class="w-full" rotate={ 90 } src={ `products/troldtekt/img110.jpg` } alt="img110" widths="300px md:270px" />
        Ultrafine structure, 1.0 mm
      </Column>
      <Column cols={ 12 } md={ 3 }>
        <CloudinaryImage class="w-full" rotate={ 90 } src={ `products/troldtekt/img108.jpg` } alt="img108" widths="300px md:270px" />
        Fine structure, 1.5 mm
      </Column>
      <Column cols={ 12 } md={ 3 }>
        <CloudinaryImage class="w-full" rotate={ 90 } src={ `products/troldtekt/img109.jpg` } alt="img109" widths="300px md:270px" />
        Coarse structure, 3.0 mm
      </Column>
    </Row>
    <Row class="mb-1">
      <Column cols10={ 10 } md10={ 2 }>
        Natural wood
        <CloudinaryImage class="w-full" src={ `products/troldtekt/img100.jpg` } alt="img100" widths="300px md:270px" />
      </Column>
      <Column cols10={ 10 } md10={ 2 }>
        Natural grey
        <CloudinaryImage class="w-full" src={ `products/troldtekt/img101.jpg` } alt="img101" widths="300px md:270px" />
      </Column>
    </Row>
    <Row class="mb-6">
      <Column cols10={ 10 } md10={ 2 }>
        <CloudinaryImage class="w-full" src={ `products/troldtekt/img102.jpg` } alt="img102" widths="300px md:270px" />
        White 101
      </Column>
      <Column cols10={ 10 } md10={ 2 }>
        <CloudinaryImage class="w-full" src={ `products/troldtekt/img106.jpg` } alt="img106" widths="300px md:270px" />
        Grey 202
      </Column>
      <Column cols10={ 10 } md10={ 2 }>
        <CloudinaryImage class="w-full" src={ `products/troldtekt/img104.jpg` } alt="img104" widths="300px md:270px" />
        Grey 208
      </Column>
      <Column cols10={ 10 } md10={ 2 }>
        <CloudinaryImage class="w-full" src={ `products/troldtekt/img27.jpg` } alt="img27" widths="300px md:270px" />
        Black 207
      </Column>
      <Column cols10={ 10 } md10={ 2 }>
        <CloudinaryImage class="w-full" src={ `products/troldtekt/img105.jpg` } alt="img105" widths="300px md:270px" />
        Custom colour
      </Column>
    </Row>
  
    <a href="/pdfs/troldtekt_profil_brochure_eng.pdf" download target="_blank" rel="noopener noreferrer external" class="visible">
      <CloudinaryImage src="icon_download_catalog.jpg" alt="Download Catalog" widths="200px" />
    </a>
  </Container>
</Container>