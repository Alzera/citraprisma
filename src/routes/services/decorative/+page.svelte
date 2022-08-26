<script lang="ts">
  import { t } from '$lib/translations';
  const tp = 'services.decorative.'

  import Article from '$lib/components/Article.svelte';
  import Table from '$lib/components/services/Table.svelte';
  import Images from '$lib/components/services/Images.svelte';

  $: table1 = [
    "KCC Koreton Plus",
    "KCC Supro Vinyl Glow",
    "KCC Supro Vinyl Fresh",
  ].map((v, i) => {
    return { left: v, right: $t(tp + 'section1.table1.content.' + i)}
  })
  $: table2 = [
    "KCC Supro Korever",
  ].map((v, i) => {
    return { left: v, right: $t(tp + 'section1.table2.content.' + i)}
  })
</script>

<Article title={ $t(tp + 'page.title') } desc={ $t(tp + 'page.description') }>
  <h3 class="text-xl text-orange underline mb-3">{ $t(tp + 'section1.title') }</h3>
  <Images src='services/decorative/dekor' />
  <Table title={ $t(tp + 'section1.table1.title') } content={ table1 } class="mt-2 mb-6" />
  <Images src='services/decorative/cat' />
  <Table title={ $t(tp + 'section1.table2.title') } content={ table2 } class="mt-2 mb-6" />

  <h3 class="text-xl text-orange underline mb-3">{ $t(tp + 'section2.title') }</h3>
</Article>