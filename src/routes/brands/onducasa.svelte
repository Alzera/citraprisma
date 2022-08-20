<script lang="ts">
  import { t } from '$lib/translations';
  const tPrefix = 'brands.onducasa.'

  import { mq } from '$lib/mediaquery';

  import Row from "$lib/components/Row.svelte";
  import Column from "$lib/components/Column.svelte";
  import Container from "$lib/components/Container.svelte";
  import Article from '$lib/components/Article.svelte';
  import CloudinaryImage from '$lib/components/CloudinaryImage.svelte';

</script>

<CloudinaryImage src="brands/onducasa/img19.jpg" alt="Banner" 
  widths="600px md:1024px" 
  crop="fill" 
  lazy={ false }
  height={ 400 }
  style={ $mq.mobile ? 'height:250px' : 'height:400px' }
  class="w-vw-center object-cover h-52 md:h-88" />
<Article 
  title={ $t(tPrefix + 'page.title') } 
  desc={ $t(tPrefix + 'page.description') }
  subtitle={ $t(tPrefix + 'page.description') }>
  <Row class="uppercase my-4">
    <Column cols={ 6 } md={ 3 } class="flex flex-col items-center mb-3 md:mb-0">
      <CloudinaryImage src="brands/onducasa/berkualitas.jpg" alt="berkualitas" widths="90px" lazy={ false } height={ 90 } />
      <span>{ $t(tPrefix + 'quality') }</span>
    </Column>
    <Column cols={ 6 } md={ 3 } class="flex flex-col items-center mb-3 md:mb-0">
      <CloudinaryImage src="brands/onducasa/estetis.jpg" alt="estetis" widths="90px" lazy={ false } height={ 90 } />
      <span>{ $t(tPrefix + 'aesthetic') }</span>
    </Column>
    <Column cols={ 6 } md={ 3 } class="flex flex-col items-center mb-3 md:mb-0">
      <CloudinaryImage src="brands/onducasa/ringan.jpg" alt="ringan" widths="90px" lazy={ false } height={ 90 } />
      <span>{ $t(tPrefix + 'light') }</span>
    </Column>
    <Column cols={ 6 } md={ 3 } class="flex flex-col items-center mb-3 md:mb-0">
      <CloudinaryImage src="brands/onducasa/fleksibel.jpg" alt="fleksibel" widths="90px" lazy={ false } height={ 90 } />
      <span>{ $t(tPrefix + 'flexible') }</span>
    </Column>
  </Row>
  <div class="flex justify-center align-center mb-4">
    <CloudinaryImage src="brands/onducasa/img15.jpg" alt="product" widths="500px md:700" lazy={ false } class="md:h-96 object-contain" />
  </div>
  <Row class="mb-4">
    <Column cols={ 12 } md={ 6 } class="md:order-2 md:!pl-3">
      <p class="text-xl mb-3">{ $t(tPrefix + 'content') }</p>
    </Column>
    <Column cols={ 12 } md={ 6 } class="md:order-1">
      <table class="w-full leading-5">
        <tr>
          <td colspan="2" class="text-center px-3 py-2 bg-gray-200">{ $t(tPrefix + 'specification') }</td>
        </tr>
        <tr>
          <td class="px-3 py-1.5 bg-gray-100">{ $t(tPrefix + 'material') }</td>
          <td class="px-3 py-1.5 bg-gray-50">Selulosa bitumen</td>
        </tr>
        <tr>
          <td class="px-3 py-1.5 bg-gray-100">{ $t(tPrefix + 'width') }</td>
          <td class="px-3 py-1.5 bg-gray-50">97 cm</td>
        </tr>
        <tr>
          <td class="px-3 py-1.5 bg-gray-100">{ $t(tPrefix + 'length') }</td>
          <td class="px-3 py-1.5 bg-gray-50">57 cm</td>
        </tr>
        <tr>
          <td class="px-3 py-1.5 bg-gray-100">{ $t(tPrefix + 'thickness') }</td>
          <td class="px-3 py-1.5 bg-gray-50">0,3 cm</td>
        </tr>
        <tr>
          <td class="px-3 py-1.5 bg-gray-100">{ $t(tPrefix + 'wave_height') }</td>
          <td class="px-3 py-1.5 bg-gray-50">3,8 cm</td>
        </tr>
        <tr>
          <td class="px-3 py-1.5 bg-gray-100">{ $t(tPrefix + 'large') }</td>
          <td class="px-3 py-1.5 bg-gray-50">0,39 m<sup>2</sup> / { $t(tPrefix + 'sheet') }</td>
        </tr>
        <tr>
          <td class="px-3 py-1.5 bg-gray-100">{ $t(tPrefix + 'weight') }</td>
          <td class="px-3 py-1.5 bg-gray-50">1,72 kg / { $t(tPrefix + 'sheet') }</td>
        </tr>
        <tr>
          <td class="px-3 py-1.5 bg-gray-100">{ $t(tPrefix + 'items_per_pack') }</td>
          <td class="px-3 py-1.5 bg-gray-50">10 { $t(tPrefix + 'sheet') }</td>
        </tr>
      </table>
    </Column>
  </Row>
  <h3 class="text-2xl mb-3">{ $t(tPrefix + 'accessories') }</h3>
  <Row>
    <Column cols={ 6 } md={ 4 } class="flex flex-col items-center">
      <CloudinaryImage src="brands/onducasa/img34.jpg" alt="ridge" lazy={ false } height={ 150 } class="h-32 object-contain" />
      <span>Ridge<br>100 x 50 cm</span>
    </Column>
    <Column cols={ 6 } md={ 4 } class="flex flex-col items-center">
      <CloudinaryImage src="brands/onducasa/img38.jpg" alt="screw" lazy={ false } height={ 150 } class="h-32 object-contain" />
      <span>Speedy Screw<br>65 mm</span>
    </Column>
    <Column cols={ 12 } md={ 4 } class="flex flex-col items-center">
      <CloudinaryImage src="brands/onducasa/img48.jpg" alt="verge" lazy={ false } height={ 150 } class="h-32 object-contain" />
      <span>Verge Standart<br>110 x 41 cm</span>
    </Column>
  </Row>
  <br />
  <br />
  <p class="text-base">
    <a href="/pdfs/brosur onducasa - rev.pdf" target="_blank" rel="noopener noreferrer external" class="visible">Download Catalog</a>
  </p>
</Article>