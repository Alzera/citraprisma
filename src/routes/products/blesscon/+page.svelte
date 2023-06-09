<script lang="ts">
  import { t } from '$lib/translations';
  const tp = 'products.blesscon.'

  import { mq } from '$lib/mediaquery';

  import Row from "$lib/components/Row.svelte";
  import Column from "$lib/components/Column.svelte";
  import Article from '$lib/components/Article.svelte';
  import CloudinaryImage from '$lib/components/CloudinaryImage.svelte';
</script>

<CloudinaryImage src="products/blesscon/img76.jpg" alt="Banner" 
  widths="600px md:1024px" 
  crop="fill" 
  lazy={ false }
  preload={ true }
  height={ 400 }
  style={ $mq.mobile ? 'height:250px' : 'height:400px' }
  class="w-vw-center object-cover h-52 md:h-88" />
<Article title={ $t(tp + 'page.title') }>
  <h1 class="text-2xl text-primary mb-1">{ $t(tp + 'section1.title') }</h1>
  <p class="mb-2">{ $t(tp + 'section1.subtitle') }</p>
  <ul class="leading-7">
    {#each Array(4) as _, i}
      <li>{ $t(tp + `section1.details.${i}`) }</li>
    {/each}
  </ul>
  <br/>
  <h1 class="text-2xl text-primary mb-1">{ $t(tp + 'section2.title') }</h1>
  <Row>
    <Column cols={ 12 } md={ 4 } class="flex flex-col justify-center">
      <CloudinaryImage class="mx-auto" src="products/blesscon/img59.jpg" alt="blesscon" widths="300px md:270px" />
    </Column>
    <Column cols={ 12 } md={ 8 }>
      <ul class="leading-7">
        {#each Array(6) as _, i}
          <Row>
            <Column cols={ 2 } class="flex flex-col justify-center">
              <CloudinaryImage class="mx-auto h-14 object-contain" src={ `products/blesscon/${i + 1}.png` } alt="blesscon" widths="100px" />
            </Column>
            <Column cols={ 10 } class="flex flex-col justify-center">
              <h1 class="text-lg text-primary">{ $t(tp + `section2.excellence.${i}.title`) }</h1>
              <p>{ $t(tp + `section2.excellence.${i}.desc`) }</p>
            </Column>
          </Row>
        {/each}
      </ul>
    </Column>
  </Row>
  <br/>
  <h1 class="text-2xl text-primary mb-2">{ $t(tp + 'section3.title') }</h1>
  <table class="default-table mb-1">
    <thead>
      <tr>
        <th>No</th>
        <th>{ $t(tp + 'section3.length') } (mm)</th>
        <th>{ $t(tp + 'section3.width') } (mm)</th>
        <th>{ $t(tp + 'section3.height') } (mm)</th>
        <th>Pcs</th>
        <th>{ $t(tp + 'section3.wide') } (M2)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>600</td>
        <td>200</td>
        <td>75</td>
        <td>75</td>
        <td>13,33</td>
      </tr>
      <tr>
        <td>2</td>
        <td>600</td>
        <td>200</td>
        <td>100</td>
        <td>100</td>
        <td>10</td>
      </tr>
      <tr>
        <td>3</td>
        <td>600</td>
        <td>200</td>
        <td>125</td>
        <td>125</td>
        <td>8</td>
      </tr>
      <tr>
        <td>4</td>
        <td>600</td>
        <td>200</td>
        <td>150</td>
        <td>150</td>
        <td>6,67</td>
      </tr>
      <tr>
        <td>5</td>
        <td>600</td>
        <td>200</td>
        <td>200</td>
        <td>200</td>
        <td>5</td>
      </tr>
    </tbody>
  </table>
  <p class="mb-2">{ $t(tp + 'section3.iso') }</p>
  <br/>
  <h1 class="text-2xl text-primary mb-1">{ $t(tp + 'section4.title') }</h1>
  <table class="default-table mb-1">
    <tbody>
      <tr>
        <td>{ $t(tp + 'section4.weight') }</td>
        <td>600 Kg/m<sup>3</sup></td>
      </tr>
      <tr>
        <td>{ $t(tp + 'section4.press') }</td>
        <td>> 4.0 N/mm2</td>
      </tr>
      <tr>
        <td>{ $t(tp + 'section4.conductivity') }</td>
        <td>0.14 W/MK</td>
      </tr>
      <tr>
        <td>{ $t(tp + 'section4.insulation') }</td>
        <td>41-48DB</td>
      </tr>
    </tbody>
  </table>
  <p class="mb-2">{ $t(tp + 'section4.sni') }</p>
  <br />
  <br />
  <p>
    <a href="/pdfs/compro_square_SNI.pdf" download target="_blank" rel="noopener noreferrer external">
      <CloudinaryImage src="icon_download_catalog.jpg" alt="Download Catalog" widths="200px" />
    </a>
  </p>
</Article>