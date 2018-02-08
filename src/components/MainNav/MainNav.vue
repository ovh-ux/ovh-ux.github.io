<template>
<nav class="main-nav">
  <ul>
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

<style scoped>
</style>
