<script lang="ts">
  import rest from '$lib/rest'
  import { user } from '$lib/stores'
  import { goto } from '$app/navigation';

  let email = 'ala', password = 'ala'

  function submit() {
    if(!email || !password) return;

    rest("users/login", "POST", {
      email,
      password
    })
    .then(() => rest("users/me", "GET"))
    .then(res => {
      if(res.data) {
        user.set(res.data)
        goto('/4dm1n')
      }
    })
  }
</script>

<h2>Login</h2>
<input type="email" bind:value={ email } />
<input type="password" bind:value={ password } />
<button on:click={ submit }>Login</button>