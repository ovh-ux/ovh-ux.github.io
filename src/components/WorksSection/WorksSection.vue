<template>
<section class="main__section works">
  <ul class="works__list">
    <works-item></works-item>
  </ul>
  <button type="button">
    <img src="@/assets/images/icons/leftArrow_20px.svg" alt="Show previous work">
  </button>
  <button type="button">
    <img src="@/assets/images/icons/leftArrow_20px.svg" alt="Show next work">
  </button>
</section>
</template>

<script>
import WorksItem from '@/components/WorksSection/WorksItem/WorksItem'

export default {
  name: 'WorksSection',
  components: {
    WorksItem
  }
}
</script>

<style>
</style>
