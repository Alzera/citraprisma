<script lang="ts">
  type Nullable<T> = T | undefined | null;

  export let 
    cols: Nullable<number> = null,
    md: Nullable<number> = null

  let cls = [ 'col' ]
  if(cols) cls.push(`w-col-${cols}`)
  if(md) cls.push(`md:w-col-${md}`)
  let classes = cls.join(' ') + ' ' + ($$props.class || '');
</script>

<div class={ classes } style={ $$props.style } id={ $$props.id }>
  <slot />
</div>

<style lang="scss" global>
  @use "sass:math";

  @for $i from 0 through 12 {
    $percentage: percentage(math.div($i, 12));
    .w-col-#{$i} { width: $percentage; max-width: $percentage; }
  }
  @media (min-width: 768px){
    @for $i from 0 through 12 {
      $percentage: percentage(math.div($i, 12));
      .md\:w-col-#{$i} { width: $percentage; max-width: $percentage; }
    }
  }
</style>