import { writable, get } from 'svelte/store';
import { browser } from '$app/env';

const name = '02d4061bafa777762af25bab8bc34f3b'

export const user = writable(browser && localStorage[name] ? JSON.parse(localStorage[name]) : null)
export const getUser = function(){ return get(user) }
if(browser) user.subscribe(v => localStorage[name] = v ? JSON.stringify(v) : null)
