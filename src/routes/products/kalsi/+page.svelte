<script lang="ts">
  import { t } from '$lib/translations';
  const tp = 'products.kalsi.'

  import Row from "$lib/components/Row.svelte";
  import Column from "$lib/components/Column.svelte";
  import Article from '$lib/components/Article.svelte';
  import CloudinaryImage from '$lib/components/CloudinaryImage.svelte';

  const tableHead = "px-3 py-1.5 bg-gray-100",
        tableContent = "px-3 py-1.5 bg-gray-50"
</script>

<Article title={ $t(tp + 'page.title') }>
  <br/>
  <h1 class="text-3xl text-primary mb-1">{ $t(tp + 'section1.title') }</h1>
  <Row>
    <Column cols={ 12 } class="order-1">
      <h2 class="text-2xl">{ $t(tp + 'section1.subsection1.title') }</h2>
      <h3 class="text-lg">{ $t(tp + 'section1.subsection1.content') }</h3>
    </Column>
    <Column cols={ 12 } md={ 8 } class="order-3 md:order-2 text-base">
      <table class="w-full leading-5">
        <thead>
          <tr>
            <th class={tableHead}>{ $t(tp + 'thickness') } (mm)</th>
            <th class={tableHead}>{ $t(tp + 'width') } (mm)</th>
            <th class={tableHead}>{ $t(tp + 'length') } (mm)</th>
            <th class={tableHead}>{ $t(tp + 'weight') } (kg)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class={tableContent}>3</td>
            <td class={tableContent}>1000</td>
            <td class={tableContent}>1000</td>
            <td class={tableContent}>4.3</td>
          </tr>
          <tr>
            <td class={tableContent}>3</td>
            <td class={tableContent}>500</td>
            <td class={tableContent}>1000</td>
            <td class={tableContent}>2.2</td>
          </tr>
          <tr>
            <td class={tableContent}>3</td>
            <td class={tableContent}>1000</td>
            <td class={tableContent}>2000</td>
            <td class={tableContent}>8.6</td>
          </tr>
          <tr>
            <td class={tableContent}>3</td>
            <td class={tableContent}>500</td>
            <td class={tableContent}>2000</td>
            <td class={tableContent}>4.3</td>
          </tr>
        </tbody>
      </table>
    </Column>
    <Column cols={ 12 } md={ 4 } class="order-2 md:order-3">
      <CloudinaryImage class="mx-auto" src="products/kalsi/standardboard.jpg" alt="kalsi standardboard" widths="300px md:270px" />
    </Column>
  </Row>
  <hr class="my-3">
  <Row>
    <Column cols={ 12 } class="order-1">
      <h2 class="text-2xl">{ $t(tp + 'section1.subsection2.title') }</h2>
      <h3 class="text-lg">{ $t(tp + 'section1.subsection2.content') }</h3>
    </Column>
    <Column cols={ 12 } md={ 8 } class="order-3 md:order-2 text-base">
      <table class="w-full leading-5">
        <thead>
          <tr>
            <th class={tableHead}>{ $t(tp + 'thickness') } (mm)</th>
            <th class={tableHead}>{ $t(tp + 'width') } (mm)</th>
            <th class={tableHead}>{ $t(tp + 'length') } (mm)</th>
            <th class={tableHead}>{ $t(tp + 'weight') } (kg)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class={tableContent}>3.5</td>
            <td class={tableContent}>1220</td>
            <td class={tableContent}>2440</td>
            <td class={tableContent}>14.8</td>
          </tr>
          <tr>
            <td class={tableContent}>3.5</td>
            <td class={tableContent}>1200</td>
            <td class={tableContent}>2400</td>
            <td class={tableContent}>13.3</td>
          </tr>
        </tbody>
      </table>
    </Column>
    <Column cols={ 12 } md={ 4 } class="order-2 md:order-3">
      <CloudinaryImage class="mx-auto" src="products/kalsi/standardboard.jpg" alt="kalsi standardboard" widths="300px md:270px" />
    </Column>
  </Row>
  <hr class="my-3">
  <Row>
    <Column cols={ 12 } class="order-1">
      <h2 class="text-2xl">{ $t(tp + 'section1.subsection3.title') }</h2>
      <h3 class="text-lg">{ $t(tp + 'section1.subsection3.content') }</h3>
    </Column>
    <Column cols={ 12 } md={ 8 } class="order-3 md:order-2 text-base">
      <table class="w-full leading-5">
        <thead>
          <tr>
            <th class={tableHead}>{ $t(tp + 'thickness') } (mm)</th>
            <th class={tableHead}>{ $t(tp + 'width') } (mm)</th>
            <th class={tableHead}>{ $t(tp + 'length') } (mm)</th>
            <th class={tableHead}>{ $t(tp + 'weight') } (kg)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class={tableContent}>4</td>
            <td class={tableContent}>1220</td>
            <td class={tableContent}>2440</td>
            <td class={tableContent}>16.6</td>
          </tr>
          <tr>
            <td class={tableContent}>4</td>
            <td class={tableContent}>1200</td>
            <td class={tableContent}>2400</td>
            <td class={tableContent}>16.4</td>
          </tr>
        </tbody>
      </table>
    </Column>
    <Column cols={ 12 } md={ 4 } class="order-2 md:order-3">
      <CloudinaryImage class="mx-auto" src="products/kalsi/standardboard.jpg" alt="kalsi standardboard" widths="300px md:270px" />
    </Column>
  </Row>
  <hr class="my-3">
  <Row>
    <Column cols={ 12 } class="order-1">
      <h2 class="text-2xl">{ $t(tp + 'section1.subsection4.title') }</h2>
      <h3 class="text-lg">{ $t(tp + 'section1.subsection4.content') }</h3>
    </Column>
    <Column cols={ 12 } md={ 8 } class="order-3 md:order-2 text-base">
      <table class="w-full leading-5">
        <thead>
          <tr>
            <th class={tableHead}>{ $t(tp + 'thickness') } (mm)</th>
            <th class={tableHead}>{ $t(tp + 'width') } (mm)</th>
            <th class={tableHead}>{ $t(tp + 'length') } (mm)</th>
            <th class={tableHead}>{ $t(tp + 'weight') } (kg)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class={tableContent}>4.5</td>
            <td class={tableContent}>1220</td>
            <td class={tableContent}>2440</td>
            <td class={tableContent}>19</td>
          </tr>
          <tr>
            <td class={tableContent}>4.5</td>
            <td class={tableContent}>1200</td>
            <td class={tableContent}>2400</td>
            <td class={tableContent}>18.4</td>
          </tr>
        </tbody>
      </table>
    </Column>
    <Column cols={ 12 } md={ 4 } class="order-2 md:order-3">
      <CloudinaryImage class="mx-auto" src="products/kalsi/standardboard.jpg" alt="kalsi standardboard" widths="300px md:270px" />
    </Column>
  </Row>
  <hr class="my-3">
  <Row>
    <Column cols={ 12 } class="order-1">
      <h2 class="text-2xl">{ $t(tp + 'section1.subsection5.title') }</h2>
      <h3 class="text-lg">{ $t(tp + 'section1.subsection5.content') }</h3>
    </Column>
    <Column cols={ 12 } md={ 8 } class="order-3 md:order-2 text-base">
      <table class="w-full leading-5">
        <thead>
          <tr>
            <th class={tableHead}>{ $t(tp + 'thickness') } (mm)</th>
            <th class={tableHead}>{ $t(tp + 'width') } (mm)</th>
            <th class={tableHead}>{ $t(tp + 'length') } (mm)</th>
            <th class={tableHead}>{ $t(tp + 'weight') } (kg)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class={tableContent}>6</td>
            <td class={tableContent}>1200</td>
            <td class={tableContent}>2440</td>
            <td class={tableContent}>25.4</td>
          </tr>
          <tr>
            <td class={tableContent}>6</td>
            <td class={tableContent}>1200</td>
            <td class={tableContent}>2400</td>
            <td class={tableContent}>24.6</td>
          </tr>
          <tr>
            <td class={tableContent}>6</td>
            <td class={tableContent}>1200</td>
            <td class={tableContent}>2700</td>
            <td class={tableContent}>27.6</td>
          </tr>
          <tr>
            <td class={tableContent}>6</td>
            <td class={tableContent}>1200</td>
            <td class={tableContent}>3000</td>
            <td class={tableContent}>30.7</td>
          </tr>
        </tbody>
      </table>
    </Column>
    <Column cols={ 12 } md={ 4 } class="order-2 md:order-3">
      <CloudinaryImage class="mx-auto" src="products/kalsi/standardboard.jpg" alt="kalsi standardboard" widths="300px md:270px" />
    </Column>
  </Row>
  <hr class="my-3">
  <h1 class="text-3xl text-primary mb-1">{ $t(tp + 'section2.title') }</h1>
  <Row>
    <Column cols={ 12 } class="order-1">
      <h2 class="text-2xl">{ $t(tp + 'section2.subsection1.title') }</h2>
      <h3 class="text-lg">{ $t(tp + 'section2.subsection1.content') }</h3>
    </Column>
    <Column cols={ 12 } md={ 8 } class="order-3 md:order-2 text-base">
      <table class="w-full leading-5">
        <thead>
          <tr>
            <th class={tableHead}>{ $t(tp + 'thickness') } (mm)</th>
            <th class={tableHead}>{ $t(tp + 'width') } (mm)</th>
            <th class={tableHead}>{ $t(tp + 'length') } (mm)</th>
            <th class={tableHead}>{ $t(tp + 'weight') } (kg)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class={tableContent}>8</td>
            <td class={tableContent}>1220</td>
            <td class={tableContent}>2440</td>
            <td class={tableContent}>33.8</td>
          </tr>
          <tr>
            <td class={tableContent}>8</td>
            <td class={tableContent}>1200</td>
            <td class={tableContent}>2400</td>
            <td class={tableContent}>32.7</td>
          </tr>
          <tr>
            <td class={tableContent}>8</td>
            <td class={tableContent}>1200</td>
            <td class={tableContent}>2700</td>
            <td class={tableContent}>36.8</td>
          </tr>
          <tr>
            <td class={tableContent}>8</td>
            <td class={tableContent}>1200</td>
            <td class={tableContent}>3000</td>
            <td class={tableContent}>40.9</td>
          </tr>
        </tbody>
      </table>
    </Column>
    <Column cols={ 12 } md={ 4 } class="order-2 md:order-3">
      <CloudinaryImage class="mx-auto" src="products/kalsi/standardboard.jpg" alt="kalsi standardboard" widths="300px md:270px" />
    </Column>
  </Row>
  <hr class="my-3">
  <h1 class="text-3xl text-primary mb-1">{ $t(tp + 'section3.title') }</h1>
  <Row>
    <Column cols={ 12 } class="order-1">
      <h2 class="text-2xl">{ $t(tp + 'section3.subsection1.title') }</h2>
      <h3 class="text-lg">{ $t(tp + 'section3.subsection1.content') }</h3>
    </Column>
    <Column cols={ 12 } md={ 8 } class="order-3 md:order-2 text-base">
      <table class="w-full leading-5">
        <tr>
          <th class={tableHead}></th>
          <th class={tableHead}>{ $t(tp + 'thickness') } (mm)</th>
          <th class={tableHead}>{ $t(tp + 'width') } (mm)</th>
          <th class={tableHead}>{ $t(tp + 'length') } (mm)</th>
          <th class={tableHead}>{ $t(tp + 'weight') } (kg)</th>
        </tr>
        <tr>
          <th class={tableContent} rowspan="2">KalsiPlank 8<br/>KalsiPlank 8-Jati</th>
          <td class={tableContent}>8</td>
          <td class={tableContent}>200</td>
          <td class={tableContent}>3000</td>
          <td class={tableContent}>6.8</td>
        </tr>
        <tr>
          <td class={tableContent}>8</td>
          <td class={tableContent}>300</td>
          <td class={tableContent}>3000</td>
          <td class={tableContent}>10.2</td>
        </tr>
        <tr>
          <th class={tableContent}>KalsiPlank 9<br/>KalsiPlank 9-Cedar</th>
          <td class={tableContent}>9</td>
          <td class={tableContent}>200</td>
          <td class={tableContent}>4000</td>
          <td class={tableContent}>10.2</td>
        </tr>
        <tr>
          <th class={tableContent}>KalsiPlank 10-IL<br/>KalsiPlank 10-Jati-IL<br/>KalsiPlank 10-Meranti-IL<br/>KalsiPlank 10-Fascia</th>
          <td class={tableContent}>10</td>
          <td class={tableContent}>200</td>
          <td class={tableContent}>3000</td>
          <td class={tableContent}>8.5</td>
        </tr>
        <tr>
          <th class={tableContent}>KalsiPlank 12-Fascia</th>
          <td class={tableContent}>12</td>
          <td class={tableContent}>150</td>
          <td class={tableContent}>3000</td>
          <td class={tableContent}>7.9</td>
        </tr>
      </table>
    </Column>
    <Column cols={ 12 } md={ 4 } class="order-2 md:order-3">
      <CloudinaryImage class="mx-auto" src="products/kalsi/standardboard.jpg" alt="kalsi standardboard" widths="300px md:270px" />
    </Column>
  </Row>
  <hr class="my-3">
  <h1 class="text-3xl text-primary mb-1">{ $t(tp + 'section4.title') }</h1>
  <Row>
    <Column cols={ 12 } class="order-1">
      <h2 class="text-2xl">{ $t(tp + 'section4.subsection1.title') }</h2>
      <h3 class="text-lg">{ $t(tp + 'section4.subsection1.content') }</h3>
    </Column>
    <Column cols={ 12 } md={ 8 } class="order-3 md:order-2 text-base">
      <table class="w-full leading-5">
        <thead>
          <tr>
            <th class={tableHead}>{ $t(tp + 'thickness') } (mm)</th>
            <th class={tableHead}>{ $t(tp + 'width') } (mm)</th>
            <th class={tableHead}>{ $t(tp + 'length') } (mm)</th>
            <th class={tableHead}>{ $t(tp + 'weight') } (kg)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class={tableContent}>10</td>
            <td class={tableContent}>1220</td>
            <td class={tableContent}>2440</td>
            <td class={tableContent}>42.3</td>
          </tr>
          <tr>
            <td class={tableContent}>10</td>
            <td class={tableContent}>1200</td>
            <td class={tableContent}>2400</td>
            <td class={tableContent}>40.9</td>
          </tr>
          <tr>
            <td class={tableContent}>10</td>
            <td class={tableContent}>1200</td>
            <td class={tableContent}>2700</td>
            <td class={tableContent}>51.1</td>
          </tr>
          <tr>
            <td class={tableContent}>12</td>
            <td class={tableContent}>1220</td>
            <td class={tableContent}>2440</td>
            <td class={tableContent}>50.7</td>
          </tr>
          <tr>
            <td class={tableContent}>12</td>
            <td class={tableContent}>1200</td>
            <td class={tableContent}>2400</td>
            <td class={tableContent}>49.0</td>
          </tr>
          <tr>
            <td class={tableContent}>12</td>
            <td class={tableContent}>1200</td>
            <td class={tableContent}>2700</td>
            <td class={tableContent}>55.2</td>
          </tr>
          <tr>
            <td class={tableContent}>12</td>
            <td class={tableContent}>1200</td>
            <td class={tableContent}>3000</td>
            <td class={tableContent}>61.4</td>
          </tr>
        </tbody>
      </table>
    </Column>
    <Column cols={ 12 } md={ 4 } class="order-2 md:order-3">
      <CloudinaryImage class="mx-auto" src="products/kalsi/standardboard.jpg" alt="kalsi standardboard" widths="300px md:270px" />
    </Column>
  </Row>
  <hr class="my-3">
  <h1 class="text-3xl text-primary mb-1">{ $t(tp + 'section4.title') }</h1>
  <Row>
    <Column cols={ 12 } class="order-1">
      <h2 class="text-2xl">{ $t(tp + 'section5.subsection1.title') }</h2>
      <h3 class="text-lg">{ $t(tp + 'section5.subsection1.content1') }</h3>
      <h3 class="text-lg">{ $t(tp + 'section5.subsection1.content2') }</h3>
    </Column>
    <Column cols={ 12 } md={ 8 } class="order-3 md:order-2 text-base">
      <table class="w-full leading-5">
        <thead>
          <tr>
            <th class={tableHead}>{ $t(tp + 'thickness') } (mm)</th>
            <th class={tableHead}>{ $t(tp + 'width') } (mm)</th>
            <th class={tableHead}>{ $t(tp + 'length') } (mm)</th>
            <th class={tableHead}>{ $t(tp + 'weight') } (kg)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class={tableContent}>20</td>
            <td class={tableContent}>1200</td>
            <td class={tableContent}>2400</td>
            <td class={tableContent}>81.8</td>
          </tr>
        </tbody>
      </table>
    </Column>
    <Column cols={ 12 } md={ 4 } class="order-2 md:order-3">
      <CloudinaryImage class="mx-auto" src="products/kalsi/standardboard.jpg" alt="kalsi standardboard" widths="300px md:270px" />
    </Column>
  </Row>
  <hr class="my-3">
  <br />
  <br />
  <p>
    <a href="/pdfs/Kalsi.pdf" download target="_blank" rel="noopener noreferrer external" class="visible">
      <CloudinaryImage src="icon_download_catalog.jpg" alt="Download Catalog" widths="200px" />
    </a>
  </p>
</Article>