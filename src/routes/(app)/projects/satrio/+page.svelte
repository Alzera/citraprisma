<script lang="ts">
  import { t } from '$lib/translations';

  import Row from "$lib/components/Row.svelte";
  import Column from "$lib/components/Column.svelte";
  import Article from "$lib/components/Article.svelte";
  import CloudinaryImage from '$lib/components/CloudinaryImage.svelte';
</script>

<Article title={ $t('projects.satrio.page.title') } subtitle={ $t('projects.satrio.subtitle') }>
  <Row>
    <Column cols={ 12 } md={ 6 }>
      <CloudinaryImage class="bounded" src="projects/satrio/satrio-1.jpg" alt="Satrio project image 1" widths="sm:90vw md:430px" />
      <p class="!text-center text-base m-0">{ $t('before') }</p>
    </Column>
    <Column cols={ 12 } md={ 6 }>
      <CloudinaryImage class="bounded" src="projects/satrio/satrio-2.jpg" alt="Satrio project image 2" widths="sm:90vw md:430px" />
      <p class="!text-center text-base m-0">{ $t('after') }</p>
    </Column>
  </Row>
  <hr class="my-4" />
  <Row>
    {#each Array(6) as _, index}
      {@const i = index + 3}
      <Column cols={ 12 } md={ 6 }>
        <CloudinaryImage class="bounded" src={ `projects/satrio/satrio-${i}.jpg` } alt={ `Satrio project image ${i}` } widths="90vw md:430px" />
      </Column>
    {/each}
  </Row>
</Article>