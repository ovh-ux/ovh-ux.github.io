<template>
<div class="slide works-item">
  <section class="works-item__illustration"></section>

  <section class="works-item__description">
    <h2 class="works-item__title">{{work.name}}</h2>
    <div class="works-item__description-category">
      <h3 class="works-item__description-category-title">About</h3>
      <p class="works-item__description-category-text">{{work.description}}</p>
    </div>

    <div class="works-item__description-category">
      <h3 class="works-item__description-category-title">Stats</h3>
      <ul class="works-item__stats-list">
        <works-stats-item v-for="stat in work.stats"
          :key="stat.id"
          :stat="stat"></works-stats-item>
      </ul>
    </div>

    <div class="works-item__description-category">
      <h3 class="works-item__description-category-title">Tags</h3>
      <ul class="works-item__tags-list">
        <li v-for="tag in work.tags"
          :key="tag.id"
          class="works-item__tags-item">{{tag}}</li>
      </ul>
    </div>
    <div class="works-item__CTA">
      <a :href="work.link" target="_blank"
        class="btn btn--primary">See the project</a>
    </div>
  </section>
</div>
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

<style scoped lang="scss">
@import "./WorksItem.scss";
</style>
