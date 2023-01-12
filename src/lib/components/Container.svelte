<script lang="ts">
  export let 
    fluid: boolean = false
</script>

<div class="{ `${$$props.class || ''} ${fluid ? 'p-3' : 'cont'}` }" style={ $$props.style } id={ $$props.id }>
  <slot />
</div>