<template>
<li class="works__item">
  <section class="works__illustration"></section>

  <section class="works__description">
    <h2 class="works__title">{{work.name}}</h2>
    <div class="works__description-category">
      <h3 class="works__description-category-title">About</h3>
      <p>{{work.description}}</p>
    </div>

    <div class="works__description-category">
      <h3 class="works__description-category-title">Stats</h3>
      <ul class="works__stats-list">
        <works-stats-item v-for="stat in work.stats"
          :key="stat.id"
          :stat="stat"></works-stats-item>
      </ul>
    </div>

    <div class="works__description-category">
      <h3 class="works__description-category-title">Tags</h3>
      <ul class="works__tags-list">
        <li v-for="tag in work.tags"
          :key="tag.id"
          class="works__tags-item">{{tag}}</li>
      </ul>
    </div>
  </section>
</li>
</template>

<script>
import WorksStatsItem from '@/components/WorksSection/WorksStatsItem/WorksStatsItem'

export default {
  name: 'WorksItem',
  props: {
    work: {
      type: Object
    }
  },
  components: {
    WorksStatsItem
  }
}
</script>

<style>
</style>
