<script lang="ts">
  export let
    content: { left: string, right: string | null }[],
    title: string | null = null
</script>

<table class={ `table-fixed table-2-column w-full ${ $$props.class || '' }` }>
  {#if title}
    <thead>
      <tr>
        <th colspan="2" class="text-left pl-0">{ title }</th>
      </tr>
    </thead>
  {/if}
  <tbody>
    {#each content as item}
      <tr>
        <td class="pl-0">{ item.left }</td>
        <td class="pr-0">
          {#if item.right}
            <ul>
              <li>{ item.right }</li>
            </ul>
          {/if}
        </td>
      </tr>
    {/each}
  </tbody>
</table>

<style lang="scss">
  @mixin t-head {
    font-style: italic;
    font-size: 1.2rem !important;
    color: darkslategray !important;
  }
  .t-head { 
    @include t-head;
  }
  .table-2-column {
    th, td {
      font-size: 16px !important;
      border-bottom: none !important;
      &:nth-child(1) {
        width: 40%;
      }
    }
    th { 
      @include t-head;
    }
  }
  </style>