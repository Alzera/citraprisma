<script lang="ts">
  import { t } from '$lib/translations';
  const tp = 'products.kalsi.'

  import Row from "$lib/components/Row.svelte";
  import Column from "$lib/components/Column.svelte";
  import Article from '$lib/components/Article.svelte';
  import CloudinaryImage from '$lib/components/CloudinaryImage.svelte';
</script>

<Article title={ $t(tp + 'page.title') }>
  <br/>
  <h1 class="text-3xl text-primary mb-1">{ $t(tp + 'section1.title') }</h1>
  <Row>
    <Column cols={ 12 } md={ 7 }>
      <h2 class="text-2xl">{ $t(tp + 'section1.subsection1.title') }</h2>
      <h3 class="text-lg">{ $t(tp + 'section1.subsection1.content') }</h3>
      <table class="default-table">
        <thead>
          <tr>
            <th>{ $t(tp + 'thickness') } (mm)</th>
            <th>{ $t(tp + 'width') } (mm)</th>
            <th>{ $t(tp + 'length') } (mm)</th>
            <th>{ $t(tp + 'weight') } (kg)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>3</td>
            <td>1000</td>
            <td>1000</td>
            <td>4.3</td>
          </tr>
          <tr>
            <td>3</td>
            <td>500</td>
            <td>1000</td>
            <td>2.2</td>
          </tr>
          <tr>
            <td>3</td>
            <td>1000</td>
            <td>2000</td>
            <td>8.6</td>
          </tr>
          <tr>
            <td>3</td>
            <td>500</td>
            <td>2000</td>
            <td>4.3</td>
          </tr>
        </tbody>
      </table>
    </Column>
    <Column cols={ 12 } md={ 5 }>
      <CloudinaryImage class="mx-auto" src="products/kalsi/kalsi3.jpg" alt="kalsi 3" widths="720px" />
    </Column>
  </Row>
  <hr class="my-3">
  <Row>
    <Column cols={ 12 }>
      <h2 class="text-2xl">{ $t(tp + 'section1.subsection2.title') }</h2>
      <h3 class="text-lg">{ $t(tp + 'section1.subsection2.content') }</h3>
    </Column>
    <Column cols={ 12 }>
      <table class="default-table">
        <thead>
          <tr>
            <th>{ $t(tp + 'thickness') } (mm)</th>
            <th>{ $t(tp + 'width') } (mm)</th>
            <th>{ $t(tp + 'length') } (mm)</th>
            <th>{ $t(tp + 'weight') } (kg)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>3.5</td>
            <td>1220</td>
            <td>2440</td>
            <td>14.8</td>
          </tr>
          <tr>
            <td>3.5</td>
            <td>1200</td>
            <td>2400</td>
            <td>13.3</td>
          </tr>
        </tbody>
      </table>
    </Column>
    <Column cols={ 12 }>
      <CloudinaryImage class="mx-auto" src="products/kalsi/kalsi3.5.jpg" alt="kalsi 3.5" widths="720px" />
    </Column>
  </Row>
  <hr class="my-3">
  <Row>
    <Column cols={ 12 } md={ 6 }>
      <h2 class="text-2xl">{ $t(tp + 'section1.subsection3.title') }</h2>
      <h3 class="text-lg">{ $t(tp + 'section1.subsection3.content') }</h3>
      <table class="default-table">
        <thead>
          <tr>
            <th>{ $t(tp + 'thickness') } (mm)</th>
            <th>{ $t(tp + 'width') } (mm)</th>
            <th>{ $t(tp + 'length') } (mm)</th>
            <th>{ $t(tp + 'weight') } (kg)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>4</td>
            <td>1220</td>
            <td>2440</td>
            <td>16.6</td>
          </tr>
          <tr>
            <td>4</td>
            <td>1200</td>
            <td>2400</td>
            <td>16.4</td>
          </tr>
        </tbody>
      </table>
    </Column>
    <Column cols={ 12 } md={ 6 }>
      <CloudinaryImage class="mx-auto" src="products/kalsi/kalsi4.5.jpg" alt="kalsi 4.5" widths="720px md:810px" />
    </Column>
  </Row>
  <hr class="my-3">
  <Row>
    <Column cols={ 12 } md={ 6 }>
      <h2 class="text-2xl">{ $t(tp + 'section1.subsection4.title') }</h2>
      <h3 class="text-lg">{ $t(tp + 'section1.subsection4.content') }</h3>
      <table class="default-table">
        <thead>
          <tr>
            <th>{ $t(tp + 'thickness') } (mm)</th>
            <th>{ $t(tp + 'width') } (mm)</th>
            <th>{ $t(tp + 'length') } (mm)</th>
            <th>{ $t(tp + 'weight') } (kg)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>4.5</td>
            <td>1220</td>
            <td>2440</td>
            <td>19</td>
          </tr>
          <tr>
            <td>4.5</td>
            <td>1200</td>
            <td>2400</td>
            <td>18.4</td>
          </tr>
        </tbody>
      </table>
    </Column>
    <Column cols={ 12 } md={ 6 }>
      <CloudinaryImage class="mx-auto" src="products/kalsi/kalsi4.5.jpg" alt="kalsi 4.5" widths="720px md:810px" />
    </Column>
  </Row>
  <hr class="my-3">
  <Row>
    <Column cols={ 12 } md={ 6 }>
      <h2 class="text-2xl">{ $t(tp + 'section1.subsection5.title') }</h2>
      <h3 class="text-lg">{ $t(tp + 'section1.subsection5.content') }</h3>
      <table class="default-table">
        <thead>
          <tr>
            <th>{ $t(tp + 'thickness') } (mm)</th>
            <th>{ $t(tp + 'width') } (mm)</th>
            <th>{ $t(tp + 'length') } (mm)</th>
            <th>{ $t(tp + 'weight') } (kg)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>6</td>
            <td>1200</td>
            <td>2440</td>
            <td>25.4</td>
          </tr>
          <tr>
            <td>6</td>
            <td>1200</td>
            <td>2400</td>
            <td>24.6</td>
          </tr>
          <tr>
            <td>6</td>
            <td>1200</td>
            <td>2700</td>
            <td>27.6</td>
          </tr>
          <tr>
            <td>6</td>
            <td>1200</td>
            <td>3000</td>
            <td>30.7</td>
          </tr>
        </tbody>
      </table>
    </Column>
    <Column cols={ 12 } md={ 6 }>
      <CloudinaryImage class="mx-auto" src="products/kalsi/kalsi4.5.jpg" alt="kalsi 4.5" widths="720px md:810px" />
    </Column>
  </Row>
  <hr class="my-3">
  <h1 class="text-3xl text-primary mb-1">{ $t(tp + 'section2.title') }</h1>
  <Row>
    <Column cols={ 12 } md={ 6 }>
      <h2 class="text-2xl">{ $t(tp + 'section2.subsection1.title') }</h2>
      <h3 class="text-lg">{ $t(tp + 'section2.subsection1.content') }</h3>
      <table class="default-table">
        <thead>
          <tr>
            <th>{ $t(tp + 'thickness') } (mm)</th>
            <th>{ $t(tp + 'width') } (mm)</th>
            <th>{ $t(tp + 'length') } (mm)</th>
            <th>{ $t(tp + 'weight') } (kg)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>8</td>
            <td>1220</td>
            <td>2440</td>
            <td>33.8</td>
          </tr>
          <tr>
            <td>8</td>
            <td>1200</td>
            <td>2400</td>
            <td>32.7</td>
          </tr>
          <tr>
            <td>8</td>
            <td>1200</td>
            <td>2700</td>
            <td>36.8</td>
          </tr>
          <tr>
            <td>8</td>
            <td>1200</td>
            <td>3000</td>
            <td>40.9</td>
          </tr>
        </tbody>
      </table>
    </Column>
    <Column cols={ 12 } md={ 6 }>
      <CloudinaryImage class="mx-auto" src="products/kalsi/kalsipart.jpg" alt="kalsi part" widths="720px md:810px" />
    </Column>
  </Row>
  <hr class="my-3">
  <h1 class="text-3xl text-primary mb-1">{ $t(tp + 'section3.title') }</h1>
  <Row>
    <Column cols={ 12 }>
      <h2 class="text-2xl">{ $t(tp + 'section3.subsection1.title') }</h2>
      <h3 class="text-lg">{ $t(tp + 'section3.subsection1.content') }</h3>
    </Column>
    <Column cols={ 12 }>
      <table class="default-table">
        <tr>
          <th></th>
          <th>{ $t(tp + 'thickness') } (mm)</th>
          <th>{ $t(tp + 'width') } (mm)</th>
          <th>{ $t(tp + 'length') } (mm)</th>
          <th>{ $t(tp + 'weight') } (kg)</th>
        </tr>
        <tr>
          <th rowspan="2">KalsiPlank 8<br/>KalsiPlank 8-Jati</th>
          <td>8</td>
          <td>200</td>
          <td>3000</td>
          <td>6.8</td>
        </tr>
        <tr>
          <td>8</td>
          <td>300</td>
          <td>3000</td>
          <td>10.2</td>
        </tr>
        <tr>
          <th>KalsiPlank 9<br/>KalsiPlank 9-Cedar</th>
          <td>9</td>
          <td>200</td>
          <td>4000</td>
          <td>10.2</td>
        </tr>
        <tr>
          <th>KalsiPlank 10-IL<br/>KalsiPlank 10-Jati-IL<br/>KalsiPlank 10-Meranti-IL<br/>KalsiPlank 10-Fascia</th>
          <td>10</td>
          <td>200</td>
          <td>3000</td>
          <td>8.5</td>
        </tr>
        <tr>
          <th>KalsiPlank 12-Fascia</th>
          <td>12</td>
          <td>150</td>
          <td>3000</td>
          <td>7.9</td>
        </tr>
      </table>
    </Column>
    <Column cols={ 12 }>
      <CloudinaryImage class="mx-auto" src="products/kalsi/kalsiplank.jpg" alt="kalsi plank" widths="720px md:640px" />
    </Column>
  </Row>
  <hr class="my-3">
  <h1 class="text-3xl text-primary mb-1">{ $t(tp + 'section4.title') }</h1>
  <Row>
    <Column cols={ 12 }>
      <h2 class="text-2xl">{ $t(tp + 'section4.subsection1.title') }</h2>
      <h3 class="text-lg">{ $t(tp + 'section4.subsection1.content') }</h3>
    </Column>
    <Column cols={ 12 }>
      <table class="default-table">
        <thead>
          <tr>
            <th>{ $t(tp + 'thickness') } (mm)</th>
            <th>{ $t(tp + 'width') } (mm)</th>
            <th>{ $t(tp + 'length') } (mm)</th>
            <th>{ $t(tp + 'weight') } (kg)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>10</td>
            <td>1220</td>
            <td>2440</td>
            <td>42.3</td>
          </tr>
          <tr>
            <td>10</td>
            <td>1200</td>
            <td>2400</td>
            <td>40.9</td>
          </tr>
          <tr>
            <td>10</td>
            <td>1200</td>
            <td>2700</td>
            <td>51.1</td>
          </tr>
          <tr>
            <td>12</td>
            <td>1220</td>
            <td>2440</td>
            <td>50.7</td>
          </tr>
          <tr>
            <td>12</td>
            <td>1200</td>
            <td>2400</td>
            <td>49.0</td>
          </tr>
          <tr>
            <td>12</td>
            <td>1200</td>
            <td>2700</td>
            <td>55.2</td>
          </tr>
          <tr>
            <td>12</td>
            <td>1200</td>
            <td>3000</td>
            <td>61.4</td>
          </tr>
        </tbody>
      </table>
    </Column>
    <Column cols={ 12 }>
      <CloudinaryImage class="mx-auto" src="products/kalsi/kalsiclad.jpg" alt="kalsi clad" widths="720px md:640px" />
    </Column>
  </Row>
  <hr class="my-3">
  <h1 class="text-3xl text-primary mb-1">{ $t(tp + 'section5.title') }</h1>
  <Row>
    <Column cols={ 12 } md={ 6 }>
      <h2 class="text-2xl">{ $t(tp + 'section5.subsection1.title') }</h2>
      <h3 class="text-lg">{ $t(tp + 'section5.subsection1.content1') }</h3>
      <h3 class="text-lg">{ $t(tp + 'section5.subsection1.content2') }</h3>
      <table class="default-table">
        <thead>
          <tr>
            <th>{ $t(tp + 'thickness') } (mm)</th>
            <th>{ $t(tp + 'width') } (mm)</th>
            <th>{ $t(tp + 'length') } (mm)</th>
            <th>{ $t(tp + 'weight') } (kg)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>20</td>
            <td>1200</td>
            <td>2400</td>
            <td>81.8</td>
          </tr>
        </tbody>
      </table>
    </Column>
    <Column cols={ 12 } md={ 6 }>
      <CloudinaryImage class="mx-auto" src="products/kalsi/kalsifloor.jpg" alt="kalsi floor" widths="720px md:810px" />
    </Column>
  </Row>
  <hr class="my-3">
  <br />
  <br />
  <p>
    <a href="/pdfs/Kalsi.pdf" download target="_blank" rel="noopener noreferrer external">
      <CloudinaryImage src="icon_download_catalog.jpg" alt="Download Catalog" widths="200px" />
    </a>
  </p>
  <br/>
  <a href="/products/kalsi/equitone" class="block relative rounded-2xl border border-slate-300 overflow-hidden max-w-72">
    <CloudinaryImage class="w-full h-64 object-cover" src="products/kalsi/equitone/img63.jpg" alt="banner equitone" widths="300px" lazy={ false } height={ 300 } crop="fill" />
    <h1 class="text-4xl m-3" style="color:#e1464a">EQUITONE</h1>
    <p class="m-3">Cement board with fiber raw materials</p>
  </a>
</Article>