<script lang="ts">
  import { t } from '$lib/translations';
  const tp = 'products.rockwool.'

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

<Article title={ $t(tp + 'page.title') }>
  <p class="mb-3">{ $t(tp + 'content.0') }</p>
  <p class="mb-3">{ $t(tp + 'content.1') }</p>
  <p class="mb-3">{ $t(tp + 'content.2') }</p>
  <CloudinaryImage class="mx-auto h-52 object-contain" src="products/rockwool/rockwool.png" alt="rockwool" widths="300px md:270px" />
  <p class="mb-3">{ $t(tp + 'content.3') }</p>
  <p>{ $t(tp + 'advantages') }</p>
  <ul>
    {#each Array(4) as _, i}
      <li>{ $t(tp + `advantages_items.${i}`) }</li>
    {/each}
  </ul>
  <br />
  <CloudinaryImage src="icon_watch_video.jpg" alt="Watch Video" widths="145px" />
  <div class="snap-x snap-mandatory overflow-x-scroll overflow-y-hidden whitespace-nowrap w-full mb-12">
    {#each videos as item}
      <div on:click={ () => showDialog(item) } class="video-item">
        <CloudinaryImage class="video-item-img" src={ `products/rockwool/${item.img}` } alt={ item.img } widths="300px md:270px" />
        <h5 class="video-item-txt">{ item.text }</h5>
      </div>
    {/each}
  </div>
  <br />
  <p>
    <a href="/pdfs/Rockwool.zip" download target="_blank" rel="noopener noreferrer external" class="visible">
      <CloudinaryImage src="icon_download_catalog.jpg" alt="Download Catalog" widths="200px" />
    </a>
  </p>
</Article>
<dialog on:click={handleBackdrop} class="p-0 aspect-video w-240 max-w-full" bind:this={ dialog }>
  <iframe bind:this={ iframe } title="video" class="border-0 w-full h-full"></iframe>
</dialog>