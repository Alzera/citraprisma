<script lang="ts">
  import { page } from '$app/stores';

  const fullPath = $page.url.pathname
  const params = fullPath.startsWith('/')
    ? fullPath.substring(1).split('/')
    : fullPath.split('/')
  const crumbs: { title: string, path: string }[] = []
  let path = ''
  params.filter(i => i).forEach((param) => {
    path = `${path}/${param}`
    crumbs.push({
      title: param,
      path: path
    })
  })
</script>

<ol vocab="http://schema.org/" typeof="BreadcrumbList" class="breadcrumb-list text-base flex items-center">
  {#each crumbs as crumb, i}
    <li property="itemListElement" typeof="ListItem">
      {#if i == crumbs.length - 1}
        <span property="name">{ crumb.title }</span>
      {:else}
        <a sveltekit:prefetch href={ crumb.path } property="item" typeof="WebPage">
          <span property="name">{ crumb.title }</span>
        </a>
      {/if}
      <meta property="position" content={ (i + 1) + "" } />
    </li>
  {/each}
</ol>

<style lang="scss" global>
  .breadcrumb-list {
    list-style-type: none;
    padding: 0;
    li {
      display: inline-block;
      text-transform: capitalize;
      &:not(:last-child):after {
        content: ">";
        margin: 0 0.4rem 0 0.2rem;
      }
    }
  }
  </style>