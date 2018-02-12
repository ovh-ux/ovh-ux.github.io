<template>
<li class="recent-item">
  <div class="icon-container icon-container--base">
    <svg xmlns="http://www.w3.org/2000/svg"
      class="icon"
      aria-hidden="true">
      <use :href="'#' + item.icon + '_32px'" />
    </svg>
  </div>
  <div v-if="item.type === 'number'" class="recent-item__description">
    <div class="value value--l2">{{item.value}}</div>
    <div class="property">{{item.property}}</div>
  </div>
  <div v-if="item.type === 'link'" class="recent-item__description">
    <div class="property">{{item.property}}</div>
    <div class="value value--base">
      <a class="link" href="item.linkHref">{{item.linkName}}</a>, {{item.linkInformations}}
    </div>
  </div>
</li>
</template>

<script>
export default {
  name: 'AboutRecentItem',
  props: {
    item: {
      type: Object
    }
  }
}
</script>

<style>
</style>
