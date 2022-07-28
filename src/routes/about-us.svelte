<script lang="ts">
  import { t } from '$lib/translations';

  import Row from "$lib/components/Row.svelte";
  import Column from "$lib/components/Column.svelte";
  import Container from "$lib/components/Container.svelte";
</script>

<Container class="my-2">
  <h1 class="text-3xl mb-3 text-primary">{ $t('about-us.page.title') }</h1>
  <h2 class="text-xl text-primary">{ $t('about-us.subtitle') }</h2>
  <p class="text-base mb-1">{ $t('about-us.body1') }</p>
  <p class="text-base mb-1">{ $t('about-us.body2') }</p>
  <p class="text-base mb-2">{ $t('about-us.body3') }</p>
  <h2 class="text-xl text-primary">{ $t('about-us.vision_mission_title') }</h2>
  <p class="text-base mb-2">{ $t('about-us.vision_mission') }</p>
  <Row>
    <Column cols={ 12 } md={ 6 }>
      <h2 class="text-xl text-primary">{ $t('about-us.distributor_title') }</h2>
      <ul style="list-style-type:square">
        <li>
          <h3 class="text-base text-primary">{ $t('about-us.distributor.0') }</h3>
          <ul class="type-minus">
            <li>Grace - De Neef : USA - Belgium</li>
            <li>Adcos : USA - Belgium</li>
            <li>Bostik : France - Australia</li>
          </ul>
        </li>
        <li>
          <h3 class="text-base text-primary">{ $t('about-us.distributor.1') }</h3>
          <ul class="type-minus">
            <li>Knauf, AMD & Amstrong : Germany</li>
            <li>Jaya Board : Australia</li>
            <li>Yoshino : Japan</li>
          </ul>
        </li>
        <li>
          <h3 class="text-base text-primary">{ $t('about-us.distributor.2') }</h3>
          <ul class="type-minus">
            <li>Hunter Douglas : Germany</li>
          </ul>
        </li>
        <li>
          <h3 class="text-base text-primary">{ $t('about-us.distributor.3') }</h3>
          <ul class="type-minus">
            <li>Rockwool : Denmark</li>
          </ul>
        </li>
        <li>
          <h3 class="text-base text-primary">{ $t('about-us.distributor.4') }</h3>
          <ul class="type-minus">
            <li>Wacker : Germany</li>
            <li>Bostik : France - Australia</li>
          </ul>
        </li>
        <li>
          <h3 class="text-base text-primary">{ $t('about-us.distributor.5') }</h3>
          <ul class="type-minus">
            <li>TOA : Thailand</li>
            <li>KCC : Korea</li>
          </ul>
        </li>
        <li>
          <h3 class="text-base text-primary">{ $t('about-us.distributor.6') }</h3>
          <ul class="type-minus">
            <li>Blesscon : Indonesia</li>
          </ul>
        </li>
        <li>
          <h3 class="text-base text-primary">{ $t('about-us.distributor.7') }</h3>
          <ul class="type-minus">
            <li>Conwood : Thailand</li>
          </ul>
        </li>
        <li>
          <h3 class="text-base text-primary">{ $t('about-us.distributor.8') }</h3>
          <ul class="type-minus">
            <li>Kalsi Board: USA - Belgium</li>
            <li>Royal Board : Indonesia</li>
          </ul>
        </li>
        <li>
          <h3 class="text-base text-primary">{ $t('about-us.distributor.9') }</h3>
          <ul class="type-minus">
            <li>Pioneer : Philippines</li>
          </ul>
        </li>
      </ul>
    </Column>
    <Column cols={ 12 } md={ 6 }>
      <h2 class="text-xl text-primary">{ $t('about-us.specialist_title') }</h2>
      <ul style="list-style-type:square">
        <li>Pressure Grouting</li>
        <li>Waterproofing</li>
        <li>Concrete Fibres</li>
        <li>Epoxy & PU Flooring</li>
        <li>Gypsum Ceiling & Partition</li>
        <li>Accoustic Ceiling</li>
        <li>Aluminium Ceiling</li>
        <li>Tile Adhesives</li>
        <li>Structural Sealant</li>
        <li>Aluminium & Glass Sealant</li>
        <li>GRC Sealant</li>
        <li>Hollow & Metal Frames</li>
        <li>Fire, THermal & Sound Insulation</li>
        <li>Wall Siding & Decking</li>
        <li>Light Brick</li>
      </ul>
    </Column>
  </Row>
</Container>

<style>
  ul.type-minus { list-style-type: '- '; }
</style>