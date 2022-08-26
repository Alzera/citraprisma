<script lang="ts">
  import { t } from '$lib/translations';

  import Row from "$lib/components/Row.svelte";
  import Column from "$lib/components/Column.svelte";
  import Article from "$lib/components/Article.svelte";
  import CloudinaryImage from '$lib/components/CloudinaryImage.svelte';
</script>

<Article title={ $t('projects.waterplace.page.title') } desc={ $t('projects.waterplace.page.description') } subtitle={ $t('projects.waterplace.subtitle') }>
  <div class="flex justify-center items-center">
    <CloudinaryImage src="projects/waterplace/preview.png" alt={ `Water Place project preview` } widths="90vw md:430px" />
  </div>
  <hr class="my-4" />
  <Row>
    {#each Array(6) as _, index}
      {@const i = index + 1}
      <Column cols={ 12 } md={ 6 }>
        <CloudinaryImage class="bounded" src={ `projects/waterplace/waterplace_${i}.jpg` } alt={ `Water Place project image ${i}` } widths="90vw md:430px" />
      </Column>
    {/each}
  </Row>
</Article>