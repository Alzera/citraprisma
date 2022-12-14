<script lang="ts">
  import { t } from '$lib/translations'

  import { Swiper, SwiperSlide } from 'swiper/svelte';
  import { EffectFade, Autoplay, Lazy as SwiperLazy } from 'swiper';

  import 'swiper/css';
  import 'swiper/css/effect-fade';

  import Row from "$lib/components/Row.svelte";
  import Column from "$lib/components/Column.svelte";
  import Container from "$lib/components/Container.svelte";
  import CloudinaryImage from '$lib/components/CloudinaryImage.svelte';
  import Lazy from '$lib/components/Lazy.svelte';
  import Meta from '$lib/components/Meta.svelte';

  const services = [
    "Waterproofing, High Pressure Grouting, Epoxy Grouting",
    "Gypsum Ceiling Works & Partition",
    "Metal Ceiling Works & Aluminium Facade",
    "Sealants: Precast, Automotive, Aluminium, ACP",
    "Epoxy & PU Flooring",
    "Decorative & Marine Paints",
  ], projects = [
    { image: "projects/ngurah/preview.jpg", alt: "Project ngurah", text: "Bandara Ngurah Rai - Bali", link: "/projects/ngurah" },
    { image: "projects/waterplace/preview.jpg", alt: "Project waterplace", text: "Water Place - Surabaya", link: "/projects/waterplace" },
    { image: "projects/satrio/preview.jpg", alt: "Project satrio", text: "Satrio Tower - Jakarta", link: "/projects/satrio" },
    { image: "projects/juanda/preview.jpg", alt: "Project juanda", text: "Bandara Juanda T2 - Surabaya", link: "/projects/juanda" },
  ], slideshows = [
    "slideshows/Banner_Conwood_1_g5t7nm.jpg",
    "slideshows/Banner_4_sbudc1.jpg",
    "slideshows/Banner_3_ldyjsj.jpg",
    "slideshows/Banner_2_nnh7gp.jpg",
  ]
  let serviceTab = 0
</script>

<Meta title={ $t('page.title') } />

