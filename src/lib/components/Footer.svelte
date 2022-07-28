<script lang="ts">
  import { mq } from '$lib/mediaquery';

  import Row from "$lib/components/Row.svelte";
  import Column from "$lib/components/Column.svelte";
  import Container from "$lib/components/Container.svelte";
  import CloudinaryImage from '$lib/components/CloudinaryImage.svelte';

  type Menus = { title: string, link: string }
  export let menus: Menus[]

  const socials = [
    { link: "https://www.facebook.com/citra.p.mandiri.33", text: "Facebook" },
    { link: "https://www.instagram.com/cpm.pt", text: "Instagram" },
    { link: "https://tokopedia.link/NeTzBJCohV", text: "Tokopedia" },
    { link: "https://shopee.co.id/starpr1sma?smtt=0.0.9", text: "Shopee" },
  ]
</script>

<footer class="border-t border-slate-300 text-base">
  <Container fluid class="py-6">
    <Row class="mx-auto" style="max-width: 1500px;">
      <Column cols={ 12 } md={ 4 } class="footer-col">
        <CloudinaryImage src="/logo_transparent.png" 
          alt="Website Logo" 
          widths="60vw md:400px"
          height={ 120 }
          style="max-width: 200px;object-fit:contain;" />
        {#if !$mq.mobile}
          <div class="flex flex-col">
            {#each menus as item}
              <a sveltekit:prefetch href={ item.link }>{ item.title }</a>
            {/each}
            <a href="/sitemap.xml">Sitemap</a>
          </div>
        {/if}
      </Column>
      <Column cols={ 12 } md={ 4 } class="footer-col">
        <h3 class="text-primary">Surabaya - Head Office</h3>
        <a href="https://g.page/CitraPrisma?share" target="_blank" rel="noopener noreferrer">
          Komp. Manyar Megah Indah B6<br/>Jl. Ngagel Jaya Selatan,<br/>Surabaya 60284
        </a>
        {#if $mq.mobile}
          <div class="flex flex-col">
            <a href="tel:+62315040788">Phone : (031) 5040788</a>
            <a href="tel:+62315043488">Fax   : (031) 5043488</a>
            <a href="https://wa.me/6281334153798">Whatsapp   : 0813 3415 3798</a>
          </div>
        {/if}
        <h5 class="text-primary mt-2">Marketing email :</h5>
        <p class="flex flex-col">
          <a href="mailto:sales@citraprisma.com">sales@citraprisma.com</a>
        </p>
        <h5 class="text-primary mt-2">Recruitment email :</h5>
        <p class="flex flex-col">
          <a href="mailto:personalia@citraprisma.com">personalia@citraprisma.com</a>
        </p>
      </Column>
      <Column cols={ 12 } md={ 4 } class="footer-col">
        <div v-if="!$breakpoints.mobile">
          <h3 class="text-primary">&nbsp;</h3>
          <div class="flex flex-col">
            <a href="tel:+62315040788">Phone : (031) 5040788</a>
            <a href="tel:+62315043488">Fax   : (031) 5043488</a>
            <a href="https://wa.me/6281334153798">Whatsapp   : 0813 3415 3798</a>
          </div>
        </div>
        <div class="flex flex-col">
          <h3 class="text-primary mt-2">Follow Us :</h3>
          {#each socials as item}
            <a href={ item.link } target="_blank" rel="noopener noreferrer">
              { item.text }
            </a>
          {/each}
        </div>
      </Column>
      <Column cols={ 12 } md={ 4 } class="footer-col">
      <h3 class="text-primary">Jakarta - Branch</h3>
        <p class="flex flex-col">
          <a href="https://goo.gl/maps/CAQfp7YGWi1aiW6h6" target="_blank" rel="noopener noreferrer">
            Gudang Arcadia Blok G5 No.3<br/>Daan Mogot KM, 21 Batuceper<br/>Tangerang
          </a>
          <a href="tel:+622155783659">Phone : (021) 5578 3659</a>
          <a href="https://wa.me/6285691620098">Whatsapp   : 0856 9162 0098</a>
        </p>
      </Column>
      <Column cols={ 12 } md={ 4 } class="footer-col">
        <h3 class="text-primary">Banjarmasin - Branch</h3>
        <p class="flex flex-col">
          <a href="https://goo.gl/maps/fyyXcQBcYZaiEPqSA" target="_blank" rel="noopener noreferrer">
            Jl. A. Yani 55 KM 4,5<br/>Banjarmasin
          </a>
          <a href="tel:+625113262266">Phone : (0511) 3262266</a>
          <a href="tel:+625113271277">Fax   : (0511) 3271277</a>
          <a href="https://wa.me/6281232373728">Whatsapp   : 0813 3237 3728</a>
        </p>
      </Column>
    </Row>
  </Container>
  <Container fluid class="p-1 text-sm text-center">
    Copyright &copy; Citra Prisma Mandiri 2022 | Alzera Cita
  </Container>
</footer>

<style lang="scss" global>
  footer {
    padding-bottom: 65px;
    &.text-base {
      text-align: left;
    }
    >:nth-child(1){
      background: #eee !important;
    }
    >:nth-child(2){
      background: #555 !important;
      color: #f5f5f5;
    }
  }
  @media (min-width: 768px){
    footer { padding: 0; }
  }
  @media (min-width: 1024px){
    .footer-col {
      width:20%;
      max-width:20%;
    }
  }
</style>