<script lang="ts">
  import { t } from '$lib/translations';
  const tp = 'services.sealants.'

  import Article from '$lib/components/Article.svelte';
</script>

<Article title={ $t(tp + 'page.title') }>
  <h3 class="text-xl text-orange underline">{ $t(tp + 'section1.title') }</h3>
  <p class="mb-3">{ $t(tp + 'section1.subtitle') }</p>
  
  <h4 class="t-head">{ $t(tp + 'section1.title1') }</h4>
  <ul class="mb-3">
    <li>Bostik Seal N Flex PU Sealants</li>
    <li>Bostik PU Construction Joints Sealants</li>
  </ul>

  <h4 class="t-head">{ $t(tp + 'section1.title2') }</h4>
  <ul class="mb-3">
    <li>KCC SL 868 / 907 Premium / 907</li>
    <li>Shin Etsu Sealant 456 / N</li>
    <li>Bostik 616</li>
  </ul>

  <h4 class="t-head">{ $t(tp + 'section1.title3') }</h4>
  <ul class="mb-3">
    <li>Simson 7003/7005/7008</li>
  </ul>
</Article>