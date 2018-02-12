<template>
<section class="about-technologies">
  <h2 class="about-technologies__title">Technologies we love</h2>
  <div class="about-technologies__dataviz">
    <ul class="about-technologies__list">
      <about-technology-item v-for="technology in technologies"
        :key="technology.id"
        :technology="technology"></about-technology-item>
    </ul>
    <div class="about-technologies__legend">
      <div class="property">Technology's name</div>
      <div class="value value--base">Repositories</div>
    </div>
  </div>
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

<style scoped lang="scss">
@import "./AboutTechnologies";
</style>
