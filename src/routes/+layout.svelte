<script lang="ts">  
  import { v } from '$lib/variables';
  import { t } from '$lib/translations';
  import { initToast } from '$lib/toast'
  import { onMount } from 'svelte'
  import { mq } from '$lib/mediaquery';

  onMount(() => {
    initToast();
    (window as any).minimalAnalytics = {
      trackingId: v.gaKey,
      autoTrack: true,
    }
  })

  import '@unocss/reset/tailwind.css'
  import 'uno.css'
  import "../app.scss";
  import "../frontend.scss";
  
  import Row from "$lib/components/Row.svelte";
  import Column from "$lib/components/Column.svelte";
  import Container from "$lib/components/Container.svelte";
  import LanguageSelector from "$lib/components/LanguageSelector.svelte";
  import CloudinaryImage from '$lib/components/CloudinaryImage.svelte';
  import Drawer from '$lib/components/Drawer.svelte';
  import Lazy from '$lib/components/Lazy.svelte';
  import PageTransition from '$lib/components/PageTransition.svelte';
  import LoadingIndicator from '$lib/components/LoadingIndicator.svelte';

  export let url = "";

  const menuStyle = 'flex flex-col justify-center items-center';

  let y = 0
  let drawer = false
  // let shopsub = false

  $: showBottomNav = y > 200;
  $: menus = [
    { title: $t('layout.menus.home'), link: "/" },
    { title: $t('layout.menus.about_us'), link: "/about-us" },
    { title: $t('layout.menus.services'), link: "/services" },
    { title: $t('layout.menus.projects'), link: "/projects" },
    { title: $t('layout.menus.products'), link: "/products" },
    { title: $t('layout.menus.contact_us'), link: "/contact-us" },
  ]
</script>

<svelte:head>
  <meta content={ $t('layout.description') } name="description">
</svelte:head>
<svelte:window bind:scrollY={y} />

<header>
  <LoadingIndicator />
  <Container>
    <Row>
      <Column cols={ 12 } md={ 3 } class="flex justify-center md:justify-start pb-0">
        <CloudinaryImage preload={ true } lazy={ false } src="logo.jpg" alt="Website Logo" widths="461px" height={ 150 } class="h-24 object-contain"/>
      </Column>
      <Column cols={ 12 } md={ 9 } class="flex flex-col md:justify-end items-center md:items-end">
        <LanguageSelector />
      </Column>
    </Row>
  </Container>
  <nav>
    <div class="h-12 bg-primary">
      <Container>
        {#if $mq.mobile}
          <Row class="md:hidden main-menu">
            <Column cols={ 4 }>
              <div class={ `cursor-pointer ${menuStyle}` } on:click={ () => { drawer = !drawer } }>
                <span class="text-white">{ $t('layout.menus.menu') }</span>
              </div>
            </Column>
            <Column cols={ 4 }>
              <a href="/" class={ menuStyle }>
                <span class="text-white">{ $t('layout.menus.home') }</span>
              </a>
            </Column>
            <Column cols={ 4 }>
              <a href="/contact-us" class={ menuStyle }>
                <span class="text-white">{ $t('layout.menus.contact_us') }</span>
              </a>
            </Column>
          </Row>
        {:else}
          <Row class="!hidden !md:flex main-menu overflow-visible">
            {#each menus as i}
              <Column class="flex justify-center">
                <a href={ i.link } class="menu text-lg">
                  <span class="text-white">{ i.title }</span>
                </a>
              </Column>
            {/each}
            <Column class="flex justify-center overflow-visible">
              <a href="/shop" rel="external" class="menu text-lg">
                <span class="text-white">{ $t('layout.menus.shop') }</span>
              </a>
              <!-- 
                on:hover={ () => { shopsub = !shopsub } }
              {#if shopsub}
                <div class="bg-primary absolute top-10.3 left-0 px-4 min-w-50 shadow-2xl">
                  <a href="/shop/my-account" rel="external" class="menu block text-base py-1">
                    <span class="text-white">{ $t('layout.menus.shop.my_account') }</span>
                  </a>
                  <a href="/shop/products" rel="external" class="menu block text-base py-1">
                    <span class="text-white">{ $t('layout.menus.shop.products') }</span>
                  </a>
                  <a href="/shop/categories" rel="external" class="menu block text-base py-1">
                    <span class="text-white">{ $t('layout.menus.shop.categories') }</span>
                  </a>
                  <a href="/shop/brands" rel="external" class="menu block text-base py-1">
                    <span class="text-white">{ $t('layout.menus.shop.brands') }</span>
                  </a>
                </div>
              {/if} -->
            </Column>
          </Row>
        {/if}
      </Container>
    </div>
    {#if $mq.mobile}
      <Row class="mobile-main-menu ease-in-out transition-all duration-300" style={ showBottomNav ? '' : 'transform:translateY(100%)' }>
        <Column cols={ 4 }>
          <div class={ `cursor-pointer ${menuStyle}` } on:click={ () => { drawer = !drawer } }>
            <CloudinaryImage widths="50px" src="hamburger.png" alt="hamburger" class="object-contain" style="height:26px" />
            <span class="text-white">{ $t('layout.menus.menu') }</span>
        </div>
        </Column>
        <Column cols={ 4 }>
          <a href="/" class={ menuStyle }>
            <CloudinaryImage widths="50px" src="home.png" alt="home" class="object-contain" style="height:26px" />
            <span class="text-white">{ $t('layout.menus.home') }</span>
          </a>
        </Column>
        <Column cols={ 4 }>
          <a href="/contact-us" class={ menuStyle }>
            <CloudinaryImage widths="50px" src="customer_services.png" alt="customer_services" class="object-contain" style="height:35px;margin:-6px;" />
            <span class="text-white">{ $t('layout.menus.contact_us') }</span>
          </a>
        </Column>
      </Row>
      <Drawer bind:show={ drawer } { menus } />
    {/if}
  </nav>
</header>
<main>
  <article>
    <PageTransition {url}>
      <slot />
    </PageTransition>
    <Lazy>
      <Container fluid class="text-center px-0 py-6">
        <h1 class="text-3xl mb-3">
          {@html $t('layout.section_header.our_brands.format', { 
            default: $t('layout.section_header.our_brands.brands') 
          })}
        </h1>
        {#await import("$lib/components/BrandsSlider.svelte") then { default: Comp }}
          <Comp />
        {/await}
      </Container>
    </Lazy>
  </article>
</main>
<Lazy>
  {#await import("$lib/components/Footer.svelte") then { default: Comp }}
    <Comp { menus } />
  {/await}
</Lazy>