<Container fluid class="!p-0">
  <Swiper modules="{[EffectFade, Autoplay, SwiperLazy]}" 
    autoplay={{
      delay: 5000,
      disableOnInteraction: false,
    }}
    lazy={true}
    effect="fade">
    {#each slideshows as slide, i}
    <SwiperSlide>
      <CloudinaryImage src={slide} alt={'slide-' + i}
        widths="500px md:1024px" 
        crop="fill" 
        lazy={ false }
        preload={ true }
        class="w-full object-cover h-140" />
    </SwiperSlide>
    {/each}
  </Swiper>
</Container>

<div class="text-center m-6">
  <h1 class="text-3xl text-primary">{ $t('section.distributor.header') }</h1>
  <p class="text-xl">{ $t('section.distributor.content') }</p>
</div>

<Container fluid style="background: #f7f7f7">
  <Container class="text-center p-6">
    <h2 class="text-3xl mb-3">
      {@html $t('section.about_us.header.format', { 
        default: $t('section.about_us.header.span') 
      })}
    </h2>
    <p class="text-xl mb-6">{ $t('section.about_us.content') }</p>
    <a class="button-1" href='/about-us'>{ $t('read_more') } &rarr;</a>
  </Container>
</Container>

<Container fluid>
  <Container class="text-center p-6" style="max-width: 1200px">
    <h2 class="text-3xl mb-3">
      {@html $t('section.our_services.header.format', { 
        default: $t('section.our_services.header.span') 
      })}
    </h2>
    <Row class="home-service-block">
      <Column cols={ 12 } md={ 6 }>
        <div class="tab-selectors border border-slate-300 rounded-md">
          {#each services as item, i}
            <div 
              class={ `w-full p-3 text-left border-slate-300 ${ serviceTab == i ? 'selected' : '' } ${ i != services.length - 1 ? 'border-b' : '' }` }
              on:click={ () => { serviceTab = i }}>
              { item }
            </div>
          {/each}
        </div>
      </Column>
      <Column cols={ 12 } md={ 6 }>
        <div class="child border border-slate-300 rounded-md p-4 text-left">
          {#if serviceTab == 0}
            {#each [5, 3, 2] as n, ni}
              {@const i = ni + 1}
              <h3 class="text-xl mb-2 text-primary">{ $t(`section.our_services.content.0.header${i}`) }</h3>
              <p class="text-base">{ $t(`section.our_services.content.0.content${i}`) }</p>
              <ol type="A" class="text-base mb-6">
                {#each Array(n) as _, li}
                  <li>{ $t(`section.our_services.content.0.list${i}.${li}`) }</li>
                {/each}
              </ol>
            {/each}
            <a class="button-1" href='/services/waterproofing'>{ $t('read_more') } &rarr;</a>
          {:else if serviceTab == 1}
            {#each Array(4) as _, i}
              {@const n = i + 1}
              <h3 class="text-xl mb-2 text-primary">{ $t(`section.our_services.content.1.header${n}`) }</h3>
              {#if i == 0}
                <ol type="A" class="text-base mb-6">
                  {#each Array(2) as _, li}
                    <li>{ $t(`section.our_services.content.1.list1.${li}`) }</li>
                  {/each}
                </ol>
              {/if}
            {/each}
            <a class="button-1" href='/services/gypsum'>{ $t('read_more') } &rarr;</a>
          {:else if serviceTab == 2}
            <h3 class="text-xl mb-2 text-primary">{ $t(`section.our_services.content.2.header1`) }</h3>
            <p class="text-base mb-6">{ $t(`section.our_services.content.2.content1`) }</p>
            <a class="button-1" href='/services/metal'>{ $t('read_more') } &rarr;</a>
          {:else if serviceTab == 3}
            <h3 class="text-xl mb-2 text-primary">{ $t(`section.our_services.content.3.header1`) }</h3>
            <p class="text-base">{ $t(`section.our_services.content.3.content1`) }</p>
            <ol type="A" class="text-base mb-6">
              {#each Array(2) as _, li}
                <li>{ $t(`section.our_services.content.3.list1.${li}`) }</li>
              {/each}
            </ol>
            <a class="button-1" href='/services/sealants'>{ $t('read_more') } &rarr;</a>
          {:else if serviceTab == 4}
            <h3 class="text-xl mb-2 text-primary">{ $t(`section.our_services.content.4.header1`) }</h3>
            <p class="text-base">{ $t(`section.our_services.content.4.content1`) }</p>
            <ol type="A" class="text-base mb-6">
              {#each Array(2) as _, li}
                <li>{ $t(`section.our_services.content.4.list1.${li}`) }</li>
              {/each}
            </ol>
            <h3 class="text-xl mb-2 text-primary">{ $t(`section.our_services.content.4.header2`) }</h3>
            <a class="button-1" href='/services/epoxy'>{ $t('read_more') } &rarr;</a>
          {:else if serviceTab == 5}
            <h3 class="text-xl mb-2 text-primary">{ $t(`section.our_services.content.5.header1`) }</h3>
            <p class="text-base">{ $t(`section.our_services.content.5.content1`) }</p>
            <ol type="A" class="text-base mb-6">
              {#each Array(2) as _, li}
                <li>{ $t(`section.our_services.content.5.list1.${li}`) }</li>
              {/each}
            </ol>
            <h3 class="text-xl mb-2 text-primary">{ $t(`section.our_services.content.5.header2`) }</h3>
            <a class="button-1" href='/services/decorative'>{ $t('read_more') } &rarr;</a>
          {/if}
        </div>
      </Column>
    </Row>
  </Container>
</Container>

<Lazy>
  <Container fluid style="background: #f7f7f7" id="projects">
    <Container class="text-center p-6">
      <h2 class="text-3xl mb-3">
        {@html $t('section.our_projects.header.format', { 
          default: $t('section.our_projects.header.span') 
        })}
      </h2>
      <Row class="projects">
        {#each projects as item}
          <Column cols={ 12 } md={ 3 }>
            <a href={item.link == '#' ? '#' : item.link}>
              <CloudinaryImage src={ item.image } alt={ item.alt } widths="90vw md:200px" />
              <span>{ item.text }</span>
            </a>
          </Column>
        {/each}
      </Row>
      <a class="button-1 mt-3" href='/projects'>{ $t('see_more') } &rarr;</a>
    </Container>
  </Container>
</Lazy>

<style lang="scss" global>
  .home-service-block {
    .tab-selectors {
      .selected {
        background: var(--c-primary);
        color: white;
      }
    }
    .child {
      background: #f7f7f7;
    }
  }
  .projects {
    > * { position: relative; }
    img { 
      width: 100%; 
      height: 100%;
    }
    span {
      display: block;
      background: rgba(0, 0, 0, 0.6);
      position: absolute;
      bottom: 0.25rem;
      left: 0.25rem;
      right: 0.25rem;
      color: white;
      font-size: 13px;
      padding: 5px;
    }
  }
  .button-1 {
    border: 1px solid var(--c-primary);
    padding: 7px 15px;
    border-radius: 6px;
    text-decoration: none;
    color: black !important;
    display: inline-block;
    &:hover {
      color: white !important;
      background: var(--c-primary);
    }
  }
</style>