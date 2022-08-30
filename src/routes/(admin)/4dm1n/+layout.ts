import { getUser } from '$lib/stores'
import { goto } from '$app/navigation';
import type { LayoutLoad } from "./$types"
import { browser } from '$app/env';

export const load: LayoutLoad = async () => {
  if(!browser) return;
  if(getUser() == null) goto("/4dm1n/login")
}
