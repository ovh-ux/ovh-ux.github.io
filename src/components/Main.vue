<template>
  <main>
    <home></home>
    <about></about>
    <works></works>
    <contact></contact>
  </main>
</template>

<script>
import Home from '@/components/Home/Home'
import About from '@/components/About/About'
import Works from '@/components/Works/Works'
import Contact from '@/components/Contact/Contact'

export default {
  name: 'Main',
  components: {
    Home,
    About,
    Works,
    Contact
  }
}
</script>

<style>
</style>
