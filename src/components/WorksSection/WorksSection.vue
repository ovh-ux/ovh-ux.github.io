<template>
<section id="Works" class="main__section works">
  <agile class="works__list"
    :dots="false" :prevArrow="leftArrow" :nextArrow="rightArrow">
    <works-item v-for="work in works"
      :key="work.id"
      :work="work"></works-item>
  </agile>
</section>
</template>

<script>
import Vue from 'vue'
import VueAgile from 'vue-agile'

import WorksItem from '@/components/WorksSection/WorksItem/WorksItem'

Vue.use(VueAgile)

export default {
  name: 'WorksSection',
  components: {
    WorksItem
  },
  data() {
    return {
      leftArrow: '<svg xmlns="http://www.w3.org/2000/svg" class="agile__arrow-icon"><use href="#leftarrow_20px" /></svg>',
      rightArrow: '<svg xmlns="http://www.w3.org/2000/svg" class="agile__arrow-icon"><use href="#rightarrow_20px" /></svg>',
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
        },
        {
          name: 'Cloud Control Panel',
          type: 'interface',
          description: 'OVH Control Panel Cloud UI - Official Repository',
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
            'tag02',
            'tag03'
          ]
        }
      ]
    }
  }
}
</script>
