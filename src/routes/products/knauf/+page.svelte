<script lang="ts">
  import { t } from '$lib/translations';
  const tp = 'products.knauf.'

  import Row from "$lib/components/Row.svelte";
  import Column from "$lib/components/Column.svelte";
  import Article from '$lib/components/Article.svelte';
  import CloudinaryImage from '$lib/components/CloudinaryImage.svelte';

  $: references = [
    "https://www.knauf.co.id/company-profile",
    "https://en.wikipedia.org/wiki/Knauf",
  ]
</script>

<Article title={ $t(tp + 'page.title') }>
  <p class="text-base mb-3">{ $t(tp + 'content') }</p>
  <br/>
  <h1 class="text-3xl text-primary mb-1">{ $t(tp + 'section1.title') }</h1>
  <Row>
    <Column cols={ 12 } class="order-1">
      <h2 class="text-2xl">{ $t(tp + 'section1.subsection1.title') }</h2>
      <h3 class="text-lg">{ $t(tp + 'section1.subsection1.subtitle') }</h3>
    </Column>
    <Column cols={ 12 } md={ 8 } class="order-3 md:order-2 text-base">
      <table class="w-full leading-5">
        <tr>
          <td colspan="2" class="text-center px-3 py-2 bg-gray-200">{ $t(tp + 'specification') }</td>
        </tr>
        <tr>
          <td class="px-3 py-1.5 bg-gray-100">{ $t(tp + 'appearance') }</td>
          <td class="px-3 py-1.5 bg-gray-50">{ $t(tp + 'section1.subsection1.appearance') }</td>
        </tr>
        <tr>
          <td class="px-3 py-1.5 bg-gray-100">{ $t(tp + 'thickness') }</td>
          <td class="px-3 py-1.5 bg-gray-50">9mm { $t(tp + 'and') } 12mm</td>
        </tr>
        <tr>
          <td class="px-3 py-1.5 bg-gray-100">{ $t(tp + 'weight') }</td>
          <td class="px-3 py-1.5 bg-gray-50">
            9mm : nominal 6,3 kg/m<br>
            12mm : nominal 8,4 kg/m
          </td>
        </tr>
        <tr>
          <td class="px-3 py-1.5 bg-gray-100">{ $t(tp + 'width') }</td>
          <td class="px-3 py-1.5 bg-gray-50">1200mm { $t(tp + 'and') } 1220mm</td>
        </tr>
        <tr>
          <td class="px-3 py-1.5 bg-gray-100">{ $t(tp + 'edge') }</td>
          <td class="px-3 py-1.5 bg-gray-50">{ $t(tp + 'section1.subsection1.edge') }</td>
        </tr>
        <tr>
          <td class="px-3 py-1.5 bg-gray-100">{ $t(tp + 'length') }</td>
          <td class="px-3 py-1.5 bg-gray-50">2400mm { $t(tp + 'and') } 2440mm</td>
        </tr>
        <tr>
          <td class="px-3 py-1.5 bg-gray-100">{ $t(tp + 'standards') }</td>
          <td class="px-3 py-1.5 bg-gray-50">ASTM C1396</td>
        </tr>
      </table>
    </Column>
    <Column cols={ 12 } md={ 4 } class="order-2 md:order-3">
      <CloudinaryImage class="mx-auto" src="products/knauf/standardboard.jpg" alt="knauf standardboard" widths="300px md:270px" />
    </Column>
  </Row>
  <hr class="my-3">
  <Row>
    <Column cols={ 12 } class="order-1">
      <h2 class="text-2xl">{ $t(tp + 'section1.subsection2.title') }</h2>
      <h3 class="text-lg">{ $t(tp + 'section1.subsection2.subtitle') }</h3>
    </Column>
    <Column cols={ 12 } md={ 8 } class="order-3 md:order-2 text-base">
      <table class="w-full leading-5">
        <tr>
          <td colspan="2" class="text-center px-3 py-2 bg-gray-200">{ $t(tp + 'feature') }</td>
        </tr>
        <tr>
          <td colspan="2" class="px-3 py-2 bg-gray-50">
            <ul class="leading-7">
              {#each Array(2) as _, i}
                <li>{ $t(tp + `section1.subsection2.feature.${i}`) }</li>
              {/each}
            </ul>
          </td>
        </tr>
        <tr>
          <td colspan="2" class="text-center px-3 py-2 bg-gray-200">{ $t(tp + 'specification') }</td>
        </tr>
        <tr>
          <td class="px-3 py-1.5 bg-gray-100">{ $t(tp + 'appearance') }</td>
          <td class="px-3 py-1.5 bg-gray-50">{ $t(tp + 'section1.subsection2.appearance') }</td>
        </tr>
        <tr>
          <td class="px-3 py-1.5 bg-gray-100">{ $t(tp + 'thickness') }</td>
          <td class="px-3 py-1.5 bg-gray-50">9mm, 12mm { $t(tp + 'and') } 15mm</td>
        </tr>
        <tr>
          <td class="px-3 py-1.5 bg-gray-100">{ $t(tp + 'weight') }</td>
          <td class="px-3 py-1.5 bg-gray-50">
            9mm : nominal 6,3 kg/m<br>
            12mm : nominal 8,4 kg/m<br>
            15mm : nominal 10,9 kg/m
          </td>
        </tr>
        <tr>
          <td class="px-3 py-1.5 bg-gray-100">{ $t(tp + 'width') }</td>
          <td class="px-3 py-1.5 bg-gray-50">1200mm { $t(tp + 'and') } 1220mm</td>
        </tr>
        <tr>
          <td class="px-3 py-1.5 bg-gray-100">{ $t(tp + 'edge') }</td>
          <td class="px-3 py-1.5 bg-gray-50">Tapered Edge</td>
        </tr>
        <tr>
          <td class="px-3 py-1.5 bg-gray-100">{ $t(tp + 'length') }</td>
          <td class="px-3 py-1.5 bg-gray-50">2400mm { $t(tp + 'and') } 2440mm</td>
        </tr>
        <tr>
          <td class="px-3 py-1.5 bg-gray-100">{ $t(tp + 'standards') }</td>
          <td class="px-3 py-1.5 bg-gray-50">ASTM C1396</td>
        </tr>
      </table>
    </Column>
    <Column cols={ 12 } md={ 4 } class="order-2 md:order-3">
      <CloudinaryImage class="mx-auto" src="products/knauf/moistureshield.jpg" alt="knauf moistureshield" widths="300px md:270px" />
    </Column>
  </Row>
  <hr class="my-3">
  <Row>
    <Column cols={ 12 } class="order-1">
      <h2 class="text-2xl">{ $t(tp + 'section1.subsection3.title') }</h2>
      <h3 class="text-lg">{ $t(tp + 'section1.subsection3.subtitle') }</h3>
    </Column>
    <Column cols={ 12 } md={ 8 } class="order-3 md:order-2 text-base">
      <table class="w-full leading-5">
        <tr>
          <td colspan="2" class="text-center px-3 py-2 bg-gray-200">{ $t(tp + 'feature') }</td>
        </tr>
        <tr>
          <td colspan="2" class="px-3 py-2 bg-gray-50">
            <ul class="leading-7">
              {#each Array(2) as _, i}
                <li>{ $t(tp + `section1.subsection3.feature.${i}`) }</li>
              {/each}
            </ul>
          </td>
        </tr>
        <tr>
          <td colspan="2" class="text-center px-3 py-2 bg-gray-200">{ $t(tp + 'specification') }</td>
        </tr>
        <tr>
          <td class="px-3 py-1.5 bg-gray-100">{ $t(tp + 'appearance') }</td>
          <td class="px-3 py-1.5 bg-gray-50">{ $t(tp + 'section1.subsection3.appearance') }</td>
        </tr>
        <tr>
          <td class="px-3 py-1.5 bg-gray-100">{ $t(tp + 'thickness') }</td>
          <td class="px-3 py-1.5 bg-gray-50">12mm { $t(tp + 'and') } 15mm</td>
        </tr>
        <tr>
          <td class="px-3 py-1.5 bg-gray-100">{ $t(tp + 'weight') }</td>
          <td class="px-3 py-1.5 bg-gray-50">
            12mm : nominal 11,3 kg/m<sup>3</sup><br>
            15mm : nominal 14,12 kg/m<sup>3</sup>
          </td>
        </tr>
        <tr>
          <td class="px-3 py-1.5 bg-gray-100">{ $t(tp + 'width') }</td>
          <td class="px-3 py-1.5 bg-gray-50">1200mm { $t(tp + 'and') } 1220mm</td>
        </tr>
        <tr>
          <td class="px-3 py-1.5 bg-gray-100">{ $t(tp + 'edge') }</td>
          <td class="px-3 py-1.5 bg-gray-50">Tapered Edge</td>
        </tr>
        <tr>
          <td class="px-3 py-1.5 bg-gray-100">{ $t(tp + 'length') }</td>
          <td class="px-3 py-1.5 bg-gray-50">2400mm { $t(tp + 'and') } 2440mm</td>
        </tr>
        <tr>
          <td class="px-3 py-1.5 bg-gray-100">{ $t(tp + 'standards') }</td>
          <td class="px-3 py-1.5 bg-gray-50">BS 5234 : Part 2 : 1992</td>
        </tr>
      </table>
    </Column>
    <Column cols={ 12 } md={ 4 } class="order-2 md:order-3">
      <CloudinaryImage class="mx-auto" src="products/knauf/densishield.jpg" alt="knauf densishield" widths="300px md:270px" />
    </Column>
  </Row>
  <hr class="my-3">
  <Row>
    <Column cols={ 12 } class="order-1">
      <h2 class="text-2xl">{ $t(tp + 'section1.subsection4.title') }</h2>
      <h3 class="text-lg">{ $t(tp + 'section1.subsection4.subtitle') }</h3>
    </Column>
    <Column cols={ 12 } md={ 8 } class="order-3 md:order-2 text-base">
      <table class="w-full leading-5">
        <tr>
          <td colspan="2" class="text-center px-3 py-2 bg-gray-200">{ $t(tp + 'feature') }</td>
        </tr>
        <tr>
          <td colspan="2" class="px-3 py-2 bg-gray-50">
            <ul class="leading-7">
              {#each Array(2) as _, i}
                <li>{ $t(tp + `section1.subsection4.feature.${i}`) }</li>
              {/each}
            </ul>
          </td>
        </tr>
        <tr>
          <td colspan="2" class="text-center px-3 py-2 bg-gray-200">{ $t(tp + 'specification') }</td>
        </tr>
        <tr>
          <td class="px-3 py-1.5 bg-gray-100">{ $t(tp + 'appearance') }</td>
          <td class="px-3 py-1.5 bg-gray-50">{ $t(tp + 'section1.subsection4.appearance') }</td>
        </tr>
        <tr>
          <td class="px-3 py-1.5 bg-gray-100">{ $t(tp + 'board_density') }</td>
          <td class="px-3 py-1.5 bg-gray-50">885 kg/m<sup>3</sup></td>
        </tr>
        <tr>
          <td class="px-3 py-1.5 bg-gray-100">{ $t(tp + 'weight') }</td>
          <td class="px-3 py-1.5 bg-gray-50">
            12mm : nominal 11,3 kg/m<sup>3</sup><br>
            15mm : nominal 14,12 kg/m<sup>3</sup>
          </td>
        </tr>
        <tr>
          <td class="px-3 py-1.5 bg-gray-100">{ $t(tp + 'edge') }</td>
          <td class="px-3 py-1.5 bg-gray-50">Tapered Edge</td>
        </tr>
        <tr>
          <td class="px-3 py-1.5 bg-gray-100">{ $t(tp + 'dimension_metric') }</td>
          <td class="px-3 py-1.5 bg-gray-50">
            12mm x 1200mm x 2400mm<br>
            15mm x 1200mm x 2400mm
          </td>
        </tr>
        <tr>
          <td class="px-3 py-1.5 bg-gray-100">{ $t(tp + 'standards') }</td>
          <td class="px-3 py-1.5 bg-gray-50">ASTM C1396</td>
        </tr>
        <tr>
          <td class="px-3 py-1.5 bg-gray-100"></td>
          <td class="px-3 py-1.5 bg-gray-50">
            K : 0,24 w/mk<br>
            R : 12mm = 0,05 m<sup>2</sup> k/w<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;15mm = 0,06 m<sup>2</sup> k/w
          </td>
        </tr>
      </table>
    </Column>
    <Column cols={ 12 } md={ 4 } class="order-2 md:order-3">
      <CloudinaryImage class="mx-auto" src="products/knauf/fireshield.jpg" alt="knauf fireshield" widths="300px md:270px" />
    </Column>
  </Row>
  <hr class="my-3">

  <h1 class="text-3xl text-primary mb-1">{ $t(tp + 'section2.title') }</h1>
  <Row>
    <Column cols={ 12 }>
      <h2 class="text-2xl">{ $t(tp + 'section2.subsection1.title') }</h2>
      <h3 class="text-lg">{ $t(tp + 'section2.subsection1.subtitle') }</h3>
    </Column>
    <Column cols={ 12 } class="text-base">
      <table class="w-full leading-5">
        <tr>
          <td colspan="2" class="text-center px-3 py-2 bg-gray-200">{ $t(tp + 'feature') }</td>
        </tr>
        <tr>
          <td colspan="2" class="px-3 py-2 bg-gray-50">
            <ul class="leading-7">
              {#each Array(2) as _, i}
                <li>{ $t(tp + `section2.subsection1.feature.${i}`) }</li>
              {/each}
            </ul>
          </td>
        </tr>
        <tr>
          <td colspan="2" class="text-center px-3 py-2 bg-gray-200">{ $t(tp + 'specification') }</td>
        </tr>
        <tr>
          <td class="px-3 py-1.5 bg-gray-100">{ $t(tp + 'dry_time') }</td>
          <td class="px-3 py-1.5 bg-gray-50">25 - 35 { $t(tp + 'minutes') }</td>
        </tr>
        <tr>
          <td class="px-3 py-1.5 bg-gray-100">{ $t(tp + 'compressive_durability') }</td>
          <td class="px-3 py-1.5 bg-gray-50">5 MPa</td>
        </tr>
        <tr>
          <td class="px-3 py-1.5 bg-gray-100">{ $t(tp + 'ratio_water_plaster') }</td>
          <td class="px-3 py-1.5 bg-gray-50">0,65 air : 1 plaster</td>
        </tr>
        <tr>
          <td class="px-3 py-1.5 bg-gray-100">{ $t(tp + 'lifetime') }</td>
          <td class="px-3 py-1.5 bg-gray-50">6 { $t(tp + 'months') }</td>
        </tr>
      </table>
    </Column>
  </Row>
  <hr class="my-3">
  <Row>
    <Column cols={ 12 }>
      <h2 class="text-2xl">{ $t(tp + 'section2.subsection2.title') }</h2>
      <h3 class="text-lg">{ $t(tp + 'section2.subsection2.subtitle') }</h3>
    </Column>
    <Column cols={ 12 } class="text-base">
      <table class="w-full leading-5">
        <tr>
          <td colspan="2" class="text-center px-3 py-2 bg-gray-200">{ $t(tp + 'feature') }</td>
        </tr>
        <tr>
          <td colspan="2" class="px-3 py-2 bg-gray-50">
            <ul class="leading-7">
              {#each Array(2) as _, i}
                <li>{ $t(tp + `section2.subsection2.feature.${i}`) }</li>
              {/each}
            </ul>
          </td>
        </tr>
        <tr>
          <td colspan="2" class="text-center px-3 py-2 bg-gray-200">{ $t(tp + 'usage') }</td>
        </tr>
        <tr>
          <td colspan="2" class="px-3 py-2 bg-gray-50">{ $t(tp + 'section2.subsection2.usage') }</td>
        </tr>
        <tr>
          <td colspan="2" class="text-center px-3 py-2 bg-gray-200">{ $t(tp + 'specification') }</td>
        </tr>
        <tr>
          <td class="px-3 py-1.5 bg-gray-100">{ $t(tp + 'dry_time') }</td>
          <td class="px-3 py-1.5 bg-gray-50">10 - 20 { $t(tp + 'minutes') }</td>
        </tr>
        <tr>
          <td class="px-3 py-1.5 bg-gray-100">{ $t(tp + 'compressive_durability') }</td>
          <td class="px-3 py-1.5 bg-gray-50">16,55 MN/m<sup>2</sup></td>
        </tr>
        <tr>
          <td class="px-3 py-1.5 bg-gray-100">{ $t(tp + 'ratio_water_plaster') }</td>
          <td class="px-3 py-1.5 bg-gray-50">0,65 air : 1 plaster</td>
        </tr>
        <tr>
          <td class="px-3 py-1.5 bg-gray-100">{ $t(tp + 'lifetime') }</td>
          <td class="px-3 py-1.5 bg-gray-50">6 { $t(tp + 'months') }</td>
        </tr>
        <tr>
          <td class="px-3 py-1.5 bg-gray-100">{ $t(tp + 'wet_density') }</td>
          <td class="px-3 py-1.5 bg-gray-50">1,6 g/cm<sup>3</sup></td>
        </tr>
        <tr>
          <td class="px-3 py-1.5 bg-gray-100">{ $t(tp + 'dry_density') }</td>
          <td class="px-3 py-1.5 bg-gray-50">1,16 g/cm<sup>3</sup></td>
        </tr>
      </table>
    </Column>
  </Row>
  <br />
  <br />
  <p class="text-base">
    <a href="/pdfs/Knauf.pdf" download target="_blank" rel="noopener noreferrer external" class="visible">Download Catalog</a>
    <br />
    Reference :
    <br />
  </p>
  <ul class="text-base">
    {#each references as item, i}
      <li><a href={ item } target="_blank" rel="noopener noreferrer" class="visible">{ item }</a></li>
    {/each}
  </ul>
</Article>