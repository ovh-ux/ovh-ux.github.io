<template>
<section class="about__recent">
  <h2 class="about__title">Recent activity</h2>
  <ul class="about__recent-list">
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
          icon : '@/assets/images/icons/puzzle_32px.svg',
          property : 'repositories on github',
          value : 0,
          type :'number'
        },
        {
          icon : '@/assets/images/icons/clock_32px.svg',
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

<style>
</style>
