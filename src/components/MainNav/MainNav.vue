<template>
<nav class="main-nav" role="navigation">
  <ul class="main-nav__list">
    <main-nav-item v-for="mainNavItem in mainNavItems"
      :key="mainNavItem.id"
      :mainNavItem="mainNavItem"></main-nav-item>
  </ul>
</nav>
</template>

<script>
import MainNavItem from '@/components/MainNav/MainNavItem/MainNavItem';

export default {
  name: 'MainNav',
  components: {
    MainNavItem
  },
  data() {
    return {
      mainNavItems : [
        'Home',
        'About',
        'Works',
        'Contact'
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import './MainNav';
</style>
