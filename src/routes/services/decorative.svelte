<script lang="ts">
  import { t } from '$lib/translations';
  const tPrefix = 'services.decorative.'

  import Article from '$lib/components/Article.svelte';
  import Table from '$lib/components/services/Table.svelte';
  import Images from '$lib/components/services/Images.svelte';

  $: table1 = [
    "KCC Koreton Plus",
    "KCC Supro Vinyl Glow",
    "KCC Supro Vinyl Fresh",
  ].map((v, i) => {
    return { left: v, right: $t(tPrefix + 'section1.table1.content.' + i)}
  })
  $: table2 = [
    "KCC Supro Korever",
  ].map((v, i) => {
    return { left: v, right: $t(tPrefix + 'section1.table2.content.' + i)}
  })
</script>

<Article title={ $t(tPrefix + 'page.title') }>
  <h3 class="text-xl text-orange underline mb-3">{ $t(tPrefix + 'section1.title') }</h3>
  <Images src='services/decorative/dekor' />
  <Table title={ $t(tPrefix + 'section1.table1.title') } content={ table1 } class="mt-2 mb-6" />
  <Images src='services/decorative/cat' />
  <Table title={ $t(tPrefix + 'section1.table2.title') } content={ table2 } class="mt-2 mb-6" />

  <h3 class="text-xl text-orange underline mb-3">{ $t(tPrefix + 'section2.title') }</h3>
</Article>