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
import { mapGetters } from 'vuex'
import VueAgile from 'vue-agile'

import WorksItem from '@/components/WorksSection/WorksItem/WorksItem'

Vue.use(VueAgile)

export default {
  name: 'WorksSection',
  components: {
    WorksItem
  },
  computed: mapGetters([
    'works'
  ]),
  data() {
    return {
      leftArrow: '<svg xmlns="http://www.w3.org/2000/svg" class="agile__arrow-icon"><use xlink:href="#leftarrow_20px" /></svg>',
      rightArrow: '<svg xmlns="http://www.w3.org/2000/svg" class="agile__arrow-icon"><use xlink:href="#rightarrow_20px" /></svg>',
    }
  }
}
</script>
