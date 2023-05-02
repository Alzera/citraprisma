<script lang="ts">
  import { t } from '$lib/translations';
  const tp = 'products.grace.'

  import Row from "$lib/components/Row.svelte";
  import Column from "$lib/components/Column.svelte";
  import Article from '$lib/components/Article.svelte';
  import CloudinaryImage from '$lib/components/CloudinaryImage.svelte';

  const links = [
    { image: "products/grace/silcor/img1187.jpg", href: "/products/grace/silcor", text: "Silcor", content:"silcor" },
    { image: "products/grace/bituthene/img18.jpg", href: "/products/grace/bituthene", text: "Bituthene", content:"bituthene" },
    { image: "products/grace/betec/img22.jpg", href: "/products/grace/betec", text: "Betec", content:"betec" },
    { image: "products/grace/deneef/img700.jpg", href: "/products/grace/deneef", text: "De Neef", content:"deneef" },
  ]
</script>

<Article title={ $t(tp + 'page.title') }>
  <br/>
  <Row>
    {#each links as link}
      <Column cols={ 12 } md={ 6 }>
        <a href={ link.href } class="block rounded-2xl border border-slate-300 overflow-hidden">
          <CloudinaryImage class="w-full h-64 object-cover" src={ link.image } alt={ `banner ${link.text}` } widths="300px" lazy={ false } height={ 300 } crop="fill" />
          <h1 class="text-4xl m-3" style="color:#77c042">{ link.text }</h1>
          <p class="m-3">{ $t(tp + link.content) }</p>
        </a>
      </Column>
    {/each}
  </Row>
</Article>