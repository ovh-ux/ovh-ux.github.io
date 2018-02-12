<template>
<li class="contact-item">
  <div class="icon-container icon-container--large">
    <svg xmlns="http://www.w3.org/2000/svg"
      class="icon"
      aria-hidden="true">
      <use :href="'#' + contactMean.icon + '_32px'" />
    </svg>
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
