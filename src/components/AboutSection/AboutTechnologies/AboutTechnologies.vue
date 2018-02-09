<template>
<section class="about__technologies">
  <h2 class="about__title">Technologies we love</h2>
  <ul class="about__technologies-list">
    <about-technology-item v-for="technology in technologies"
      :key="technology.id"
      :technology="technology"></about-technology-item>
  </ul>
</section>
</template>

<script>
import AboutTechnologyItem from '@/components/AboutSection/AboutTechnologyItem/AboutTechnologyItem';

export default {
  name: 'AboutTechnologies',
  components: {
    AboutTechnologyItem
  },
  data() {
    return {
      technologies : [
        {
          name: 'Node.js',
          logo: 'node-js',
          projectsAmount: 0
        },
        {
          name: 'HTML5',
          logo: 'html5',
          projectsAmount: 0
        }
      ]
    }
  }
}
</script>

<style>
</style>
