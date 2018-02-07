<template>
  <div id="app">
    <main-nav></main-nav>
    <router-view/>
  </div>
</template>

<script>
import MainNav from '@/components/MainNav/MainNav'

export default {
  name: 'App',
  components: {
    MainNav
  }
}
</script>

<style>
</style>
