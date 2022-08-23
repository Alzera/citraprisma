<script>
  import { fly } from "svelte/transition";
  import { mq } from '$lib/mediaquery';
  export let url = "";
</script>

{#if $mq.mobile}
  {#key url}
    <div 
      in:fly={{ y:-5, duration: 200, delay: 250 }}
      out:fly={{ y: -5, duration: 200 }}>
      <slot />
    </div>
  {/key}
{:else}
  <slot />
{/if}