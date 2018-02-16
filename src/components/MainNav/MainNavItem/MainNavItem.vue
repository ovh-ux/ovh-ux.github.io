<template>
<li class="main-nav-item">
  <a :href="'#' + mainNavItem"
    class="main-nav-item__link"
    v-on:click="activeLink"
    :class="{ 'main-nav-item__link--active': isActive }">
    <span class="main-nav-item__link-indicator"></span>
    <span class="main-nav-item__link-label">{{mainNavItem}}</span>
  </a>
</li>
</template>

<script>
export default {
  name: 'MainNavItem',
  props: {
    mainNavItem: {
      type: String
    }
  },
  methods: {
    activeLink: function() {
      this.isActive = !this.isActive;
    }
  },
  data() {
    return {
      isActive : false
    }
  }
}
</script>

<style scoped lang="scss">
@import './MainNavItem';
</style>
