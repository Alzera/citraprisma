<script lang="ts">
  import { t } from '$lib/translations';
  const tp = 'products.jayaboard.'
  import { mq } from '$lib/mediaquery';

  import Row from "$lib/components/Row.svelte";
  import Column from "$lib/components/Column.svelte";
  import Container from "$lib/components/Container.svelte";
  import Article from '$lib/components/Article.svelte';
  import CloudinaryImage from '$lib/components/CloudinaryImage.svelte';
  
  interface Table {
    name: keyof TableItem;
    unit: string;
  }
  interface TableItem {
    thickness: number;
    width: number;
    length: number;
    weight: number | null;
  }
  interface Content {
    excellenceCount: number;
    image: string | null;
    tables: TableItem[] | null;
  }

  const contents: Content[] = [
    { 
      excellenceCount: 6, 
      image: "jayaboard.jpg", 
      tables: [
        { thickness: 6.5, width: 1200, length: 2400, weight: 4.9 },
        { thickness: 9, width: 1200, length: 2400, weight: 5.1 },
        { thickness: 12, width: 1200, length: 2400, weight: 7.1 },
      ],
    },
    { 
      excellenceCount: 4, 
      image: "soundstop_wetarea.jpg",
      tables: [
        { thickness: 12, width: 1200, length: 2400, weight: 11.5 },
      ],
    },
    { 
      excellenceCount: 5, 
      image: "heatstop.jpg",
      tables: [
        { thickness: 9, width: 1200, length: 2400, weight: 5.1 },
        { thickness: 12, width: 1200, length: 2400, weight: 7.1 },
      ],
    },
    { 
      excellenceCount: 4, 
      image: null,
      tables: [
        { thickness: 12, width: 1200, length: 2400, weight: 9.5 },
      ],
    },
    { 
      excellenceCount: 3, 
      image: "firestop.jpg",
      tables: [
        { thickness: 13, width: 1200, length: 2400, weight: 10.5 },
        { thickness: 16, width: 1200, length: 2400, weight: 13 },
        { thickness: 19, width: 1200, length: 2400, weight: 17.5 },
      ],
    },
    { 
      excellenceCount: 0, 
      image: null,
      tables: [
        { thickness: 13, width: 1200, length: 2400, weight: 10.5 },
        { thickness: 16, width: 1200, length: 2400, weight: 13 },
      ],
    },
    { 
      excellenceCount: 3, 
      image: "soundstop_wetarea.jpg",
      tables: [
        { thickness: 9, width: 1200, length: 2400, weight: 5.1 },
        { thickness: 13, width: 1200, length: 2400, weight: 8 },
      ],
    },
    { 
      excellenceCount: 4, 
      image: "moldstop.jpg",
      tables: [
        { thickness: 9, width: 1200, length: 2400, weight: 5.1 },
        { thickness: 12, width: 1200, length: 2400, weight: 7.1 },
      ],
    },
    { 
      excellenceCount: 6, 
      image: "impactstop.jpg",
      tables: [
        { thickness: 19, width: 1200, length: 2400, weight: 15.8 },
      ],
    },
    { 
      excellenceCount: 5, 
      image: "ss29.jpg",
      tables: [],
    },
    { 
      excellenceCount: 9, 
      image: null,
      tables: [
        { thickness: 9, width: 600, length: 600, weight: null },
        { thickness: 9, width: 600, length: 1200, weight: null },
        { thickness: 12, width: 600, length: 600, weight: null },
        { thickness: 12, width: 600, length: 1200, weight: null },
      ],
    },
  ]
  const contents3: Content[] = [
    { 
      excellenceCount: 3, 
      image: "98.jpg", 
      tables: null,
    },
    { 
      excellenceCount: 3, 
      image: "99.jpg", 
      tables: null,
    },
    { 
      excellenceCount: 3, 
      image: "97.jpg", 
      tables: null,
    },
    { 
      excellenceCount: 5, 
      image: "110.jpg", 
      tables: null,
    },
    { 
      excellenceCount: 4, 
      image: "104.jpg", 
      tables: null,
    },
    { 
      excellenceCount: 3, 
      image: "105.jpg", 
      tables: null,
    },
    { 
      excellenceCount: 3, 
      image: "103.jpg", 
      tables: null,
    },
    { 
      excellenceCount: 4, 
      image: "106.jpg", 
      tables: null,
    },
    { 
      excellenceCount: 3, 
      image: "107.jpg", 
      tables: null,
    },
  ]
  const tableItems: Table[] = [ 
    { name: 'thickness', unit: 'mm' },
    { name: 'width', unit: 'mm' },
    { name: 'length', unit: 'mm' },
    { name: 'length', unit: 'kg/m<sup>2</sup>' },
  ]
</script>

