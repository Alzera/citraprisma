<script lang="ts">
  import { t } from '$lib/translations';
  const tPrefix = 'services.metal.'

  import Article from '$lib/components/Article.svelte';
  import Images from '$lib/components/services/Images.svelte';
</script>

<Article title={ $t(tPrefix + 'page.title') }>
  <h3 class="text-xl text-orange underline">{ $t(tPrefix + 'title') }</h3>
  <p class="mb-3">{ $t(tPrefix + 'content') }</p>
  <Images src="services/metal/metal" />

  <h4 class="t-head">Hunter Douglass</h4>
  <ul class="mb-3">
    <li>Linear Ceiling</li>
    <li>Wave Ceiling</li>
    <li>Aerofoils & Aerobrise</li>
  </ul>
</Article>