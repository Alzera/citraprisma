<script lang="ts">
  import { t } from '$lib/translations';
  const tp = 'products.adcos.'
  import { mq } from '$lib/mediaquery';

  import Row from "$lib/components/Row.svelte";
  import Column from "$lib/components/Column.svelte";
  import Article from '$lib/components/Article.svelte';
  import CloudinaryImage from '$lib/components/CloudinaryImage.svelte';
</script>

<CloudinaryImage src="products/adcos/img81.jpg" alt="Banner" 
  widths="600px md:1024px" 
  crop="fill" 
  lazy={ false }
  preload={ true }
  height={ 400 }
  style={ $mq.mobile ? 'height:250px' : 'height:400px' }
  class="w-vw-center object-cover h-52 md:h-88" />
<Article title={ $t(tp + 'page.title') }>
  <br/>
  <h2 class="text-3xl text-primary mb-1">{ $t(tp + 'section1.title') }</h2>
  <p class="mb-3">{ $t(tp + 'section1.content') }</p>
  <Row>
    <Column cols={ 12 } md={ 5 }>
      <h3 class="text-xl text-primary mb-1">{ $t(tp + 'features') }</h3>
      <ul class="mb-3">
        {#each Array(9) as _, li}
          <li>{ $t(tp + `section1.features.${li}`) }</li>
        {/each}
      </ul>
      <h3 class="text-xl text-primary mb-1">{ $t(tp + 'application') }</h3>
      <ul>
        {#each Array(6) as _, li}
          <li>{ $t(tp + `section1.application.${li}`) }</li>
        {/each}
      </ul>
    </Column>
    <Column cols={ 12 } md={ 5 }>
      <h3 class="text-xl text-primary mb-1">{ $t(tp + 'properties') }</h3>
      <table class="default-table">
        <tr>
          <th>{ $t(tp + 'curing') }</th>
          <td>{ $t(tp + 'neutralcuring') }</td>
        </tr>
        <tr>
          <th>{ $t(tp + 'tack') }</th>
          <td>10-15</td>
        </tr>
        <tr>
          <th>{ $t(tp + 'fullcuring') }</th>
          <td>7-14</td>
        </tr>
        <tr>
          <th>{ $t(tp + 'gravity') }</th>
          <td>1.43</td>
        </tr>
        <tr>
          <th>{ $t(tp + 'hardness') }</th>
          <td>30</td>
        </tr>
        <tr>
          <th>{ $t(tp + 'tensile') }</th>
          <td>10</td>
        </tr>
        <tr>
          <th>{ $t(tp + 'elongation') }</th>
          <td>300-400%</td>
        </tr>
        <tr>
          <th>{ $t(tp + 'ozone') }</th>
          <td>{ $t(tp + 'excellent') }</td>
        </tr>
        <tr>
          <th>{ $t(tp + 'temperature') }</th>
          <td>5°C-40°C</td>
        </tr>
      </table>
    </Column>
    <Column cols={ 12 } md={ 2 }>
      <CloudinaryImage class="h-90 object-contain" src={ `products/adcos/img115.jpg` } alt={ `Adcos Weatherseal Sealant` } widths="300px" />
    </Column>
  </Row>
  <hr class="my-3">

  <h2 class="text-3xl text-primary mb-1">{ $t(tp + 'section2.title') }</h2>
  <p class="mb-3">{ $t(tp + 'section2.content') }</p>
  <Row>
    <Column cols={ 12 } md={ 5 }>
      <h3 class="text-xl text-primary mb-1">{ $t(tp + 'features') }</h3>
      <ul class="mb-3">
        {#each Array(4) as _, li}
          <li>{ $t(tp + `section2.features.${li}`) }</li>
        {/each}
      </ul>
      <h3 class="text-xl text-primary mb-1">{ $t(tp + 'application') }</h3>
      <ul>
        {#each Array(10) as _, li}
          <li>{ $t(tp + `section2.application.${li}`) }</li>
        {/each}
      </ul>
    </Column>
    <Column cols={ 12 } md={ 5 }>
      <h3 class="text-xl text-primary mb-1">{ $t(tp + 'properties') }</h3>
      <table class="default-table">
        <tr>
          <th>{ $t(tp + 'curing') }</th>
          <td>{ $t(tp + 'neutralcuring') }</td>
        </tr>
        <tr>
          <th>{ $t(tp + 'tack') }</th>
          <td>10-20</td>
        </tr>
        <tr>
          <th>{ $t(tp + 'fullcuring') }</th>
          <td>7-14</td>
        </tr>
        <tr>
          <th>{ $t(tp + 'gravity') }</th>
          <td>1.38</td>
        </tr>
        <tr>
          <th>{ $t(tp + 'hardness') }</th>
          <td>30</td>
        </tr>
        <tr>
          <th>{ $t(tp + 'tensile') }</th>
          <td>10-15</td>
        </tr>
        <tr>
          <th>{ $t(tp + 'elongation') }</th>
          <td>500-600%</td>
        </tr>
        <tr>
          <th>{ $t(tp + 'ozone') }</th>
          <td>{ $t(tp + 'excellent') }</td>
        </tr>
        <tr>
          <th>{ $t(tp + 'temperature') }</th>
          <td>5°C-40°C</td>
        </tr>
      </table>
    </Column>
    <Column cols={ 12 } md={ 2 }>
      <CloudinaryImage class="h-90 object-contain" src={ `products/adcos/img123.jpg` } alt={ `Adcos NS` } widths="300px" />
    </Column>
  </Row>
  <hr class="my-3">
  
  <br />
  <br />
  <p>
    <a href="/pdfs/Catalog Adcos Project Sealant.pdf" download target="_blank" rel="noopener noreferrer external" class="visible">
      <CloudinaryImage src="icon_download_catalog.jpg" alt="Download Catalog" widths="200px" />
    </a>
  </p>
</Article>