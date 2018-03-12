<template>
<scrollactive class="main-nav" role="navigation"
  active-class="main-nav-item__link--active"
  :offset="0"
  :duration="720"
  bezier-easing-value=".3,0,.25,1.1">
  <ul class="main-nav__list">
    <main-nav-item v-for="mainNavItem in mainNavItems"
      :key="mainNavItem.id"
      :mainNavItem="mainNavItem"></main-nav-item>
  </ul>
</scrollactive>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'
import VueScrollactive from 'vue-scrollactive'
import MainNavItem from '@/components/MainNav/MainNavItem/MainNavItem';

Vue.use(VueScrollactive);

export default {
  name: 'MainNav',
  components: {
    MainNavItem
  },
  computed: mapGetters([
    'mainNavItems'
  ])
}
</script>

<style scoped lang="scss">
@import './MainNav';
</style>
