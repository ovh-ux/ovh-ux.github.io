<template>
<section class="about__technologies">
  <h2 class="about__title">Technologies we love</h2>
  <ul class="about__technologies-list">
    <about-technology-item></about-technology-item>
  </ul>
</section>
</template>

<script>
import AboutTechnologyItem from '@/components/AboutSection/AboutTechnologyItem/AboutTechnologyItem';

export default {
  name: 'AboutTechnologies',
  components: {
    AboutTechnologyItem
  }
}
</script>

<style>
</style>
