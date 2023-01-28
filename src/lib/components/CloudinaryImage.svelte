<script lang="ts">
  type Nullable<T> = T | undefined | null;

  export let
    src: string,
    alt: string,
    rotate: Nullable<number> = null,
    height: Nullable<number> = null,
    widths: Nullable<string> = null,
    crop: string = 'limit',
    lazy: boolean = true,
    preload: boolean = false

  // https://res.cloudinary.com/citraprisma/image/upload/f_auto,q_30,e_blur:10,
  const base = 'https://res.cloudinary.com/cprisma/f_auto,t_low',
    widthsValidation = /^([0-9]+(?:vw|px))(?: md:([0-9]+(?:vw|px)))*$/
    
  function generateUrl(src: string, width: Nullable<number>, height: Nullable<number>, crop: string, rotate: Nullable<number>){
    let url: string[] = [];
    if(crop) url.push('c_' + crop)
    if(rotate) url.push('a_' + rotate)
    if(width) url.push('w_' + width)
    if(height) url.push('h_' + height)
    return base 
      + (url.length > 0 ? ',' : '') 
      + url.join(',') 
      + (src.startsWith('/') ? src : '/' + src)
  }

  let url: string, 
      mdUrl: Nullable<string> = null, 
      width: Nullable<number> = null
  
  const extracted = (widths && widths.match(widthsValidation)) || []
  const normalizeWidth = extracted[1] && extracted[1].endsWith('vw') ? 
    Math.round(7.68 * parseInt(extracted[1])) : 
    parseInt(extracted[1])
  width = normalizeWidth
  url = generateUrl(src, normalizeWidth, height, crop, rotate)
  if(extracted[2] !== undefined){
    let normalizeMdWidth = extracted[2] && extracted[2].endsWith('vw') ? 
      Math.round(10.24 * parseInt(extracted[2])) : 
      parseInt(extracted[2])
    width = normalizeMdWidth
    mdUrl = generateUrl(src, normalizeMdWidth, height, crop, rotate)
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
