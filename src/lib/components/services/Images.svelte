<script lang="ts">
  import Row from "$lib/components/Row.svelte";
  import Column from "$lib/components/Column.svelte";
  import CloudinaryImage from '$lib/components/CloudinaryImage.svelte';

  export let
    src: string,
    n: number = 3,
    cols: number = 12,
    md: number = 4
  
  $: alt = src.split('/').join(' ')
</script>

<Row>
  {#each Array(n) as _, index}
    {@const i = index + 1}
    <Column { cols } { md }>
      <CloudinaryImage class="bounded" src={ `${src}_${i}.jpeg` } alt={ `${alt} image ${i}` } widths="90vw md:430px" />
    </Column>
  {/each}
</Row>