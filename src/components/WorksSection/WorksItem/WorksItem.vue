<template>
<li class="works__item">
  <section class="works__illustration"></section>

  <section class="works__description">
    <h2 class="works__title">Telecom Control Panel</h2>
    <div class="works__description-category">
      <h3 class="works__description-category-title">About</h3>
      <p>OVH Control Panel Telecom UI - Official Repository</p>
    </div>

    <div class="works__description-category">
      <h3 class="works__description-category-title">Stats</h3>
      <ul class="works__stats-list">
        <works-stats-item></works-stats-item>
      </ul>
    </div>

    <div class="works__description-category">
      <h3 class="works__description-category-title">Tags</h3>
      <ul class="works__tags-list">
        <li class="works__tags-item">Tag01</li>
        <li class="works__tags-item">Tag02</li>
      </ul>
    </div>
  </section>
</li>
</template>

<script>
import WorksStatsItem from '@/components/WorksSection/WorksStatsItem/WorksStatsItem'

export default {
  name: 'WorksItem',
  components: {
    WorksStatsItem
  }
}
</script>

<style>
</style>
