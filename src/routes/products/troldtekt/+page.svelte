<script lang="ts">
  import { share } from '$lib/share';
  import { t } from '$lib/translations';
  const tp = 'products.troldtekt.'

  import Row from "$lib/components/Row.svelte";
  import Meta from "$lib/components/Meta.svelte";
  import Column from "$lib/components/Column.svelte";
  import Container from '$lib/components/Container.svelte';
  import Breadcrumb from '$lib/components/Breadcrumb.svelte';
  import CloudinaryImage from '$lib/components/CloudinaryImage.svelte';

  $: title = $t(tp + 'page.title')

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

  const videos = [
    { video: "https://drive.google.com/file/d/11tr-OZLZk0bhHPPRE600ZJ1sBRzwjZgd/preview", img: "new_troldtekt_production_line_in_one_minute.png", text: "New Troldtekt production line in one minute" },
    { video: "https://drive.google.com/file/d/12qAWkSSErI79cJAM8ljfYDz9S9SYldEN/preview", img: "monteringinstallationmontage_troldtekt_plus_akustikloftacoustic_ceilingakustikdecke.png", text: "Montering Installation Montage Troldtekt Plus akustik loft acoustic ceiling Akustik decke" },
    { video: "https://drive.google.com/file/d/1ChXrGZHeVYP3N2KFdgKWo7kKfCFQcS0w/preview", img: "troldtekt_-_based_on_futurecem_-_acoustic_panels_with_negative_carbon_footprint_during_production.png", text: "Troldtekt - Based on FUTURECEM - Acoustic panels with negative carbon footprint during production" },
    { video: "https://drive.google.com/file/d/1GDttNaMdnPRsWhIDt2KPmy9_mtVZ05or/preview", img: "certfied_wood_-_from_forest_to_architecture_short_version.png", text: "Certified wood - from forest to architecture (short version)" },
    { video: "https://drive.google.com/file/d/1GzgTCg-11RIf4KPuPczTu1zPu94Xgely/preview", img: "troldtekt_acoustic_panels_-_a_sustainable_solution.png", text: "Troldtekt acoustic panels - a sustainable solution" },
    { video: "https://drive.google.com/file/d/1MRTNJ24tZi1AEBuIHSWO4MHwd3novT9T/preview", img: "monteringinstallationmontage_troldtekt_acoustic_ceiling_with_exposed_t_profiles.png", text: "Montering Installation Montage Troldtekt acoustic ceiling with exposed T profiles" },
    { video: "https://drive.google.com/file/d/1T62vI-8--bSnBH4DpKQp3piMw7N-mlf7/preview", img: "healthy_learning_environment_with_troldtekt_acoustic_solutions.png", text: "Healthy learning environment with Troldtekt acoustic solutions" },
    { video: "https://drive.google.com/file/d/1ZJsM09N0I_kwtV0Pw-8DF1F3tYNHWrgO/preview", img: "an_introduction_to_room_acoustics.png", text: "An Introduction to Room Acoustics" },
    { video: "https://drive.google.com/file/d/1k3taxOKIObKxATwIrTNnygjtumbLbVxS/preview", img: "certified_wood_-_from_forest_to_architecture_full_version.png", text: "Certified wood - from forest to architecture (full version)" },
    { video: "https://drive.google.com/file/d/1nswaGAUxCDiBNHdXT0TRlrLujxhIgtTk/preview", img: "monteringinstallationmontage_troldtekt_acoustic_ceiling_with_c60_profile_system.png", text: "Montering Installation Montage Troldtekt acoustic ceiling with C60 profile system" },
    { video: "https://drive.google.com/file/d/1xhnrwnxTE-2DMAz3UUunSb0untnGfH-r/preview", img: "monteringinstallationmontage_troldtekt_acoustic_with_concealed_t_profiles.png", text: "Montering Installation Montage Troldtekt acoustic with concealed T profiles" },
  ]
</script>

<Meta { title } />

<Container class="mt-2">
  <div class="flex mb-4 align-center">
    <Breadcrumb />
    <div class="flex-auto"></div>
    <div on:click={ () => share('') } class="i-mdi-share-variant text-xl" />
  </div>
  <h1 class="text-4xl text-primary">{ title }</h1>
</Container>
<CloudinaryImage src="products/troldtekt/banner.jpg" alt="Banner" 
  widths="512px md:1408px" 
  crop="fill" 
  lazy={ false }
  preload={ true }
  class="w-vw-center object-cover md:h-128" />
<Container class="p-6">
  <h2 class="text-4xl text-center mb-4">{ $t(tp + 'section1.title') }</h2>
  <p class="text-center">{ $t(tp + 'section1.subtitle1') }</p>
  <p class="text-center">{ $t(tp + 'section1.subtitle2') }</p>
