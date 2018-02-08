<template>
  <main>
    <home-section></home-section>
    <about-section></about-section>
    <works-section></works-section>
    <contact-section></contact-section>
  </main>
</template>

<script>
import HomeSection from '@/components/HomeSection/HomeSection'
import AboutSection from '@/components/AboutSection/AboutSection'
import WorksSection from '@/components/WorksSection/WorksSection'
import ContactSection from '@/components/ContactSection/ContactSection'

export default {
  name: 'Main',
  components: {
    HomeSection,
    AboutSection,
    WorksSection,
    ContactSection
  }
}
</script>

<style>
</style>
