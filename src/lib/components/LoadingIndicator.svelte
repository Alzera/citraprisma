<script lang="ts">
  import { navigating } from '$app/stores';

  let widthPercentage = 0
  let interval: NodeJS.Timer | null = null
  let finish = false
  let show = false
  $: {
    if($navigating){
      widthPercentage = 0
      finish = false
      show = true
      interval = setInterval(update, 50)
    } else if(interval) {
      clearInterval(interval)
      finish = true
      interval = setInterval(update, 17)
    }
  }
  function update() {
    let speed = widthPercentage > 80 ? 0 : 1;
    if(finish) speed = 5
    widthPercentage += speed
    if(widthPercentage > 100 && interval) {
      clearInterval(interval)
      show = false
    }
  }
</script>

{#if show}
  <div class="fixed top-0 left-0 right-0">
    <div class="h-0.5" style={ `background:var(--c-primary);width:${widthPercentage}%` }></div>
  </div>
{/if}