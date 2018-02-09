<template>
<section class="main__section works">
  <ul class="works__list">
    <works-item v-for="work in works"
      :key="work.id"
      :work="work"></works-item>
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
  },
  data() {
    return {
      works: [
        {
          name: 'Telecom Control Panel',
          type: 'interface',
          description: 'OVH Control Panel Telecom UI - Official Repository',
          stats: [
            {
              property: 'Commits',
              icon: 'pen',
              value: 0
            },
            {
              property: 'Contributors',
              icon: 'person',
              value: 0
            },
            {
              property: 'since last update',
              icon: 'clock',
              value: '0 mn'
            }
          ],
          tags: [
            'tag01',
            'tag02'
          ]
        }
      ]
    }
  }
}
</script>

<style>
</style>
