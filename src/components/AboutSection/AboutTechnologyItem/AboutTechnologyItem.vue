<template>
<li class="technology-item">
  <div class="technologies-logo-container">
    <img src="technology.logo"
        class="technologies-logo"
        :alt="technology.name + ' logo'">
  </div>
  <div class="technologies-amount">
    <div class="technologies-gradient"></div>
  </div>
  <div class="technologies-legend">
    <div class="property">{{technology.name}}</div>
    <div class="value value--l1">{{technology.projectsAmount}}</div>
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

<style>
</style>
