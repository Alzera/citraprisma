<script lang="ts">
  import { t } from '$lib/translations';

  import Row from "$lib/components/Row.svelte";
  import Column from "$lib/components/Column.svelte";
  import Article from "$lib/components/Article.svelte";
  import CloudinaryImage from '$lib/components/CloudinaryImage.svelte';
</script>

<Article title={ $t('projects.juanda.page.title') } subtitle={ $t('projects.juanda.subtitle') }>
  <div class="flex justify-center items-center">
    <CloudinaryImage src="projects/juanda/1.png" alt={ `Juanda project preview` } widths="90vw md:430px" preload={ true } />
  </div>
  <hr class="my-4" />
  <Row>
    {#each Array(6) as _, index}
      {@const i = index + 2}
      <Column cols={ 12 } md={ 6 }>
        <CloudinaryImage class="bounded" src={ `projects/juanda/${i}.jpg` } alt={ `Juanda project image ${i}` } widths="90vw md:430px" />
      </Column>
    {/each}
  </Row>
</Article>