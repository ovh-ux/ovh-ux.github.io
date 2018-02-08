<template>
<li class="contact-item">
  <div class="icon-container">
    <img src="contactMean.icon" alt="">
  </div>
  <div class="contact-item__title">{{contactMean.name}}</div>
  <div class="contact-item__description" v-html="contactMean.description"></div>
</li>
</template>

<script>
export default {
  name: 'ContactSection',
  props: {
    contactMean: {
      type: Object
    }
  }
}
</script>

<style>
</style>
