<script lang="ts">
  import { onMount } from 'svelte'

  export let offset: number = 200
  let draw: boolean, lazyElement: HTMLDivElement

  function callback(entries: Array<IntersectionObserverEntry>, observer: IntersectionObserver){
    entries.forEach(entry => {
      if(entry.isIntersecting){
        draw = true
        observer.disconnect()
      }
    });
  }
  onMount(() => {
    if(!('IntersectionObserver' in window)){
      draw = true
      return
    }
    let observer = new IntersectionObserver(callback, { 
      threshold: 0, 
      rootMargin: `0px 0px ${offset}px 0px`,
    })
    observer.observe(lazyElement)
  })
</script>

{#if draw}
  <slot />
{:else}
  <div class="h-24" bind:this={ lazyElement }></div>
{/if}