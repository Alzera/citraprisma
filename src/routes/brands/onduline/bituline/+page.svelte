<script lang="ts">
  import { t } from '$lib/translations';
  const tp = 'brands.onduline.bituline.'

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

<CloudinaryImage src="brands/onduline/img635.jpg" alt="Banner" 
  widths="600px md:1024px" 
  crop="fill" 
  lazy={ false }
  height={ 400 }
  style={ $mq.mobile ? 'height:250px' : 'height:400px' }
  class="w-vw-center object-cover h-52 md:h-88" />
<Article 
  title={ $t(tp + 'page.title') } 
  desc={ $t(tp + 'page.description') }
  subtitle={ $t(tp + 'page.description') }>
  <p class="text-base mb-5">{ $t(tp + 'content') }</p>
  <h2 class="text-2xl">BITULINE® PP300</h2>
  <CloudinaryImage class="w-full h-64 object-contain" src="brands/onduline/img29.jpg" alt="BITULINE® PP300 Image" widths="300px" lazy={ false } height={ 300 } />
  <table class="w-full text-lg custom mb-8">
    <tr style="background: #e1464a" class="text-white">
      <th>{ $t(tp + "type") }</th>
      <th>{ $t(tp + "length") } (mm)</th>
      <th>{ $t(tp + "width") } (mm)</th>
      <th>{ $t(tp + "thickness") } (mm)</th>
      <th>{ $t(tp + "color") }</th>
    </tr>
    <tr>
      <td>PP300</td>
      <td>10.000</td>
      <td>1.000</td>
      <td>3</td>
      <td>{ $t(tp + "black") }</td>
    </tr>
  </table>

  <h2 class="text-2xl">BITULINE® PP40</h2>
  <CloudinaryImage class="w-full h-64 object-contain" src="brands/onduline/img28.jpg" alt="BITULINE® PP40 Image" widths="300px" lazy={ false } height={ 300 } />
  <table class="w-full text-lg custom mb-8">
    <tr style="background: #e1464a" class="text-white">
      <th>{ $t(tp + "type") }</th>
      <th>{ $t(tp + "length") } (mm)</th>
      <th>{ $t(tp + "width") } (mm)</th>
      <th>{ $t(tp + "thickness") } (mm)</th>
      <th>{ $t(tp + "color") }</th>
    </tr>
    <tr>
      <td>PP40</td>
      <td>10.000</td>
      <td>1.000</td>
      <td>3.5</td>
      <td>{ $t(tp + "green") } & { $t(tp + "red") }</td>
    </tr>
  </table>
  <br />
  <br />
  <Row>
    {#each videos as item}
      <Column cols={ 12 } md={ 4 }>
        <div on:click={ () => showDialog(item) } class="mb-2 rounded-lg border border-gray-200 shadow-sm h-full bg-slate-50">
          <CloudinaryImage class="w-full h-52 object-cover aspect-video rounded-t-lg" src={ `brands/onduline/${item.img}` } alt={ item.img } widths="300px md:270px" />
          <h5 class="p-4 text-lg tracking-tight text-gray-900">{ item.text }</h5>
        </div>
      </Column>
    {/each}
  </Row>
  <p class="text-base">
    <a href="/pdfs/tds/onduline/TECHNICAL DATA SHEET ONDUCASA.pdf" download target="_blank" rel="noopener noreferrer external" class="visible">Download TDS</a><br/>
    <a href="/pdfs/BROSUR BITULINE.pdf" download target="_blank" rel="noopener noreferrer external" class="visible">Download Catalog</a><br/>
    <a href="/pdfs/Panduan Pemasangan Bituline.pdf" download target="_blank" rel="noopener noreferrer external" class="visible">Download { $t(tp + "installation_instructions" )}</a>
  </p>
</Article>
<dialog on:click={handleBackdrop} class="p-0 aspect-video w-240 max-w-full" bind:this={ dialog }>
  <iframe bind:this={ iframe } title="video" class="border-0 w-full h-full"></iframe>
</dialog>

<style lang="scss">
  .custom {
    th, td {
      text-align: center;
    }
    
    border: 2px solid #e1464a;
    td:not(:last-child) {
      border-right: 2px solid #e1464a;
    }
  }
</style>