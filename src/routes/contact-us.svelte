<script lang="ts">
  import sign from 'jwt-encode'
  import { v } from '$lib/variables';
  import { page } from '$app/stores';
  import { MetaTags } from 'svelte-meta-tags';
  import { t } from '$lib/translations';
  import { show } from '$lib/toast'
  const tp = 'contact-us.'
  
  import Row from "$lib/components/Row.svelte";
  import Column from "$lib/components/Column.svelte";
  import Container from "$lib/components/Container.svelte";

  let
    name = "",
    email = "",
    work = "Contractor",
    otherwork = "",
    phone = "",
    address = "",
    nacessties = "Project Support",
    othernacessties = "",
    message = "",
    loading = false
  
  function submit(){
    if(loading) return
    loading = true
    var now = Math.floor(Date.now() / 1000)
    var token = sign({ 
      foo: 'bar',
      exp: now + (5 * 60),
      nbf: now,
      iat: now,
      data: {
        name: name,
        email: email,
        work: work,
        otherwork: otherwork,
        phone: phone,
        address: address,
        nacessties: nacessties,
        othernacessties: othernacessties,
        message: message,
      }
    }, v.mailKey);
    fetch('https://www.citraprisma.com/php/mail.php', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }).then(res => {
      show($t('message_sent'))
    }).catch(err => {
      show($t('message_error'))
    }).finally(() => {
      loading = false
    })
  }
</script>

<MetaTags
  title={ $t(tp + 'page.title') }
  titleTemplate={ "%s | " + v.webName }
  description={ $t(tp + 'page.description') }
  canonical={ v.webLink + $page.url.pathname }
/>

