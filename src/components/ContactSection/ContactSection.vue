<template>
<section id="Contact" class="main__section contact">
  <ul class="contact__list">
    <contact-item v-for="contactMean in contactMeans"
      :key="contactMean.id"
      :contactMean="contactMean"></contact-item>
  </ul>
</section>
</template>

<script>
import { mapGetters } from 'vuex'
import ContactItem from '@/components/ContactSection/ContactItem/ContactItem'

export default {
  name: 'ContactSection',
  components: {
    ContactItem
  },
  computed: mapGetters([
    'contactMeans'
  ])
}
</script>

<style scoped lang="scss">
@import "./ContactSection.scss";
</style>
