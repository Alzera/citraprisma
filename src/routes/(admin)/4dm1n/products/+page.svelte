<script lang="ts">
  import rest from '$lib/rest'
  import { onMount } from 'svelte'
  import loading from '$lib/loading'

  onMount(() => {
    $loading = true
    rest("/products/pager?q=al&page=1")
    .then(res => {
      console.log(res)
    })
    .finally(() => {
      $loading = false
    })
  })
</script>


<div class="overflow-x-auto relative shadow-md sm:rounded-lg">
  <table class="w-full text-sm text-left text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" class="py-3 px-6">Product name</th>
          <th scope="col" class="py-3 px-6">Category</th>
          <th scope="col" class="py-3 px-6">Price</th>
          <th scope="col" class="py-3 px-6">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white border-b">
          <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
            Apple MacBook Pro 17"
          </th>
          <td class="py-4 px-6">
            Laptop
          </td>
          <td class="py-4 px-6">
            $2999
          </td>
          <td class="py-4 px-6">
            <a href="#" class="font-medium text-blue-600">Edit</a>
          </td>
        </tr>
      </tbody>
  </table>
</div>
