<script lang="ts">
  type Nullable<T> = T | undefined | null;

  export let
    src: string,
    alt: string,
    height: Nullable<number> = null,
    widths: Nullable<string> = null,
    crop: string = 'limit',
    lazy: boolean = true,
    preload: boolean = false

  const base = 'https://res.cloudinary.com/citraprisma/image/upload/',
    widthsValidation = /^([0-9]+(?:vw|px))(?: md:([0-9]+(?:vw|px)))*$/

  function generateUrl(src: string, width: Nullable<number>, height: Nullable<number>, crop: string){
    let url: string[] = [
      'f_auto',
      'q_auto:low',
      'e_blur:5'
    ];
    if(width) url.push('w_' + width)
    if(height) url.push('h_' + height)
    if(crop) url.push('c_' + crop)
    return base + url.join(',') + (src.startsWith('/') ? src : '/' + src)
  }

  let url: string, 
      mdUrl: Nullable<string> = null, 
      width: Nullable<number> = null
  
  const extracted = (widths && widths.match(widthsValidation)) || []
  const normalizeWidth = extracted[1] && extracted[1].endsWith('vw') ? 
    Math.round(7.68 * parseInt(extracted[1])) : 
    parseInt(extracted[1])
  width = normalizeWidth
  url = generateUrl(src, normalizeWidth, height, crop)
  if(extracted[2] !== undefined){
    let normalizeMdWidth = extracted[2] && extracted[2].endsWith('vw') ? 
      Math.round(10.24 * parseInt(extracted[2])) : 
      parseInt(extracted[2])
    width = normalizeMdWidth
    mdUrl = generateUrl(src, normalizeMdWidth, height, crop)
  }
</script>

<svelte:head> 
  {#if preload}
    {#if mdUrl}
      <link rel="preload" media="(min-width: 769px)" href={ mdUrl } as="image">
    {/if}
    <link rel="preload" media="(max-width: 768px)" href={ url } as="image">
  {/if}
</svelte:head>

<picture>
  {#if mdUrl}
    <source srcset={ mdUrl } media="(min-width: 769px)">
  {/if}
  <img src={ url } 
    { alt } 
    { width }
    { height }
    loading={ lazy ? 'lazy' : null }
    class={ $$props.class } style={ $$props.style } id={ $$props.id }/>
</picture>
