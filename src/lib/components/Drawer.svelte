<script lang="ts">
  import { t } from '$lib/translations';
  
  import { mq } from '$lib/mediaquery';
  import CloudinaryImage from '$lib/components/CloudinaryImage.svelte';

  type Menus = { title: string, link: string }
  export let 
    show: boolean,
    menus: Menus[]
</script>

{#if $mq.mobile}
  <div class={ `fixed ease-in-out transition-opacity duration-300 z-30 bg-neutral-800/50 ${show ? 'inset-0 opacity-100' : 'none opacity-0'}` }
    on:click={ () => { show = false } } />
  <aside class={ `transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${show ? 'translate-x-0' : '-translate-x-full'}` }>
    <CloudinaryImage src="/logo.jpg" 
      alt="Website Logo" 
      widths="461px"
      height={150}
      class="object-contain"
      style="margin: 1rem auto;height: 100px;" />
    {#each menus as i}
      <a href={ i.link } on:click={ () => show = false } class="w-full py-3 px-6 block cursor-pointer">
        { i.title }
      </a>
    {/each}
    <a href="/shop" on:click={ () => show = false } class="w-full py-3 px-6 block cursor-pointer">
      { $t('layout.menus.shop') }
    </a>
  </aside>
{/if}