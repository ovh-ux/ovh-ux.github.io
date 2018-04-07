<template>
  <div id="app">
    <main-nav></main-nav>
    <main role="main">
      <div class="main-gradient">
        <home-section></home-section>
        <about-section></about-section>
      </div>
      <works-section></works-section>
      <contact-section></contact-section>
    </main>
  </div>
</template>

<script>
import MainNav from '@/components/MainNav/MainNav'
import HomeSection from '@/components/HomeSection/HomeSection'
import AboutSection from '@/components/AboutSection/AboutSection'
import WorksSection from '@/components/WorksSection/WorksSection'
import ContactSection from '@/components/ContactSection/ContactSection'

import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    MainNav,
    HomeSection,
    AboutSection,
    WorksSection,
    ContactSection
  },
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

<style lang="scss">
@import './main';
</style>
