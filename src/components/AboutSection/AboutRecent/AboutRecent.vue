<template>
<section class="about-recent">
  <h2 class="about-recent__title">Recent activity</h2>
  <ul class="about-recent__list">
    <about-recent-item v-for="item in recentItems"
      :key="item.id"
      :item="item"></about-recent-item>
  </ul>
</section>
</template>

<script>
import AboutRecentItem from '@/components/AboutSection/AboutRecentItem/AboutRecentItem'

export default {
  name: 'AboutRecent',
  components: {
    AboutRecentItem
  },
  data(){
    return {
      recentItems: [
        {
          icon : 'puzzle',
          property : 'repositories on github',
          value : 0,
          type :'number'
        },
        {
          icon : 'clock',
          property : 'latest updated repository',
          linkName : 'repository-name',
          linkHref : '#',
          linkInformations : '00 minutes ago',
          type :'link'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "./AboutRecent";
</style>
