<script lang="ts">
  import { t } from '$lib/translations';

  import Row from "$lib/components/Row.svelte";
  import Column from "$lib/components/Column.svelte";
  import Article from "$lib/components/Article.svelte";
  import CloudinaryImage from '$lib/components/CloudinaryImage.svelte';
</script>

<Article title={ $t('projects.vihara.page.title') } subtitle={ $t('projects.vihara.subtitle') }>
  <Row>
    <Column cols={ 12 } md={ 6 }>
      <CloudinaryImage src="projects/vihara/Referensi_Project_Vihara_2.jpg" alt="Vihara project image 1" widths="sm:90vw md:430px" />
      <p class="!text-center m-0">{ $t('before') }</p>
    </Column>
    <Column cols={ 12 } md={ 6 }>
      <CloudinaryImage src="projects/vihara/Referensi_Project_Vihara.jpg" alt="Vihara project image 2" widths="sm:90vw md:430px" />
      <p class="!text-center m-0">{ $t('after') }</p>
    </Column>
  </Row>
</Article>