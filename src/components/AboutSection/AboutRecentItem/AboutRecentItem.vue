<template>
<li class="about-recent-item">
  <div class="icon-container icon-container--base">
    <svg xmlns="http://www.w3.org/2000/svg"
      class="icon"
      aria-hidden="true">
      <use :xlink:href="'#' + item.icon + '_32px'" />
    </svg>
  </div>
  <div v-if="item.type === 'number'" class="about-recent-item__description">
    <div class="value value--large">{{item.value}}</div>
    <div class="property">{{item.property}}</div>
  </div>
  <div v-if="item.type === 'link'" class="about-recent-item__description">
    <div class="property">{{item.property}}</div>
    <div class="value value--small">
      <a class="link"
        :href="item.linkHref"
        target="_blank" rel="noopener">
        {{item.linkName}}
      </a>, {{item.linkInformations}}
    </div>
  </div>
</li>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  name: 'AboutRecentItem',
  props: {
    item: {
      type: Object
    }
  },
}
</script>

<style scoped lang="scss">
@import "./AboutRecentItem";
</style>
