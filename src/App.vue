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

export default {
  name: 'App',
  components: {
    MainNav,
    HomeSection,
    AboutSection,
    WorksSection,
    ContactSection
  }
}
</script>

<style lang="scss">
@import './main';
</style>
