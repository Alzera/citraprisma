<script lang="ts">
  export let 
    fluid: boolean = false
</script>

<div class="{ `${$$props.class || ''} ${fluid ? 'p-3' : 'p-3 max-w-4xl md:mx-auto'}` }" style={ $$props.style } id={ $$props.id }>
  <slot />
</div>