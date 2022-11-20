<script lang="ts">
  import { t } from '$lib/translations';
  const tp = 'products.onduline.bituline.'

  import { mq } from '$lib/mediaquery';

  import Row from "$lib/components/Row.svelte";
  import Column from "$lib/components/Column.svelte";
  import Article from '$lib/components/Article.svelte';
  import CloudinaryImage from '$lib/components/CloudinaryImage.svelte';

  const videos = [
    { video: "https://drive.google.com/file/d/1wwSwR2jtKcIvnA3hhjejcLQqJdnUig8S/preview", img: "panduan_pemasangan_membrane_bakar_bituline.png", text: "Bituline combustion membrane installation guide" },
  ]
  let dialog: HTMLDialogElement, iframe: HTMLIFrameElement
  function showDialog(item: any){
    iframe.src = item.video
    dialog.showModal()
  }
  function handleBackdrop(e: any){
    var rect = dialog.getBoundingClientRect();
    if (!(rect.top <= e.clientY && e.clientY <= rect.top + rect.height
      && rect.left <= e.clientX && e.clientX <= rect.left + rect.width)) {
        dialog.close();
    }
  }
</script>

<CloudinaryImage src="products/onduline/img635.jpg" alt="Banner" 
  widths="600px md:1024px" 
  crop="fill" 
  lazy={ false }
  height={ 400 }
  style={ $mq.mobile ? 'height:250px' : 'height:400px' }
  class="w-vw-center object-cover h-52 md:h-88" />
<Article 
  title={ $t(tp + 'page.title') } 
  subtitle={ $t(tp + 'page.description') }>
  <p class="text-base mb-5">{ $t(tp + 'content') }</p>
  <h2 class="text-2xl mb-2">BITULINE® PP300</h2>
  <Row class="mb-2">
    <Column cols={ 12 } md={ 6 } class="md:order-2">
      <CloudinaryImage class="w-full max-w-84 md:max-w-none mx-auto object-contain" src="products/onduline/img29.jpg" alt="BITULINE® PP300 Image" widths="300px" lazy={ false } height={ 200 } />
    </Column>
    <Column cols={ 12 } md={ 6 } class="md:order-1">
      <table class="w-full text-lg custom">
        <tr>
          <th>{ $t(tp + "type") }</th>
          <td>PP300</td>
        </tr>
        <tr>
          <th>{ $t(tp + "length") } (mm)</th>
          <td>10.000</td>
        </tr>
        <tr>
          <th>{ $t(tp + "width") } (mm)</th>
          <td>1.000</td>
        </tr>
        <tr>
          <th>{ $t(tp + "thickness") } (mm)</th>
          <td>3</td>
        </tr>
        <tr>
          <th>{ $t(tp + "color") }</th>
          <td>{ $t(tp + "black") }</td>
        </tr>
      </table>
    </Column>
  </Row>
  <a href="/pdfs/tds/onduline/TDS BITULINE.pdf" download target="_blank" rel="noopener noreferrer external" class="button">Download TDS</a><br/>
  <hr class="my-3"/>
  <h2 class="text-2xl mb-2">BITULINE® PP40</h2>
  <Row>
    <Column cols={ 12 } md={ 6 } class="md:order-2">
      <CloudinaryImage class="w-full max-w-84 md:max-w-none mx-auto object-contain" src="products/onduline/img28.jpg" alt="BITULINE® PP40 Image" widths="300px" lazy={ false } height={ 200 } />
    </Column>
    <Column cols={ 12 } md={ 6 } class="md:order-1">
      <table class="w-full text-lg custom">
        <tr>
          <th>{ $t(tp + "type") }</th>
          <td>PP40</td>
        </tr>
        <tr>
          <th>{ $t(tp + "length") } (mm)</th>
          <td>10.000</td>
        </tr>
        <tr>
          <th>{ $t(tp + "width") } (mm)</th>
          <td>1.000</td>
        </tr>
        <tr>
          <th>{ $t(tp + "thickness") } (mm)</th>
          <td>3.5</td>
        </tr>
        <tr>
          <th>{ $t(tp + "color") }</th>
          <td>{ $t(tp + "green") } & { $t(tp + "red") }</td>
        </tr>
      </table>
    </Column>
  </Row>
  <hr class="my-3"/>
  <h2 class="text-2xl mb-2">BITULINE® Primer</h2>
  <p class="text-base mb-5">{ $t(tp + 'primer.content') }</p>
  <Row class="mb-2">
    <Column cols={ 12 } md={ 6 } class="md:order-2">
      <CloudinaryImage class="w-full max-w-84 max-h-52 md:max-w-none mx-auto object-contain" src="products/onduline/img39.jpg" alt="BITULINE® Primer" widths="300px" lazy={ false } height={ 200 } />
    </Column>
    <Column cols={ 12 } md={ 6 } class="md:order-1">
      <table class="w-full text-lg custom">
        <tr>
          <th>{ $t(tp + "primer.material") }</th>
          <td>BITUMEN</td>
        </tr>
        <tr>
          <th>{ $t(tp + "color") }</th>
          <td>{ $t(tp + "primer.color") }</td>
        </tr>
        <tr>
          <th>{ $t(tp + "primer.weight") } (kg)</th>
          <td>17</td>
        </tr>
        <tr>
          <th>{ $t(tp + "primer.spreadability") }</th>
          <td>2-3 m<sup>2</sup>/kg</td>
        </tr>
      </table>
    </Column>
  </Row>
  <a href="/pdfs/tds/onduline/TDS BITULINE PRIMER.pdf" download target="_blank" rel="noopener noreferrer external" class="button">Download TDS</a><br/>
  <br />
  <br />
  <h4 class="text-xl text-primary mb-2">Videos</h4>
  <Row>
    {#each videos as item}
      <Column cols={ 12 } md={ 4 }>
        <div on:click={ () => showDialog(item) } class="mb-2 rounded-lg border border-gray-200 shadow-sm h-full bg-slate-50">
          <CloudinaryImage class="w-full h-52 object-cover aspect-video rounded-t-lg" src={ `products/onduline/${item.img}` } alt={ item.img } widths="300px md:270px" />
          <h5 class="p-4 text-lg tracking-tight text-gray-900">{ item.text }</h5>
        </div>
      </Column>
    {/each}
  </Row>
  <br />
  <p class="text-base">
    <a href="/pdfs/BROSUR BITULINE.pdf" download target="_blank" rel="noopener noreferrer external" class="visible">Download Catalog</a><br/>
    <a href="/pdfs/Panduan Pemasangan Bituline.pdf" download target="_blank" rel="noopener noreferrer external" class="visible">Download { $t(tp + "installation_instructions" )}</a>
  </p>
</Article>
<dialog on:click={handleBackdrop} class="p-0 aspect-video w-240 max-w-full" bind:this={ dialog }>
  <iframe bind:this={ iframe } title="video" class="border-0 w-full h-full"></iframe>
</dialog>

<style lang="scss">
  .custom {
    line-height: 2.3rem;
    th {
      background: #e1464a;
      color: white;
      width: 50%;
      font-weight: normal;
    }

    th, td {
      text-align: center;
    }
    
    border: 2px solid #e1464a;
    tr:not(:last-child) {
      th {
        border-bottom: 1px solid #aa393d;
      }
      td {
        border-bottom: 1px solid #e1464a;
      }
    }
  }
</style>