<template>
<li class="about-technology-item">
  <div class="about-technology-item__graph">
    <div class="about-technology-item__logo-container">
      <img :src="'./assets/images/logos/' + technology.logo + '.svg'" alt=""
        class="about-technology-item__logo">
    </div>
    <div class="about-technology-item__amount">
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
export default {
  name: 'AboutTechnologyItem',
  props: {
    technology: {
      type: Object
    }
  }
}
</script>

<style scoped lang="scss">
@import "./AboutTechnologyItem";
</style>
