<script lang="ts">
  import { t } from '$lib/translations';

  import Row from "$lib/components/Row.svelte";
  import Column from "$lib/components/Column.svelte";
  import Article from "$lib/components/Article.svelte";
  import CloudinaryImage from '$lib/components/CloudinaryImage.svelte';
</script>

<Article title={ $t('projects.ngurah.page.title') } subtitle={ $t('projects.ngurah.subtitle') }>
  <div class="flex justify-center items-center">
    <CloudinaryImage src="projects/ngurah/1.png" alt={ `Ngurah project preview` } widths="90vw md:430px" preload={ true } />
  </div>
  <hr class="my-4" />
  <Row>
    {#each Array(4) as _, index}
      {@const i = index + 2}
      <Column cols={ 12 } md={ 6 }>
        <CloudinaryImage class="bounded" src={ `projects/ngurah/${i}.jpg` } alt={ `Ngurah project image ${i}` } widths="90vw md:430px" />
      </Column>
    {/each}
  </Row>
</Article>