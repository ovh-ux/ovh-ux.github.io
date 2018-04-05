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
import { mapGetters, mapActions } from 'vuex'
import AboutRecentItem from '@/components/AboutSection/AboutRecentItem/AboutRecentItem'

export default {
  name: 'AboutRecent',
  components: {
    AboutRecentItem,
  },
  computed: mapGetters([
    'aboutRecentItems',
  ]),
  methods: mapActions({
    upNbrRepos: 'nbrRepos',
    upLastRepo: 'lastPushed',
    upAboutTechno: 'aboutTechno',
    upManager: 'manager',
    upOtherProjects: 'otherProjects'
  }),
  mounted: function() {
    this.upNbrRepos(),
    this.upLastRepo(),
    this.upAboutTechno(),
    this.upManager('ovh-manager-telecom'),
    this.upManager('ovh-manager-cloud'),
    this.upManager('ovh-manager-web'),
    this.upManager('ovh-manager-dedicated'),
    this.upOtherProjects()
  }
}
</script>

<style scoped lang="scss">
@import "./AboutRecent";
</style>
