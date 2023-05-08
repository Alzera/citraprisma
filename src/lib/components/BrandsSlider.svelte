<script lang="ts">
  import CloudinaryImage from '$lib/components/CloudinaryImage.svelte';

  let paused = false
  const brands = [
    { image:"/products/logo_yoshino.jpg", alt: "yoshino", link: "/products/yoshino" },
    { image:"/products/logo_knauf.jpg", alt: "knauf", link: "/products/knauf" },
    { image:"/products/logo_jayaboard.jpg", alt: "jayaboard", link: "#" },
    { image:"/products/logo_bostik.jpg", alt: "bostik", link: "/products/bostik" },
    // { image:"/products/logo_simson.jpg", alt: "simson", link: "#" },
    // { image:"/products/logo_shinetsu.jpg", alt: "shinetsu", link: "#" },
    { image:"/products/logo_grace.jpg", alt: "grace", link: "/products/grace" },
    { image:"/products/logo_star.jpg", alt: "star", link: "#" },
    { image:"/products/logo_hd.jpg", alt: "hd", link: "#" },
    { image:"/products/logo_kcc.jpg", alt: "kcc", link: "#" },
    { image:"/products/logo_conwood.jpg", alt: "conwood", link: "/products/conwood" },
    // { image:"/products/logo_pioneer.jpg", alt: "pioneer", link: "#" },
    { image:"/products/logo_wacker.jpg", alt: "wacker", link: "/products/wacker" },
    { image:"/products/logo_rockwool.png", alt: "rockwool", link: "/products/rockwool" },
    { image:"/products/logo_blesscon.jpg", alt: "blesscon", link: "/products/blesscon" },
    { image:"/products/logo_kalsi.jpg", alt: "kalsi", link: "/products/kalsi" },
    { image:"/products/logo_onduline.jpg", alt: "onduline", link: "/products/onduline" },
    { image:"/products/logo_royalboard.jpg", alt: "royalboard", link: "/products/royalboard" },
    { image:"/products/logo_troldtekt.jpg", alt: "troldtekt", link: "/products/troldtekt" },
    { image:"/products/logo_adcos.jpg", alt: "adcos", link: "/products/troldtekt" },
  ]
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div on:mouseover={ () => { paused = true } } on:mouseleave={ () => { paused = false } } class="brands wrap">
  <div class={ `content ${paused ? 'paused' : undefined}` }>
    {#each Array(2) as _}
      <div class="element">
        {#each brands as i}
          <a href={ i.link }>
            <CloudinaryImage widths="50vw md:200px" alt={ i.alt } src={ i.image } />
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
      object-fit: contain;
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
      width: 10rem;
    }
  }
  </style>