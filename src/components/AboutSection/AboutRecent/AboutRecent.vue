<template>
<section class="about-recent">
  <h2 class="about-recent__title">Recent activity</h2>
  <ul class="about-recent__list">
    <about-recent-item  v-for="item in aboutRecentItems"
      :key="item.id"
      :item="item">
      </about-recent-item>
  </ul>
</section>
</template>

<script>
import { mapGetters } from 'vuex'
import AboutRecentItem from '@/components/AboutSection/AboutRecentItem/AboutRecentItem'

export default {
  name: 'AboutRecent',
  components: {
    AboutRecentItem,
  },
  computed: mapGetters([
    'aboutRecentItems',
  ])
}
</script>

<style scoped lang="scss">
@import "./AboutRecent";
</style>
