<script lang="ts">
  // import { onMount } from 'svelte'

  type Nullable<T> = T | undefined | null;

  export let
    src: string,
    alt: string,
    height: Nullable<number> = null,
    widths: Nullable<string> = null,
    crop: string = 'limit',
    lazy: boolean = true
    // preload: boolean = false

  const base = 'https://res.cloudinary.com/citraprisma/image/upload/',
    widthsValidation = /^([0-9]+(?:vw|px))(?: md:([0-9]+(?:vw|px)))*$/

  function generateUrl(src: string, width: Nullable<number>, height: Nullable<number>, crop: string){
    let url: string[] = ['f_auto','q_auto'];
    if(width) url.push('w_' + width)
    if(height) url.push('h_' + height)
    if(crop) url.push('c_' + crop)
    return base + url.join(',') + (src.startsWith('/') ? src : '/' + src)
  }

  let url: string, sizes: Nullable<string>, srcset: Nullable<string>, mdUrl: string, width: Nullable<number> = null
  // let preloadHref: string = ''
  $: {
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
      sizes = `(max-width: 768px) ${normalizeWidth}px, ${normalizeMdWidth}px`
      srcset = `${url} ${normalizeWidth}w, ${mdUrl} ${normalizeMdWidth}w`
    } else {
      sizes = null
      srcset = null
    }
  }

  // onMount(() => {
  //   if(preload && preloadHref == '')
  //     preloadHref = !window.matchMedia('(max-width: 768px)').matches && mdUrl ? mdUrl : url
  // })
</script>

<!-- https://res.cloudinary.com/citraprisma/image/upload/f_auto,q_auto,w_461,h_150,c_limit/logo.jpg -->
<!-- https://res.cloudinary.com/citraprisma/image/upload/f_auto,q_auto,w_461,h_150,c_limit/logo.jpg -->
<!-- https://res.cloudinary.com/citraprisma/image/upload/f_auto,q_auto,w_600,h_350,c_fill/banner.jpg -->
<!-- https://res.cloudinary.com/citraprisma/image/upload/f_auto,q_auto,w_600,h_350,c_fill/banner.jpg -->
<!-- <svelte:head> 
  {#if preload}
	  <link rel="preload" as="image" href={ preloadHref }>
  {/if}
</svelte:head> --> <!-- preload comes together with the component, the preload and image is loading on the same time, so the preload becomes redundant -->

<img 
  src={ url } 
  { sizes } 
  { srcset } 
  { width }
  { height }
  loading={ lazy ? 'lazy' : null } 
  alt={ alt } 
  class={ $$props.class } style={ $$props.style } id={ $$props.id }/>