<script lang="ts">
  import { t } from '$lib/translations';
  const tPrefix = 'services.waterproofing.'

  import Row from "$lib/components/Row.svelte";
  import Column from "$lib/components/Column.svelte";
  import Article from '$lib/components/Article.svelte';
  import Table from '$lib/components/services/Table.svelte';
  import Images from '$lib/components/services/Images.svelte';
  import CloudinaryImage from '$lib/components/CloudinaryImage.svelte';

  $: image1 = [
    "Bituthene 3.000",
    "Betec Flex",
    "Silcor",
  ]
  $: table1 = [
    "Grace Betec M5",
    "Grace Betec M5",
    "Prepruf 300R",
  ].map((v, i) => {
    return { left: v, right: $t(tPrefix + 'section1.table1.content.' + i)}
  })
  $: table2 = [
    "Grace Betec Flex",
    "Bostik Boscoseal Slurry",
    "Bostik Boscolastic",
  ].map((v, i) => {
    return { left: v, right: $t(tPrefix + 'section1.table2.content.' + i)}
  })
  $: table3 = [
    "Bostik Torch-on Membrane (TOM)",
    "Bostik Flashband",
    "Grace Bituthene 2000",
    "Grace Bituthene 3000",
    "Grace Bituthene 5000<br>(can with stand direct asphalt application)",
  ].map((v, i) => {
    return { left: v, right: $t(tPrefix + 'section1.table3.content.' + i)}
  })
  $: table4 = [
    "Grace Silcor",
    "Bostik PU-X",
    "Bostik Boscoseal AC",
  ].map((v, i) => {
    return { left: v, right: $t(tPrefix + 'section1.table4.content.' + i)}
  })
  $: table5 = [
    "Grace Hydroduct",
  ].map((v, i) => {
    return { left: v, right: $t(tPrefix + 'section1.table5.content.' + i)}
  })
  $: table6 = [
    "Grace De Neef HA CUT AF",
    "Grace De Neef HA CUT CFL AF",
    "Grace De Neef HA CUT CAT F",
    "Grace De Neef HA CUT CAT SXF",
  ].map((v, i) => {
    return { left: v, right: $t(tPrefix + 'section2.table6.content.' + i)}
  })
  $: table7 = [
    "Grace De Neef HA Soil AF",
    "Grace De Neef Rockstab 1.2/1.3/1.4",
    "Grace De Neef Organosol 550 DT",
    "Grace De Neef Organosol XP/XP FR",
  ].map((v, i) => {
    return { left: v, right: $t(tPrefix + 'section2.table7.content.' + i)}
  })
  $: table8 = [
    "Grace De Neef HA Safefoam NF",
    "Grace De Neef HA Flex LV/SLV AF",
    "Grace De Neef Elastopack 201",
  ].map((v, i) => {
    return { left: v, right: $t(tPrefix + 'section2.table8.content.' + i)}
  })
  $: table9 = [
    "Wagner High Pressure Pump",
    "Manual High Pressure Pump",
  ].map((v, i) => {
    return { left: v, right: $t(tPrefix + 'section2.table9.content.' + i)}
  })
  $: table10 = [
    { left: "Grace De Neef", right: "" },
  ]
  $: table11 = [
    { left: "Grace De Neef", right: "" },
    { left: "Denepox 40", right: "" },
  ]
</script>

<Article title={ $t(tPrefix + 'page.title') } desc={ $t(tPrefix + 'page.description') }>
  <h3 class="text-xl text-orange underline mb-3">{ $t(tPrefix + 'section1.title') }</h3>
  <Row class="projects">
    {#each image1 as image, index}
      {@const i = index + 1}
      <Column cols={ 12 } md={ 4 } class="text-center">
        <CloudinaryImage class="bounded" alt={ 'waterproofing_' + i } src={ `services/waterproofing/waterproofing_${i}.jpg` } widths="90vw md:430px" />
        <span>{ image }</span>
      </Column>
    {/each}
  </Row>
  <p class="mb-3">{ $t(tPrefix + 'section1.content') }</p>

  <Table title={ $t(tPrefix + 'section1.table1.title') } content={ table1 } class="mb-3" />
  <Table title={ $t(tPrefix + 'section1.table2.title') } content={ table2 } class="mb-3" />
  <Table title={ $t(tPrefix + 'section1.table3.title') } content={ table3 } class="mb-3" />
  <Table title={ $t(tPrefix + 'section1.table4.title') } content={ table4 } class="mb-3" />
  <Table title={ $t(tPrefix + 'section1.table5.title') } content={ table5 } class="mb-6" />
  
  <h3 class="text-xl text-orange underline mb-3">{ $t(tPrefix + 'section2.title') }</h3>
  <Images src="services/waterproofing/injeksi" n={ 4 } cols={ 6 } md={ 3 } />
  <p class="mb-3">{ $t(tPrefix + 'section2.content') }</p>

  <Table title={ $t(tPrefix + 'section2.table6.title') } content={ table6 } class="mb-3" />
  <Table title={ $t(tPrefix + 'section2.table7.title') } content={ table7 } class="mb-3" />
  <Table title={ $t(tPrefix + 'section2.table8.title') } content={ table8 } class="mb-3" />
  <Table title={ $t(tPrefix + 'section2.table9.title') } content={ table9 } class="mb-6" />

  <Row>
    {#each Array(3) as _, index}
      {@const i = index + 1}
      <Column md={ 4 }>
        <CloudinaryImage class="w-full object-contain h-8" alt={ 'pressure_' + i } src={ `services/waterproofing/pressure_${i}.jpg` } widths="430px" height={ 60 } />
      </Column>
    {/each}
  </Row>
  <Row>
    {#each Array(4) as _, index}
      {@const i = index + 3}
      <Column cols={ 6 } md={ 3 }>
        <CloudinaryImage class="w-full object-contain h-32" alt={ 'pressure_' + i } src={ `services/waterproofing/pressure_${i}.jpg` } widths="430px" height={ 200 } />
      </Column>
    {/each}
  </Row>
  
  <h3 class="text-xl text-orange underline">{ $t(tPrefix + 'section3.title') }</h3>
  <p class="mb-3">{ $t(tPrefix + 'section3.content') }</p>

  <Table title={ $t(tPrefix + 'section3.table10.title') } content={ table10 } class="mb-3" />
  <Table title={ $t(tPrefix + 'section3.table11.title') } content={ table11 } class="mb-6" />
</Article>