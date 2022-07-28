<script>
  import { t, locale, locales } from '$lib/translations';
</script>

<select bind:value="{$locale}" class="language-selector form-select border border-slate-600 rounded">
  {#each $locales as value}
    <option value="{value}">{$t(`lang.${value}`)}</option>
  {/each}
</select>

<style>
  .language-selector {
    padding: .2rem 2rem .2rem .5rem !important;
    width: unset;
  }
</style>