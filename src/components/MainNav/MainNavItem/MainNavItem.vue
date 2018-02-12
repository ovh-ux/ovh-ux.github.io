<template>
<li class="main-nav-item">
  <a :href="'#' + mainNavItem" class="main-nav-item__link">{{mainNavItem}}</a>
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
