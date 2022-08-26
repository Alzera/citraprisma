<script lang="ts">
  import { t } from '$lib/translations';
  const tp = 'services.epoxy.'

  import Article from '$lib/components/Article.svelte';
  import Table from '$lib/components/services/Table.svelte';
  import Images from '$lib/components/services/Images.svelte';

  $: table1 = [
    "KCC Unipoxy Floor Coating & Lining",
    "KCC Unipoxy Resin Mortar",
    "KCC Unipoxy Embo",
    "KCC Supro Sunipoxy Coating",
    "KCC Unipoxy Chemical Resistance",
  ].map((v, i) => {
    return { left: v, right: $t(tp + 'section1.table1.content.' + i)}
  })
  $: table2 = [
    "KCC Sporthane",
  ].map((v, i) => {
    return { left: v, right: $t(tp + 'section1.table2.content.' + i)}
  })
  $: table3 = [
    "KCC Hyperurea",
  ].map((v, i) => {
    return { left: v, right: $t(tp + 'section1.table3.content.' + i)}
  })
  $: table4 = [
    "KCC I-Krete",
  ].map((v, i) => {
    return { left: v, right: $t(tp + 'section2.table4.content.' + i)}
  })
</script>

<Article title={ $t(tp + 'page.title') } desc={ $t(tp + 'page.description') }>
  <h3 class="text-xl text-orange underline mb-3">{ $t(tp + 'section1.title') }</h3>
  <Images src="services/epoxy/coating" />
  <p class="mb-3">{ $t(tp + 'section1.content') }</p>
  
  <Table title={ $t(tp + 'section1.table1.title') } content={ table1 } class="mb-3" />
  <Table title={ $t(tp + 'section1.table2.title') } content={ table2 } class="mb-3" />
  <Table title={ $t(tp + 'section1.table3.title') } content={ table3 } class="mb-6" />

  <h3 class="text-xl text-orange underline mb-3">{ $t(tp + 'section2.title') }</h3>
  <Images src="services/epoxy/flooring" />
  <Table title="" content={ table4 } class="mb-3" />
  <p class="mb-6">{ $t(tp + 'section2.content') }</p>
</Article>