<template>
<li class="stats-item">
  <div class="icon-container icon-container--small">
    <svg xmlns="http://www.w3.org/2000/svg"
          class="icon"
          aria-hidden="true">
        <use :href="'#' + stat.icon + '_20px'" />
    </svg>
  </div>
  <div class="stats-item__description">
    <div class="value value--l1">{{stat.value}}</div>
    <div class="property">{{stat.property}}</div>
  </div>
</li>
</template>

<script>
export default {
  name: 'WorksSection',
  props: {
    stat: {
      type: Object
    }
  }
}
</script>

<style>
</style>
