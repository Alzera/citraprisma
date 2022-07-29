<script lang="ts">
  import { t } from '$lib/translations';
  const tPrefix = 'services.gypsum.'

  import Row from "$lib/components/Row.svelte";
  import Column from "$lib/components/Column.svelte";
  import Article from '$lib/components/Article.svelte';
  import Images from '$lib/components/services/Images.svelte';
  import CloudinaryImage from '$lib/components/CloudinaryImage.svelte';
</script>

<Article title={ $t(tPrefix + 'page.title') } desc={ $t(tPrefix + 'page.description') }>
  <h3 class="text-xl text-orange underline mb-2">{ $t(tPrefix + 'section1.title') }</h3>
  <Images src="services/gypsum/gypsum" />
  <h4 class="t-head">{ $t(tPrefix + 'section1.wall') } (Knauf / USG Boral / Yoshino)</h4>
  <ul class="mb-3">
    <li>Cornice compound</li>
    <li>Cornice 2 in 1</li>
    <li>UB 20</li>
    <li>GL Bond</li>
  </ul>

  <h4 class="t-head mb-6">{ $t(tPrefix + 'section1.casting') } (Knauf / USG Boral)</h4>

  <h3 class="text-xl text-orange underline mb-2">{ $t(tPrefix + 'section2.title') }</h3>
  <Images src="services/gypsum/ceiling" />

  <h4 class="t-head">Knauf / USG Boral / Yoshino</h4>
  <ul class="mb-3">
    <li>Standard board 9/12mm</li>
    <li>Water Resistant Board 9/12mm</li>
    <li>Fire Resistant Board 15mm</li>
    <li>Dense Board 12,5mm</li>
    <li>Sound 12,5mm</li>
    <li>Gyptile 9mm (60/120 & 60/60)</li>
    <li>Accoustic board (60/60)</li>
  </ul>

  <h3 class="text-xl text-orange underline mb-2">{ $t(tPrefix + 'section3.title') }</h3>
  <Row>
    {#each Array(3) as _, i}
      <Column cols={ 12 } md={ 4 }>
        <CloudinaryImage class="bounded" src={ `services/gypsum/ngurah.jpg` } alt={ `ngurah_ ${i}` } widths="90vw md:430px" />
      </Column>
    {/each}
  </Row>

  <h4 class="t-head">Knauf / USG Boral / Yoshino / KCC</h4>
  <ul class="mb-3">
    <li>Standard board 12mm</li>
    <li>Water Resistant Board 12mm</li>
    <li>Fire Resistant Board 15mm</li>
    <li>Dense Board 12,5mm</li>
  </ul>

  <h3 class="text-xl text-orange underline mb-2">{ $t(tPrefix + 'section4.title') }</h3>
  <Row>
    {#each Array(3) as _, i}
      <Column cols={ 12 } md={ 4 }>
        <CloudinaryImage class="bounded" src={ `services/gypsum/ngurah.jpg` } alt={ `ngurah_ ${i}` } widths="90vw md:430px" />
      </Column>
    {/each}
  </Row>

  <h4 class="t-head">{ $t(tPrefix + 'section4.content') }</h4>
  <ul class="mb-3">
    <li>Knauf UFC System</li>
    <li>USG Boral BMS System</li>
    <li>Square Hollow Frames 20/40 and 40/40</li>
    <li>Suspended Tee s for gyptiles and metal ceilings</li>
  </ul>
</Article>