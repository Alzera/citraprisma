<script lang="ts">
  import { t } from '$lib/translations';
  const tp = 'brands.rockwool.'

  import Row from "$lib/components/Row.svelte";
  import Column from "$lib/components/Column.svelte";
  import Article from '$lib/components/Article.svelte';
  import CloudinaryImage from '$lib/components/CloudinaryImage.svelte';

  const videos = [
    { video: "https://drive.google.com/file/d/1fc-3coG__g5Knr4KQ591rEIDnoETi0TV/preview", img: "introducing_to_rockwool.png", text: "Introducing To Rockwool" },
    { video: "https://drive.google.com/file/d/1Nv4wb0bmxOL-oQVrOZ4-m-WVJEn7F667/preview", img: "how_its_made_stone_wool_insulation.png", text: "How it's made Stone wool insulation" },
    { video: "https://drive.google.com/file/d/1yIJJIc6KsxZMzdw7oKfb2cnzWvNY3inC/preview", img: "insulate_and_soundproof_an_interior_wall_or_room_with_rockwool.png", text: "Insulate and soundproof an interior wall or room with rockwool" },
    { video: "https://drive.google.com/file/d/1G9zuekOEJBvg_L3EoPwN4as0laHARzp7/preview", img: "rockwool_fire_safety_seminar_fire_demo.png", text: "Rockwool fire safety" },
    { video: "https://drive.google.com/file/d/1OxgJxaf5PMDBMLSva_USyuuHRlMnWSRe/preview", img: "stone_wool_different_with_glass_wool.png", text: "Stone wool difference with glass wool" },
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

<Article title={ $t(tp + 'page.title') } desc={ $t(tp + 'page.description') }>
  <p class="text-base mb-3">{ $t(tp + 'content.0') }</p>
  <p class="text-base mb-3">{ $t(tp + 'content.1') }</p>
  <p class="text-base mb-3">{ $t(tp + 'content.2') }</p>
  <CloudinaryImage class="mx-auto h-52 object-contain" src="brands/rockwool/rockwool.png" alt="rockwool" widths="300px md:270px" />
  <p class="text-base mb-3">{ $t(tp + 'content.3') }</p>
  <p class="text-base">{ $t(tp + 'advantages') }</p>
  <ul>
    {#each Array(4) as _, i}
      <li>{ $t(tp + `advantages_items.${i}`) }</li>
    {/each}
  </ul>
  <br />
  <Row>
    {#each videos as item}
      <Column cols={ 12 } md={ 4 }>
        <div on:click={ () => showDialog(item) } class="mb-2 rounded-lg border border-gray-200 shadow-sm h-full bg-slate-50">
          <CloudinaryImage class="w-full h-52 object-cover aspect-video rounded-t-lg" src={ `brands/rockwool/${item.img}` } alt={ item.img } widths="300px md:270px" />
          <h5 class="p-4 text-lg tracking-tight text-gray-900">{ item.text }</h5>
        </div>
      </Column>
    {/each}
  </Row>
  <br />
  <p class="text-base">
    <a href="/pdfs/Rockwool CNC.pdf" target="_blank" rel="noopener noreferrer external" class="visible">Download Catalog CNC</a>
    <br/>
    <a href="/pdfs/Rockwool SNS.pdf" target="_blank" rel="noopener noreferrer external" class="visible">Download Catalog SNS</a>
  </p>
</Article>
<dialog on:click={handleBackdrop} class="p-0 aspect-video w-240 max-w-full" bind:this={ dialog }>
  <iframe bind:this={ iframe } title="video" class="border-0 w-full h-full"></iframe>
</dialog>