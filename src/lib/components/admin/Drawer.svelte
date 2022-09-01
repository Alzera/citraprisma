<script lang="ts">
  import rest from '$lib/rest'
  import { user } from '$lib/stores'
  import { goto } from '$app/navigation';
  import { mq } from '$lib/mediaquery';

  import CloudinaryImage from '$lib/components/CloudinaryImage.svelte';

  let show = true
  let name = ""

  const userUnsubscribe = user.subscribe(v => {
    name = v ? v.name : ''
  })
    
  let menus = [
    { title: 'Dashboard', link: "/4dm1n" },
    { title: 'Products', link: "/4dm1n/products" },
  ]

  function logout() {
    rest("users/logout", "POST")
    .then(() => {
      user.set(null)
      goto('/4dm1n/login')
    })
  }
</script>

{#if $mq.mobile}
<div class={ `fixed ease-in-out transition-opacity duration-300 z-30 bg-neutral-800/50 ${show ? 'inset-0 opacity-100' : 'none opacity-0'}` }
  on:click={ () => { show = false } } />
{/if}
<aside class={ `flex flex-col py-6 bg-slate-100 border-r border-slate-300 transform top-0 left-0 w-64 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${show ? 'translate-x-0' : '-translate-x-full'}` }>
  <CloudinaryImage src="/logo_transparent.jpg" 
    alt="Website Logo" 
    widths="461px"
    height={150}
    class="object-contain max-w-54 mx-auto mb-6" />
  {#each menus as i}
    <a href={ i.link } on:click={ () => {
      if($mq.mobile) show = false 
    }} class="w-full py-3 px-6 block cursor-pointer hover:bg-slate-200">
      { i.title }
    </a>
  {/each}
  <div class="flex-1"></div>
  <h4 class="px-6">Hellow <span class="font-bold">{ name }</span></h4>
  <button class="w-full pt-1 px-6 block cursor-pointer text-left" on:click={ logout }>Logout</button>
</aside>