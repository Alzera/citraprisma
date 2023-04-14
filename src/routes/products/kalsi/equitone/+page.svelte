<script lang="ts">
  import { t } from '$lib/translations';
  const tp = 'products.kalsi.equitone.'
  import { mq } from '$lib/mediaquery';

  import Article from '$lib/components/Article.svelte';
  import CloudinaryImage from '$lib/components/CloudinaryImage.svelte';
</script>

<CloudinaryImage src="products/kalsi/equitone/img63.jpg" alt="Banner" 
  widths="600px md:1024px" 
  crop="fill" 
  lazy={ false }
  height={ 400 }
  style={ $mq.mobile ? 'height:250px' : 'height:400px' }
  class="w-vw-center object-cover h-52 md:h-88" />
<Article title={ $t(tp + 'page.title') }>
  <br/>
  <h2 class="text-3xl text-primary mb-1">{ $t(tp + 'section1.title') }</h2>
  <p>{ $t(tp + 'section1.content1') }</p>
  <p>{ $t(tp + 'section1.content2') }</p>
  <p class="mb-3">{ $t(tp + 'section1.content3') }</p>
  <h3 class="text-xl text-primary mb-1">{ $t(tp + 'section1.subsection.0.title') }</h3>
  <p class="mb-3">{ $t(tp + 'section1.subsection.0.content') }</p>
  <h3 class="text-xl text-primary mb-1">{ $t(tp + 'section1.subsection.1.title') }</h3>
  <p class="mb-3">{ $t(tp + 'section1.subsection.1.content') }</p>
  <h3 class="text-xl text-primary mb-1">{ $t(tp + 'section1.subsection.2.title') }</h3>
  <p>{ $t(tp + 'section1.subsection.2.content1') }</p>
  <p class="mb-3">{ $t(tp + 'section1.subsection.2.content2') }</p>
  <hr class="my-3">

  <h2 class="text-3xl text-primary mb-1">{ $t(tp + 'section2.title') }</h2>
  <p>{ $t(tp + 'section2.content1') }</p>
  <p class="mb-3">{ $t(tp + 'section2.content2') }</p>
  <h3 class="text-xl text-primary mb-1">{ $t(tp + 'section2.subsection.0.title') }</h3>
  <p class="mb-3">{ $t(tp + 'section2.subsection.0.content') }</p>
  <h3 class="text-xl text-primary mb-1">{ $t(tp + 'section2.subsection.1.title') }</h3>
  <p class="mb-3">{ $t(tp + 'section2.subsection.1.content') }</p>
  <h3 class="text-xl text-primary mb-1">{ $t(tp + 'section2.subsection.2.title') }</h3>
  <p class="mb-3">{ $t(tp + 'section2.subsection.2.content') }</p>
  <hr class="my-3">

  <h2 class="text-3xl text-primary mb-3">{ $t(tp + 'section3.title') }</h2>
  <h3 class="text-xl text-primary mb-1">{ $t(tp + 'section3.subsection.0.title') }</h3>
  <p class="mb-3">{ $t(tp + 'section3.subsection.0.content') }</p>
  <h3 class="text-xl text-primary mb-1">{ $t(tp + 'section3.subsection.1.title') }</h3>
  <p class="mb-3">{ $t(tp + 'section3.subsection.1.content') }</p>
  <hr class="my-3">

  <h2 class="text-3xl text-primary mb-3">{ $t(tp + 'section4.title') }</h2>
  <h3 class="text-xl text-primary mb-1">{ $t(tp + 'section4.subsection.0.title') }</h3>
  <p class="mb-3">{ $t(tp + 'section4.subsection.0.content') }</p>
  <h3 class="text-xl text-primary mb-1">{ $t(tp + 'section4.subsection.1.title') }</h3>
  <p class="mb-3">{ $t(tp + 'section4.subsection.1.content') }</p>
  <h3 class="text-xl text-primary mb-1">{ $t(tp + 'section4.subsection.2.title') }</h3>
  <p class="mb-3">{ $t(tp + 'section4.subsection.2.content') }</p>
  <CloudinaryImage src="products/kalsi/equitone/color1.jpg" alt="color" lazy={ false } class="h-24 object-contain" />
  <hr class="my-3">

  <h2 class="text-3xl text-primary mb-3">{ $t(tp + 'section5.title') }</h2>
  <h3 class="text-xl text-primary mb-1">{ $t(tp + 'section5.subsection.0.title') }</h3>
  <p class="mb-3">{ $t(tp + 'section5.subsection.0.content') }</p>
  <h3 class="text-xl text-primary mb-1">{ $t(tp + 'section5.subsection.1.title') }</h3>
  <p class="mb-3">{ $t(tp + 'section5.subsection.1.content') }</p>
  <h3 class="text-xl text-primary mb-1">{ $t(tp + 'section5.subsection.2.title') }</h3>
  <p class="mb-3">{ $t(tp + 'section5.subsection.2.content') }</p>
  <CloudinaryImage src="products/kalsi/equitone/color2.jpg" alt="color" lazy={ false } class="h-24 object-contain" />
  <hr class="my-3">

  <h2 class="text-3xl text-primary mb-3">{ $t(tp + 'section6.title') }</h2>
  <h3 class="text-xl text-primary mb-1">{ $t(tp + 'section6.subsection.0.title') }</h3>
  <p class="mb-3">{ $t(tp + 'section6.subsection.0.content') }</p>
  <h3 class="text-xl text-primary mb-1">{ $t(tp + 'section6.subsection.1.title') }</h3>
  <p class="mb-3">{ $t(tp + 'section6.subsection.1.content') }</p>
  <h3 class="text-xl text-primary mb-1">{ $t(tp + 'section6.subsection.2.title') }</h3>
  <p class="mb-3">{ $t(tp + 'section6.subsection.2.content') }</p>
  <CloudinaryImage src="products/kalsi/equitone/color3.jpg" alt="color" lazy={ false } class="h-24 object-contain" />
  <hr class="my-3">

  <h2 class="text-3xl text-primary mb-3">{ $t(tp + 'section7.title') }</h2>
  <h3 class="text-xl text-primary mb-1">{ $t(tp + 'section7.subsection.0.title') }</h3>
  <p class="mb-3">{ $t(tp + 'section7.subsection.0.content') }</p>
  <h3 class="text-xl text-primary mb-1">{ $t(tp + 'section7.subsection.1.title') }</h3>
  <p class="mb-3">{ $t(tp + 'section7.subsection.1.content') }</p>
  <h3 class="text-xl text-primary mb-1">{ $t(tp + 'section7.subsection.2.title') }</h3>
  <p class="mb-3">{ $t(tp + 'section7.subsection.2.content') }</p>
  <CloudinaryImage src="products/kalsi/equitone/color4.jpg" alt="color" lazy={ false } class="h-24 object-contain" />
  <hr class="my-3">

  <h2 class="text-3xl text-primary mb-1">{ $t(tp + 'section8.title') }</h2>
  <p class="mb-3">{ $t(tp + 'section8.content1') }</p>
  <h3 class="text-xl text-primary mb-1">{ $t(tp + 'section8.characteristics.title') }</h3>
  <p class="mb-3">
    {#each Array(6) as _, li}
      <li>{ $t(tp + `section8.characteristics.content.${li}`) }</li>
    {/each}
  </p>
  <h3 class="text-xl text-primary mb-1">{ $t(tp + 'section8.benchmark.title') }</h3>
  <p class="mb-1">{ $t(tp + 'section8.benchmark.content') }</p>
  <table class="default-table">
    <thead>
      <tr>
        <th >Materials</th>
        <th >EQUITONE [tectiva]</th>
        <th >EQUITONE [natura] { $t(tp + 'section8.benchmark.and') } EQUITONE [pictura]</th>
        <th >EQUITONE [mineralis]</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td colspan="4" class="!bg-gray-200">{ $t(tp + 'section8.benchmark.subtitle1') }</td>
      </tr>
      <tr>
        <td >{ $t(tp + 'section8.benchmark.density') }</td>
        <td >1580 kg/m<sup>3</sup></td>
        <td >1650 kg/m<sup>3</sup></td>
        <td >1600 kg/m<sup>3</sup></td>
      </tr>
      <tr>
        <td >{ $t(tp + 'section8.benchmark.bend_strength') }</td>
        <td >
          { $t(tp + 'section8.benchmark.lengthwise') } 32 N/mm<sup>2</sup><br/>
          { $t(tp + 'section8.benchmark.transverse') } 22 N/mm<sup>2</sup>
        </td>
        <td >
          { $t(tp + 'section8.benchmark.lengthwise') } 24 N/mm<sup>2</sup><br/>
          { $t(tp + 'section8.benchmark.transverse') } 17 N/mm<sup>2</sup>
        </td>
        <td >
          { $t(tp + 'section8.benchmark.lengthwise') } 18 N/mm<sup>2</sup><br/>
          { $t(tp + 'section8.benchmark.transverse') } 14 N/mm<sup>2</sup>
        </td>
      </tr>
      <tr>
        <td >Modulus elastisitas</td>
        <td >
          { $t(tp + 'section8.benchmark.lengthwise') } 14,000 N/mm<sup>2</sup><br/>
          { $t(tp + 'section8.benchmark.transverse') } 12,000 N/mm<sup>2</sup>
        </td>
        <td >
          { $t(tp + 'section8.benchmark.lengthwise') } 17,000 N/mm<sup>2</sup><br/>
          { $t(tp + 'section8.benchmark.transverse') } 15,000 N/mm<sup>2</sup>
        </td>
        <td >
          { $t(tp + 'section8.benchmark.lengthwise') } 13,220 N/mm<sup>2</sup><br/>
          { $t(tp + 'section8.benchmark.transverse') } 12,250 N/mm<sup>2</sup>
        </td>
      </tr>
      <tr>
        <td >{ $t(tp + 'section8.benchmark.resistance') }</td>
        <td >{ $t(tp + 'section8.benchmark.category', { default: "A" })}</td>
        <td >{ $t(tp + 'section8.benchmark.category', { default: "A" })}</td>
        <td >{ $t(tp + 'section8.benchmark.category', { default: "A" })}</td>
      </tr>
      <tr>
        <td >{ $t(tp + 'section8.benchmark.strength') }</td>
        <td >{ $t(tp + 'section8.benchmark.class', { default: "4" })}</td>
        <td >{ $t(tp + 'section8.benchmark.class', { default: "4" })}</td>
        <td >{ $t(tp + 'section8.benchmark.class', { default: "4" })}</td>
      </tr>
      <tr>
        <td >{ $t(tp + 'section8.benchmark.impermeability') }</td>
        <td >OK</td>
        <td >OK</td>
        <td >OK</td>
      </tr>
      <tr>
        <td >{ $t(tp + 'section8.benchmark.warm_water') }</td>
        <td >OK</td>
        <td >OK</td>
        <td >OK</td>
      </tr>
      <tr>
        <td >{ $t(tp + 'section8.benchmark.absorb') }</td>
        <td >OK</td>
        <td >OK</td>
        <td >OK</td>
      </tr>
      <tr>
        <td >{ $t(tp + 'section8.benchmark.freeze') }</td>
        <td >OK</td>
        <td >OK</td>
        <td >OK</td>
      </tr>

      <tr>
        <td colspan="4" class="!bg-gray-200">{ $t(tp + 'section8.benchmark.subtitle2') }</td>
      </tr>
      <tr>
        <td >EN 13501-1</td>
        <td >{ $t(tp + 'section8.benchmark.class', { default: "A2-s1-d0" })}</td>
        <td >{ $t(tp + 'section8.benchmark.class', { default: "A2-s1-d0" })}</td>
        <td >{ $t(tp + 'section8.benchmark.class', { default: "-" })}</td>
      </tr>
      <tr>
        <td >BS 476: 6</td>
        <td >I = 0.0</td>
        <td >I = 6.7</td>
        <td >I = 2.7</td>
      </tr>
      <tr>
        <td >BS 476: 7</td>
        <td >{ $t(tp + 'section8.benchmark.class', { default: "1" })}</td>
        <td >{ $t(tp + 'section8.benchmark.class', { default: "1" })}</td>
        <td >{ $t(tp + 'section8.benchmark.class', { default: "1" })}</td>
      </tr>

      <tr>
        <td colspan="4" class="!bg-gray-200">{ $t(tp + 'section8.benchmark.subtitle3') }</td>
      </tr>
      <tr>
        <td >{ $t(tp + 'section8.benchmark.hygric') }</td>
        <td >1,6 mm/m</td>
        <td >1,0 mm/m</td>
        <td >2,0 mm/m</td>
      </tr>
      <tr>
        <td >{ $t(tp + 'section8.benchmark.porosity') }</td>
        <td >&lt; 25 %</td>
        <td >&lt; 18 %</td>
        <td >&lt; 26 %</td>
      </tr>
      <tr>
        <td >{ $t(tp + 'section8.benchmark.thermal_expansion') }</td>
        <td >&lt; 0,01 mm/mK</td>
        <td >&lt; 0,01 mm/mK</td>
        <td >&lt; 0,01 mm/mK</td>
      </tr>
      <tr>
        <td >{ $t(tp + 'section8.benchmark.thermal_conductivity') }, λ</td>
        <td >0,390 W/mK</td>
        <td >0,407 W/mK</td>
        <td >0,260 W/mK</td>
      </tr>
    </tbody>
  </table>
  <hr class="my-3">

  <h2 class="text-3xl text-primary mb-3">{ $t(tp + 'section9.title') }</h2>
  <h3 class="text-xl text-primary mb-1">{ $t(tp + 'section9.subsection.0.title') }</h3>
  <p class="mb-3">{ $t(tp + 'section9.subsection.0.content') }</p>
  <h3 class="text-xl text-primary mb-1">{ $t(tp + 'section9.subsection.1.title') }</h3>
  <p class="mb-3">{ $t(tp + 'section9.subsection.1.content') }</p>
  <h3 class="text-xl text-primary mb-1">{ $t(tp + 'section9.subsection.2.title') }</h3>
  <p class="mb-3">{ $t(tp + 'section9.subsection.2.content') }</p>
  <hr class="my-3">
  
  <br />
  <br />
  <p>
    <a href="/pdfs/EQUITONE Brochure - BAHASA.pdf" download target="_blank" rel="noopener noreferrer external" class="visible">
      <CloudinaryImage src="icon_download_catalog.jpg" alt="Download Catalog" widths="200px" />
    </a>
  </p>
</Article>