<CloudinaryImage src="products/jayaboard/18.jpg" alt="Banner" 
  widths="600px md:1024px" 
  crop="fill" 
  lazy={ false }
  preload={ true }
  height={ 400 }
  style={ $mq.mobile ? 'height:250px' : 'height:400px' }
  class="w-vw-center object-cover h-52 md:h-88" />
<Article title={ $t(tp + 'page.title') }>
  <br/>
  <Container fluid class="bg-cover bg-center !p-12 mb-3" style="background-image: url(https://res.cloudinary.com/cprisma/f_auto,t_low/products/jayaboard/achivement.png);">
    <Row class="gap-y-12">
      {#each Array(2) as _, row}
          {#each Array(3) as _, column}
            {@const index = row * 3 + column}
            <Column cols={ 6 } md={ 4 } class="flex items-center flex-col text-white">
              <CloudinaryImage class="h-32 w-32 object-contain" src={ `products/jayaboard/${index}.png` } alt={ `achivement ${index}` } widths="300px" />
              <h3 class="text-base !text-center">{ $t(tp + 'achievements.' + index + '.title') }</h3>
              <p class="text-center text-sm">{ $t(tp + 'achievements.' + index + '.content') }</p>
            </Column>
          {/each}
      {/each}
    </Row>
  </Container>
  {#each contents as item, i}
    {@const section = 'contents.' + i + "."}
    <h2 class="text-2xl text-primary mb-1">{ $t(tp + section + 'title') }</h2>
    <Row>
      <Column cols={ 12 } md={ 8 } class="order-1 md:order-none">
        <p class="mb-1">{ $t(tp + section + 'content') }</p>
        <ul class="mb-3">
          {#each Array(item.excellenceCount) as _, li}
            <li>{ $t(tp + section + 'excellence.' + li) }</li>
          {/each}
        </ul>

        {#if item.tables}
          <table class="default-table mb-6">
            <tr>
              {#each tableItems as tableItem}
                <th>{ $t(tp + tableItem.name) } ({@html tableItem.unit })</th>
              {/each}
            </tr>
            {#each item.tables as v}
              <tr>
                {#each tableItems as tableItem}
                  <td>{ v[tableItem.name] }</td>
                {/each}
              </tr>
            {/each}
          </table>
        {/if}
      </Column>
      {#if item.image}
        <Column cols={ 12 } md={ 4 } class="flex justify-center">
          <CloudinaryImage class="h-48 object-contain" src={ `products/jayaboard/${item.image}` } alt={ `image ${item.image}` } widths="300px" />
        </Column>
      {/if}
    </Row>
  {/each}
  <hr class="my-3">

  {#each Array(3) as _, i}
    <h2 class="text-2xl text-primary mb-1">{ $t(tp + `content2.${i}.title`) }</h2>
    <Row>
      {#each Array(2) as _, ii}
        <Column cols={ 12 } md={ 6 }>
          <h2 class="text-xl text-primary mb-1">{ $t(tp + `content2.${i}.items.${ii}.title`) }</h2>
          <p class="mb-3">{ $t(tp + `content2.${i}.items.${ii}.content`) }</p>
        </Column>
      {/each}
    </Row>
  {/each}

  <hr class="my-3">
  {#each contents3 as item, i}
    {@const section = 'contents3.' + i + "."}
    <h2 class="text-2xl text-primary mb-1">{ $t(tp + section + 'title') }</h2>
    <Row>
      <Column cols={ 12 } md={ 8 } class="order-1 md:order-none">
        <p class="mb-1">{ $t(tp + section + 'content') }</p>
        <ul class="mb-3">
          {#each Array(item.excellenceCount) as _, li}
            <li>{ $t(tp + section + 'excellence.' + li) }</li>
          {/each}
        </ul>

        {#if item.tables}
          <table class="default-table mb-6">
            <tr>
              {#each tableItems as tableItem}
                <th>{ $t(tp + tableItem.name) } ({@html tableItem.unit })</th>
              {/each}
            </tr>
            {#each item.tables as v}
              <tr>
                {#each tableItems as tableItem}
                  <td>{ v[tableItem.name] }</td>
                {/each}
              </tr>
            {/each}
          </table>
        {/if}
      </Column>
      {#if item.image}
        <Column cols={ 12 } md={ 4 } class="flex justify-center">
          <CloudinaryImage class="h-48 object-contain" src={ `products/jayaboard/${item.image}` } alt={ `image ${item.image}` } widths="300px" />
        </Column>
      {/if}
    </Row>
  {/each}
  <br />
  <br />
  <p>
    <a href="/pdfs/Brosur Compact Jaya Board - Oktober 2019.pdf" download target="_blank" rel="noopener noreferrer external">
      <CloudinaryImage src="icon_download_catalog.jpg" alt="Download Catalog" widths="200px" />
    </a>
  </p>
</Article>

<style lang="scss">
  .default-table {
    td { text-align: center; }
  }
</style>