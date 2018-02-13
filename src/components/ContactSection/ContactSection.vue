<template>
<section class="main__section contact">
  <ul class="contact__list">
    <contact-item v-for="contactMean in contactMeans"
      :key="contactMean.id"
      :contactMean="contactMean"></contact-item>
  </ul>
</section>
</template>

<script>
import ContactItem from '@/components/ContactSection/ContactItem/ContactItem'

export default {
  name: 'ContactSection',
  components: {
    ContactItem
  },
  data() {
    return {
      contactMeans : [
        {
          name: 'Discuss',
          icon: 'speechbubble',
          description: 'Whether you have questions, suggestions or requests, feel free to discuss with us on <a class="link link--accented" href="https://gitter.im/ovh/ux">Gitter</a>.'
        },
        {
          name: 'Contribute',
          icon: 'script',
          description: 'Share with us your improvement ideas, tell us about a bug you\'ve found by creating <a class="link link--accented" href="https://github.com/ovh-ux/ovh-ux-guidelines/blob/master/.github/CONTRIBUTING.md#finding-wonderful-bugs">an issue</a>. Or contribute to our open source interfaces and components on <a class="link link--accented" href="https://github.com/ovh-ux">GitHub</a>.'
        },
        {
          name: 'Join us',
          icon: 'hands',
          description: 'We are always seeking for talented people. If you have the ambition, the passion and want to do something new, <a class="link link--accented" href="https://careers.ovh.com/fr/">please apply</a> : we will be very glad to meet you.'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "./ContactSection.scss";
</style>