<Container class="my-2">
  <h1 class="text-4xl text-primary">{ $t(tp + 'page.title') }</h1>
  <h2 class="text-xl mb-5">{ $t(tp + 'subtitle') }</h2>
  <Row>
    <Column cols={ 12 } md={ 6 }>
      <h3 class="text-2xl">Surabaya</h3>
      <table class="text-base">
        <tr>
          <td><i class="i-mdi-map text-lg block text-primary mr-2" /></td>
          <td>
            <a class="contact-page-visible" href="https://g.page/CitraPrisma?share" target="_blank" rel="noopener noreferrer">
              Komp. Manyar Megah Indah B6<br/>Jl. Ngagel Jaya Selatan, Surabaya 60284
            </a>
          </td>
        </tr>
        <tr>
          <td><i class="i-mdi-phone text-lg block text-primary mr-2" /></td>
          <td><a class="contact-page-visible" href="tel:+62315040788">Phone : (031) 5040788</a></td>
        </tr>
        <tr>
          <td><i class="i-mdi-fax text-lg block text-primary mr-2" /></td>
          <td><a class="contact-page-visible" href="tel:+62315043488">Fax   : (031) 5043488</a></td>
        </tr>
        <tr>
          <td><i class="i-mdi-whatsapp text-lg block text-primary mr-2" /></td>
          <td><a class="contact-page-visible" href="https://wa.me/6281334153798">Whatsapp   : 0813 3415 3798</a></td>
        </tr>
      </table>
      <h5 class="text-lg">Marketing email:</h5>
      <table class="text-base">
        <tr>
          <td><i class="i-mdi-email text-lg block text-primary mr-2" /></td>
          <td><a class="contact-page-visible" href="mailto:sales@citraprisma.com">sales@citraprisma.com</a></td>
        </tr>
      </table>
      <h5 class="text-lg">Recruitment email:</h5>
      <table class="text-base">
        <tr>
          <td><i class="i-mdi-email text-lg block text-primary mr-2" /></td>
          <td><a class="contact-page-visible" href="mailto:personalia@citraprisma.com">personalia@citraprisma.com</a></td>
        </tr>
      </table>
    </Column>
    <Column cols={ 12 } md={ 6 }>
      <h3 class="text-2xl">Jakarta</h3>
      <table class="text-base">
        <tr>
          <td><i class="i-mdi-map text-lg block text-primary mr-2" /></td>
          <td>
            <a class="contact-page-visible" href="https://goo.gl/maps/CAQfp7YGWi1aiW6h6" target="_blank" rel="noopener noreferrer">
              Gudang Arcadia Blok G5 No.3<br/>Daan Mogot KM, 21 Batuceper – Tangerang
            </a>
          </td>
        </tr>
        <tr>
          <td><i class="i-mdi-phone text-lg block text-primary mr-2" /></td>
          <td><a class="contact-page-visible" href="tel:+622155783659">Phone : (021) 5578 3659</a></td>
        </tr>
        <tr>
          <td><i class="i-mdi-whatsapp text-lg block text-primary mr-2" /></td>
          <td><a class="contact-page-visible" href="https://wa.me/6285691620098">Whatsapp   : 0856 9162 0098</a></td>
        </tr>
      </table>
      <br>
      <h3 class="text-2xl">Banjarmasin</h3>
      <table class="text-base">
        <tr>
          <td><i class="i-mdi-map text-lg block text-primary mr-2" /></td>
          <td>
            <a class="contact-page-visible" href="https://goo.gl/maps/fyyXcQBcYZaiEPqSA" target="_blank" rel="noopener noreferrer">
              Jl. A. Yani 55 KM 4,5, Banjarmasin
            </a>
          </td>
        </tr>
        <tr>
          <td><i class="i-mdi-phone text-lg block text-primary mr-2" /></td>
          <td><a class="contact-page-visible" href="tel:+625113262266">Phone : (0511) 3262266</a></td>
        </tr>
        <tr>
          <td><i class="i-mdi-fax text-lg block text-primary mr-2" /></td>
          <td><a class="contact-page-visible" href="tel:+625113271277">Fax   : (0511) 3271277</a></td>
        </tr>
        <tr>
          <td><i class="i-mdi-whatsapp text-lg block text-primary mr-2" /></td>
          <td><a class="contact-page-visible" href="https://wa.me/6281232373728">Whatsapp   : 0813 3237 3728</a></td>
        </tr>
      </table>
    </Column>
  </Row>
  <hr class="my-2">
  <form on:submit|preventDefault={ submit }>
    <input type="text" bind:value={ name } placeholder="Nama" class="form-input border-slate-300 w-full" required />
    <input type="email" bind:value={ email } placeholder="E-mail" class="form-input border-slate-300 w-full mt-2" required />
    <select bind:value={ work } placeholder="Saya adalah" class="form-select border-slate-300 w-full mt-2" required>
      <option value="Contractor">Contractor</option>
      <option value="Aplicator">Aplicator</option>
      <option value="Owner">Owner</option>
      <option value="Other">Other</option>
    </select>
    {#if work == 'other'}
      <input type="text" bind:value={ otherwork } placeholder="Pekerjaan Lain" class="form-input border-slate-300 w-full mt-2" />
    {/if}
    <input type="tel" bind:value={ phone } placeholder="No Telepon" class="form-input border-slate-300 w-full mt-2" required />
    <input type="text" bind:value={ address } placeholder="Alamat" class="form-input border-slate-300 w-full mt-2" required />
    <select bind:value={ nacessties } placeholder="Jenis Keperluan" class="form-select border-slate-300 w-full mt-2" required>
      <option value="Project Support">Project Support</option>
      <option value="Technical">TecASSIST(Technical)</option>
      <option value="Sales">Sales Enquiries</option>
      <option value="Other">Other Enquiries</option>
    </select>
    {#if nacessties == 'other'}
      <input type="text" bind:value={ othernacessties } placeholder="Keperluan Lain" class="form-input border-slate-300 w-full mt-2" />
    {/if}
    <textarea placeholder="Pesan" bind:value={ message } class="form-input border-slate-300 w-full mt-2 mb-4" required></textarea>
    <button class="w-full px-3 py-2 text-white rounded-lg" style="background:var(--c-primary)" >
      {#if loading}
        <svg role="status" style="margin-top:-0.2rem;" class="inline w-4 h-4 mr-2 text-slate-300 animate-spin fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
      {/if}
      { $t(tp + 'send') }
    </button>
  </form>
</Container>