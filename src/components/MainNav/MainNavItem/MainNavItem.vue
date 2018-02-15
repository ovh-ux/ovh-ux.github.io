<template>
<li class="main-nav-item">
  <a :href="'#' + mainNavItem" class="main-nav-item__link">
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
  }
}
</script>

<style scoped lang="scss">
@import './MainNavItem';
</style>
