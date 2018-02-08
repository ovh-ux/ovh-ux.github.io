<template>
<section class="about__recent">
  <h2 class="about__title">Recent activity</h2>
  <ul class="about__recent-list">
    <about-recent-item></about-recent-item>
  </ul>
</section>
</template>

<script>
import AboutRecentItem from '@/components/AboutSection/AboutRecentItem/AboutRecentItem'
export default {
  name: 'AboutRecent',
  components: {
    AboutRecentItem
  }
}
</script>

<style>
</style>
