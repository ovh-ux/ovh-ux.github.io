<template>
<li class="about-technology-item">
  <div class="about-technology-item__graph">
    <div class="about-technology-item__logo-container"
      :style="{'--projectPerTechno' : technology.projectsAmount, '--allProjects' : aboutRecentItems[0].value}">
      <svg xmlns="http://www.w3.org/2000/svg"
        class="about-technology-item__logo"
        aria-hidden="true">
        <use :xlink:href="'#' + technology.logo" />
      </svg>
    </div>
    <div class="about-technology-item__amount"
      :style="{'--projectPerTechno' : technology.projectsAmount, '--allProjects' : aboutRecentItems[0].value}">
      <div class="about-technology-item__gradient"></div>
    </div>
  </div>
  <div class="about-technology-item__legend">
    <div class="property">{{technology.name}}</div>
    <div class="value value--base">{{technology.projectsAmount}}</div>
  </div>
</li>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AboutTechnologyItem',
  props: {
    technology: {
      type: Object
    }
  },
  computed: mapGetters([
    'aboutRecentItems',
  ])
}
</script>

<style scoped lang="scss">
@import "./AboutTechnologyItem";
</style>
