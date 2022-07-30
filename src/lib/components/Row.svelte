<script lang="ts">
</script>

<div class="{ `row ${ $$props.class || '' }` }" style={ $$props.style } id={ $$props.id }>
  <slot />
</div>

<style global>
  .row > * { padding: 0.25rem; }
</style>

<!-- <script lang="ts">
  export let path: string

  const bracketReg = /(\{[a-zA-Z_][a-zA-Z0-9_]*\})/
  $: parts = path.split(bracketReg)
</script>

{#each parts as part}
  {#if bracketReg.test(part)}
    <slot name='0' />
  {:else}
    { part }
  {/if}
{/each} -->