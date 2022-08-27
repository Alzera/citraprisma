<script lang="ts">
  import { t } from '$lib/translations';

  import Row from "$lib/components/Row.svelte";
  import Column from "$lib/components/Column.svelte";
  import Article from "$lib/components/Article.svelte";
  import CloudinaryImage from '$lib/components/CloudinaryImage.svelte';
</script>

<Article title={ $t('projects.sheikhzayed.page.title') } subtitle={ $t('projects.sheikhzayed.subtitle') }>
  <Row>
    {#each Array(8) as _, index}
      {@const i = index + 1}
      <Column cols={ 12 } md={ 6 }>
        <CloudinaryImage class="bounded" src={ `projects/sheikhzayed/${i}.jpeg` } alt={ `Masjid Sheikh Zayed project image ${i}` } widths="90vw md:430px" />
      </Column>
    {/each}
  </Row>
</Article>