</Container>
<Container fluid class="bg-lightgray">
  <Container class="p-6">
    <h2 class="text-4xl text-center mb-4">{ $t(tp + 'section2.title') }</h2>
    <ul class="text-base ml-12 md:ml-42">
      {#each Array(6) as _, i}
        <li>{ $t(tp + `section2.content.${i}`) }</li>
      {/each}
    </ul>
  </Container>
</Container>
<Container class="p-6">
  <h2 class="text-4xl mb-4">{ $t(tp + 'section3.title') }</h2>
  <p class="mb-6">{ $t(tp + 'section3.subtitle') }</p>
  {#each Array(3) as _, i}
    <Row class="mb-2">
      <Column cols={ 12 } md={ 6 }>
        <CloudinaryImage class="w-full" src={ `products/troldtekt/img${97 + i}.jpg` } alt={ `img${i}` } widths="300px md:270px" />
      </Column>
      <Column cols={ 12 } md={ 6 }>
        <h3 class="text-lg">{ $t(tp + `section3.content.${i}.title`) }</h3>
        <p>{ $t(tp + `section3.content.${i}.subtitle`) }</p>
      </Column>
    </Row>
  {/each}
</Container>
<Container fluid class="bg-lightgray">
  <Container class="p-6">
    <h2 class="text-4xl mb-4">{ $t(tp + 'section4.title') }</h2>
    <p class="mb-6">{ $t(tp + 'section4.subtitle') }</p>

    <Row class="mb-6">
      <Column cols={ 12 } md={ 3 }>
        <CloudinaryImage class="w-full" rotate={ 90 } src={ `products/troldtekt/img107.jpg` } alt="img107" widths="300px md:270px" />
        Extreme fine structure, 0.5 mm 
      </Column>
      <Column cols={ 12 } md={ 3 }>
        <CloudinaryImage class="w-full" rotate={ 90 } src={ `products/troldtekt/img110.jpg` } alt="img110" widths="300px md:270px" />
        Ultrafine structure, 1.0 mm
      </Column>
      <Column cols={ 12 } md={ 3 }>
        <CloudinaryImage class="w-full" rotate={ 90 } src={ `products/troldtekt/img108.jpg` } alt="img108" widths="300px md:270px" />
        Fine structure, 1.5 mm
      </Column>
      <Column cols={ 12 } md={ 3 }>
        <CloudinaryImage class="w-full" rotate={ 90 } src={ `products/troldtekt/img109.jpg` } alt="img109" widths="300px md:270px" />
        Coarse structure, 3.0 mm
      </Column>
    </Row>
    <Row class="mb-1">
      <Column cols10={ 10 } md10={ 2 }>
        Natural wood
        <CloudinaryImage class="w-full" src={ `products/troldtekt/img100.jpg` } alt="img100" widths="300px md:270px" />
      </Column>
      <Column cols10={ 10 } md10={ 2 }>
        Natural grey
        <CloudinaryImage class="w-full" src={ `products/troldtekt/img101.jpg` } alt="img101" widths="300px md:270px" />
      </Column>
    </Row>
    <Row class="mb-12">
      <Column cols10={ 10 } md10={ 2 }>
        <CloudinaryImage class="w-full" src={ `products/troldtekt/img102.jpg` } alt="img102" widths="300px md:270px" />
        White 101
      </Column>
      <Column cols10={ 10 } md10={ 2 }>
        <CloudinaryImage class="w-full" src={ `products/troldtekt/img106.jpg` } alt="img106" widths="300px md:270px" />
        Grey 202
      </Column>
      <Column cols10={ 10 } md10={ 2 }>
        <CloudinaryImage class="w-full" src={ `products/troldtekt/img104.jpg` } alt="img104" widths="300px md:270px" />
        Grey 208
      </Column>
      <Column cols10={ 10 } md10={ 2 }>
        <CloudinaryImage class="w-full" src={ `products/troldtekt/img27.jpg` } alt="img27" widths="300px md:270px" />
        Black 207
      </Column>
      <Column cols10={ 10 } md10={ 2 }>
        <CloudinaryImage class="w-full" src={ `products/troldtekt/img105.jpg` } alt="img105" widths="300px md:270px" />
        Custom colour
      </Column>
    </Row>
  
    <CloudinaryImage src="icon_watch_video.jpg" alt="Watch Video" widths="145px" />
    <div class="snap-x snap-mandatory overflow-x-scroll overflow-y-hidden whitespace-nowrap w-full mb-12">
      {#each videos as item}
        <div on:click={ () => showDialog(item) } class="video-item">
          <CloudinaryImage class="video-item-img" src={ `products/troldtekt/${item.img}` } alt={ item.img } widths="300px md:270px" />
          <h5 class="video-item-txt">{ item.text }</h5>
        </div>
      {/each}
    </div>

    <a href="/pdfs/troldtekt_profil_brochure_eng.pdf" download target="_blank" rel="noopener noreferrer external">
      <CloudinaryImage src="icon_download_catalog.jpg" alt="Download Catalog" widths="200px" />
    </a>
  </Container>
</Container>
<dialog on:click={handleBackdrop} class="p-0 aspect-video w-240 max-w-full" bind:this={ dialog }>
  <iframe bind:this={ iframe } title="video" class="border-0 w-full h-full"></iframe>
</dialog>