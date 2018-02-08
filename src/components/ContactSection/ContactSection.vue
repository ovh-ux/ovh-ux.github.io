<template>
<section class="main__section contact">
  <ul class="contact__list">
    <contact-item></contact-item>
  </ul>
</section>
</template>

<script>
import ContactItem from '@/components/ContactSection/ContactItem/ContactItem'

export default {
  name: 'ContactSection',
  components: {
    ContactItem
  }
}
</script>

<style>
</style>
