<script lang="ts">
  import rest from '$lib/rest'
  import { user } from '$lib/stores'
  import { goto } from '$app/navigation';

  function logout() {
    rest("users/logout", "POST")
    .then(() => {
      user.set(null)
      goto('/4dm1n/login')
    })
  }

  let name = ""
  const userUnsubscribe = user.subscribe(v => {
    name = v ? v.name : ''
  })
</script>

<h1>Main Layout</h1>
<h3>Hellow { name }</h3>
<slot />
<button on:click={ logout }>Logout</button>