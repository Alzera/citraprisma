<script lang="ts">
  import sign from 'jwt-encode'
  import { v } from '$lib/variables';
  import { t } from '$lib/translations';
  import { toast } from '$lib/toast'
  const tp = 'contact-us.'
  
  import Row from "$lib/components/Row.svelte";
  import Column from "$lib/components/Column.svelte";
  import Container from "$lib/components/Container.svelte";
  import Meta from '$lib/components/Meta.svelte';

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
    fetch('https://www.citraprisma.id/php/mail.php', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }).then(res => {
      toast($t('message_sent'))
    }).catch(err => {
      toast($t('message_error'))
    }).finally(() => {
      loading = false
    })
  }
</script>

<Meta title={ $t(tp + 'page.title') } />

<Container class="my-2">
  <h1 class="text-4xl text-primary">{ $t(tp + 'page.title') }</h1>
  <h2 class="text-xl mb-5">{ $t(tp + 'subtitle') }</h2>
  <Row>
    <Column cols={ 12 } md={ 6 }>
      <h3 class="text-2xl">Surabaya</h3>
      <table class="text-base">
        <tr>
          <td><i class="i-mdi-map" /></td>
          <td>
            <a href="https://g.page/CitraPrisma?share" rel="noopener noreferrer external">
              Komp. Manyar Megah Indah B6<br/>Jl. Ngagel Jaya Selatan, Surabaya 60284
            </a>
          </td>
        </tr>
        <tr>
          <td><i class="i-mdi-phone" /></td>
          <td><a href="tel:+62315040788" rel="noopener noreferrer external">Phone : (031) 5040788</a></td>
        </tr>
        <tr>
          <td><i class="i-mdi-fax" /></td>
          <td><a href="tel:+62315043488" rel="noopener noreferrer external">Fax   : (031) 5043488</a></td>
        </tr>
        <tr>
          <td><i class="i-mdi-whatsapp" /></td>
          <td><a href="https://wa.me/6281334153798" rel="noopener noreferrer external">Whatsapp   : 0813 3415 3798</a></td>
        </tr>
      </table>
      <h5 class="text-lg">Marketing email:</h5>
      <table class="text-base">
        <tr>
          <td><i class="i-mdi-email" /></td>
          <td><a href="mailto:sales@citraprisma.com" rel="noopener noreferrer external">sales@citraprisma.com</a></td>
        </tr>
      </table>
      <h5 class="text-lg">Recruitment email:</h5>
      <table class="text-base">
        <tr>
          <td><i class="i-mdi-email" /></td>
          <td><a href="mailto:personalia@citraprisma.com" rel="noopener noreferrer external">personalia@citraprisma.com</a></td>
        </tr>
      </table>
    </Column>
    <Column cols={ 12 } md={ 6 }>
      <h3 class="text-2xl">Jakarta</h3>
      <table class="text-base">
        <tr>
          <td><i class="i-mdi-map" /></td>
          <td>
            <a href="https://goo.gl/maps/CAQfp7YGWi1aiW6h6" rel="noopener noreferrer external">
              Gudang Arcadia Blok G5 No.3<br/>Daan Mogot KM, 21 Batuceper – Tangerang
            </a>
          </td>
        </tr>
        <tr>
          <td><i class="i-mdi-phone" /></td>
          <td><a href="tel:+622155783659" rel="noopener noreferrer external">Phone : (021) 5578 3659</a></td>
        </tr>
        <tr>
          <td><i class="i-mdi-whatsapp" /></td>
          <td><a href="https://wa.me/6285691620098" rel="noopener noreferrer external">Whatsapp   : 0856 9162 0098</a></td>
        </tr>
      </table>
      <br>
      <h3 class="text-2xl">Banjarmasin</h3>
      <table class="text-base">
        <tr>
          <td><i class="i-mdi-map" /></td>
          <td>
            <a href="https://goo.gl/maps/fyyXcQBcYZaiEPqSA" rel="noopener noreferrer external">
              Jl. A. Yani 55 KM 4,5, Banjarmasin
            </a>
          </td>
        </tr>
        <tr>
          <td><i class="i-mdi-phone" /></td>
          <td><a href="tel:+625113262266" rel="noopener noreferrer external">Phone : (0511) 3262266</a></td>
        </tr>
        <tr>
          <td><i class="i-mdi-fax" /></td>
          <td><a href="tel:+625113271277" rel="noopener noreferrer external">Fax   : (0511) 3271277</a></td>
        </tr>
        <tr>
          <td><i class="i-mdi-whatsapp" /></td>
          <td><a href="https://wa.me/6281232373728" rel="noopener noreferrer external">Whatsapp   : 0813 3237 3728</a></td>
        </tr>
      </table>
    </Column>
  </Row>
  <hr class="mt-2">
  <form on:submit|preventDefault={ submit }>
    <input type="text" bind:value={ name } placeholder="Nama" class="form-input" required />
    <input type="email" bind:value={ email } placeholder="E-mail" class="form-input" required />
    <select bind:value={ work } placeholder="Saya adalah" class="form-select" required>
      <option value="Contractor">Contractor</option>
      <option value="Aplicator">Aplicator</option>
      <option value="Owner">Owner</option>
      <option value="Other">Other</option>
    </select>
    {#if work == 'other'}
      <input type="text" bind:value={ otherwork } placeholder="Pekerjaan Lain" class="form-input" />
    {/if}
    <input type="tel" bind:value={ phone } placeholder="No Telepon" class="form-input" required />
    <input type="text" bind:value={ address } placeholder="Alamat" class="form-input" required />
    <select bind:value={ nacessties } placeholder="Jenis Keperluan" class="form-select" required>
      <option value="Project Support">Project Support</option>
      <option value="Technical">TecASSIST(Technical)</option>
      <option value="Sales">Sales Enquiries</option>
      <option value="Other">Other Enquiries</option>
    </select>
    {#if nacessties == 'other'}
      <input type="text" bind:value={ othernacessties } placeholder="Keperluan Lain" class="form-input" />
    {/if}
    <textarea placeholder="Pesan" bind:value={ message } class="form-input mb-4" required></textarea>
    <button class="w-full px-3 py-2 text-white rounded-lg bg-primary">
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

<style>
  i[class^='i-mdi-']{
    font-size: 1.125rem;
    line-height: 1.75rem;
    display: block;
    color: var(--c-primary);
    margin-right: 0.5rem;
  }
  [class^='form-']{
    --un-border-opacity: 1;
    border-color: rgba(203,213,225,var(--un-border-opacity));
    width: 100%;
    margin-top: 0.5rem;
  }
</style>