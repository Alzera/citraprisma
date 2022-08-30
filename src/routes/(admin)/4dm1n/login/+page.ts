import { getUser } from '$lib/stores'
import type { Load } from "./$types"
import { goto } from '$app/navigation';
import { browser } from '$app/env';

export const load: Load = async () => {
  if(!browser) return;
  if(getUser() != null) goto("/4dm1n")
}
