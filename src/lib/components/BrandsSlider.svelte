<script lang="ts">
  import CloudinaryImage from '$lib/components/CloudinaryImage.svelte';

  let paused = false
  const brands = [
    { image:"/products/logo_yoshino.jpg", alt: "Brand yoshino", link: "/brand/yoshino" },
    { image:"/products/logo_knauf.jpg", alt: "Brand knauf", link: "/brand/knauf" },
    { image:"/products/logo_jayaboard.jpg", alt: "Brand jayaboard", link: "#" },
    { image:"/products/logo_bostik.jpg", alt: "Brand bostik", link: "/brand/bostik" },
    { image:"/products/logo_simson.jpg", alt: "Brand simson", link: "#" },
    { image:"/products/logo_shinetsu.jpg", alt: "Brand shinetsu", link: "#" },
    { image:"/products/logo_grace.jpg", alt: "Brand grace", link: "#" },
    { image:"/products/logo_star.jpg", alt: "Brand star", link: "#" },
    { image:"/products/logo_hd.jpg", alt: "Brand hd", link: "#" },
    { image:"/products/logo_kcc.jpg", alt: "Brand kcc", link: "#" },
    { image:"/products/logo_conwood.jpg", alt: "Brand conwood", link: "/brand/conwood" },
    { image:"/products/logo_pioneer.jpg", alt: "Brand pioneer", link: "#" },
    { image:"/products/logo_wacker.jpg", alt: "Brand wacker", link: "/brands/wacker" },
    { image:"/products/logo_rockwool.png", alt: "Brand rockwool", link: "/brand/rockwool" },
    { image:"/products/logo_blesscon.jpg", alt: "Brand blesscon", link: "#" },
    { image:"/products/logo_kalsi.jpg", alt: "Brand kalsi", link: "#" },
    { image:"/products/logo_onduline.jpg", alt: "Brand onduline", link: "#" },
    { image:"/products/logo_royalboard.jpg", alt: "Brand royalboard", link: "#" },
    { image:"/products/logo_troldtekt.jpg", alt: "Brand troldtekt", link: "#" },
  ]
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div on:mouseover={ () => { paused = true } } on:mouseleave={ () => { paused = false } } class="brands wrap">
  <div class={ `content ${paused ? 'paused' : undefined}` }>
    {#each Array(2) as _}
      <div class="element">
        {#each brands as i}
          <a href={ i.link }>
            <CloudinaryImage widths="50vw md:150px" alt={ i.alt } src={ i.image } />
          </a>
        {/each}
      </div>
    {/each}
  </div>
</div>

<style lang="scss" global>
  @keyframes brandsSliderAnimation {
    0% { transform:translateX(0); }
    100% { transform:translateX(-100%); }
  }
  .brands {
    &.wrap { overflow: hidden; }
    a { display: inline-block }
    img {
      user-select: none;
      pointer-events: none;
      margin-right: 36px;
      height: 70px;
    }
    .content { width: 100000px; }
    .element {
      animation-name: brandsSliderAnimation;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      animation-duration: 125s;
      float: left;
      display: flex;
      align-items: center;
    }
    .paused .element { animation-play-state: paused }
  }
  @media (min-width: 768px){
    .brands img {
      height: unset;
    }
  }
  </style>