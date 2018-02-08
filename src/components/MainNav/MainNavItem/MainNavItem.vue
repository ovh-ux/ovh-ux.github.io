<template>
<li class="main-nav">
  <a :href="'#' + mainNavItem">{{mainNavItem}}</a>
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

<style scoped>
</style>
