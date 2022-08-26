<script lang="ts">
  import { t } from '$lib/translations';
  const tp = 'brands.onduline.'

  import Row from "$lib/components/Row.svelte";
  import Column from "$lib/components/Column.svelte";
  import Article from "$lib/components/Article.svelte";
  import CloudinaryImage from '$lib/components/CloudinaryImage.svelte';

  const links = [
    { image: "brands/onduline/img19.jpg", logo: "brands/onduline/Logo_Onducasa.png", href: "/brands/onduline/onducasa", text: "ONDUCASA", content:"onducasa" },
    { image: "brands/onduline/img635.jpg", logo: "brands/onduline/Logo_Bituline.png", href: "/brands/onduline/bituline", text: "BITULINE", content:"bituline" },  
  ]
</script>

<Article title={ $t(tp + 'page.title') } desc={ $t(tp + 'page.description') } subtitle={ $t(tp + 'page.description') }>
  <Row>
    {#each links as link}
      <Column cols={ 12 } md={ 6 }>
        <a href={ link.href } class="block relative rounded-2xl border border-slate-300 overflow-hidden">
          <CloudinaryImage class="w-full h-64 object-cover" src={ link.image } alt={ `banner ${link.text}` } widths="300px" lazy={ false } height={ 300 } crop="fill" />
          <CloudinaryImage class="absolute top-8 right-0" src={ link.logo } alt={ `logo ${link.text}` } widths="150px" lazy={ false } height={ 100 } />
          <h1 class="text-4xl m-3" style="color:#e1464a">{ link.text }</h1>
          <p class="text-base m-3">{ $t(tp + link.content) }</p>
        </a>
      </Column>
    {/each}
  </Row>
</Article>